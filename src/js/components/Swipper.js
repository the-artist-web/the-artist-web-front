"use strict";

export const Swipper = ($element) => {
    const $swipperNext = $element.querySelector("[data-swipper-next]");
    const $swipperPrev = $element.querySelector("[data-swipper-prev]");
    const $swipperContainer = $element.querySelector("[data-swipper-container]");
    const isRTL = document.documentElement.dir === "rtl";

    const scrollAmount = 300;
    const fadeSize = 200;

    if (!$swipperPrev || !$swipperNext || !$swipperContainer) return;

    const isDesktop = () => window.innerWidth >= 768;

    const updateButtons = () => {
        const { scrollLeft, scrollWidth, clientWidth } = $swipperContainer;
        const maxScroll = scrollWidth - clientWidth;

        const absScroll = Math.abs(scrollLeft);

        const isAtStart = absScroll <= 5;
        const isAtEnd = absScroll >= maxScroll - 5;

        const hideStart = isAtStart || !isDesktop();
        const hideEnd = isAtEnd || !isDesktop();

        $swipperPrev.classList.toggle("d-none", hideStart);
        $swipperPrev.toggleAttribute("disabled", hideStart);

        $swipperNext.classList.toggle("d-none", hideEnd);
        $swipperNext.toggleAttribute("disabled", hideEnd);

        if (!isDesktop()) {
            $swipperContainer.style.maskImage = "none";
            return;
        }

        if (isAtStart && isAtEnd) 
            $swipperContainer.style.maskImage = "none";
        else if (isAtStart) 
            $swipperContainer.style.maskImage = `linear-gradient(${isRTL ? 'to left' : 'to right'}, black calc(100% - ${fadeSize}px), transparent)`;
        else if (isAtEnd) 
            $swipperContainer.style.maskImage = `linear-gradient(${isRTL ? 'to right' : 'to left'}, black calc(100% - ${fadeSize}px), transparent)`;
        else 
            $swipperContainer.style.maskImage = `linear-gradient(to right, transparent, black ${fadeSize}px, black calc(100% - ${fadeSize}px), transparent)`;
    };

    const scroll = (direction) => {
        const multiplier = isRTL ? -1 : 1;
        $swipperContainer.scrollBy({
            left: direction * scrollAmount * multiplier,
            behavior: "smooth"
        });
    };

    $swipperPrev.addEventListener("click", () => scroll(-1));
    $swipperNext.addEventListener("click", () => scroll(1));
    $swipperContainer.addEventListener("scroll", updateButtons);

    window.addEventListener("resize", updateButtons);

    updateButtons();

    const resizeObserver = new ResizeObserver(() => updateButtons());
    resizeObserver.observe($swipperContainer);
};