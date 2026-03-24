"use strict";

export const Swipper = ($element) => {
    const $swipperNext = $element.querySelector("[data-swipper-next]");
    const $swipperPrev = $element.querySelector("[data-swipper-prev]");
    const $swipperContainer = $element.querySelector("[data-swipper-container]");
    const isRTL = document.documentElement.dir === "rtl";

    const scrollAmount = 300;

    if (!$swipperPrev || !$swipperNext || !$swipperContainer) return;

    const updateButtons = () => {
        const scrollLeft = $swipperContainer.scrollLeft;
        const maxScroll = $swipperContainer.scrollWidth - $swipperContainer.clientWidth;

        if (!isRTL) {
            $swipperPrev.classList.toggle("d-none", scrollLeft <= 0);
            $swipperNext.classList.toggle("d-none", scrollLeft >= maxScroll - 1);
        } else {
            $swipperPrev.classList.toggle("d-none", scrollLeft >= 0);
            $swipperNext.classList.toggle("d-none", Math.abs(scrollLeft) >= maxScroll - 1);
        }

        const isAtStart = !isRTL
            ? scrollLeft <= 0
            : Math.abs(scrollLeft) <= 0;

        const isAtEnd = !isRTL
            ? scrollLeft >= maxScroll - 1
            : Math.abs(scrollLeft) >= maxScroll - 1;

        const fadeSize = 120;

        if (isAtStart)
            $swipperContainer.style.maskImage = isRTL
                ? `linear-gradient(to left, var(--background) calc(100% - ${fadeSize}px), transparent)`
                : `linear-gradient(to right, var(--background) calc(100% - ${fadeSize}px), transparent)`;
        else if (isAtEnd)
            $swipperContainer.style.maskImage = isRTL
                ? `linear-gradient(to right, var(--background) calc(100% - ${fadeSize}px), transparent)`
                : `linear-gradient(to left, var(--background) calc(100% - ${fadeSize}px), transparent)`;
        else
            $swipperContainer.style.maskImage = `
                linear-gradient(
                    to right,
                    transparent 0px,
                    var(--background) ${fadeSize}px,
                    var(--background) calc(100% - ${fadeSize}px),
                    transparent 100%
                )
            `;
    };

    const scroll = (direction) => {
        const value = direction * scrollAmount;

        if (!isRTL)
            $swipperContainer.scrollBy({
                left: value,
                behavior: "smooth"
            });
        else 
            $swipperContainer.scrollBy({
                left: -value,
                behavior: "smooth"
            });
    };

    $swipperPrev.addEventListener("click", () => scroll(-1));

    $swipperNext.addEventListener("click", () => scroll(1));

    $swipperContainer.addEventListener("scroll", updateButtons);

    updateButtons();
};