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
            $swipperPrev.disabled = scrollLeft <= 0;
            $swipperNext.disabled = scrollLeft >= maxScroll - 1;
        } else {
            $swipperPrev.disabled = scrollLeft >= 0;
            $swipperNext.disabled = Math.abs(scrollLeft) >= maxScroll - 1;
        }
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