"use strict";

export const Swipper = ($element) => {
    const $swipperLeft = $element.querySelector("[data-swipper-left]");
    const $swipperRight = $element.querySelector("[data-swipper-right]");
    const $swipperContainer = $element.querySelector("[data-swipper-container]");

    const amount = 500;

    const updateButtons = () => {
        const maxScroll = $swipperContainer.scrollWidth - $swipperContainer.clientWidth;

        if ($swipperContainer.scrollLeft <= 0)
            $swipperLeft.disabled = true;
        else
            $swipperLeft.disabled = false;

        if ($swipperContainer.scrollLeft >= maxScroll)
            $swipperRight.disabled = true;
        else
            $swipperRight.disabled = false;
    };

    $swipperLeft.addEventListener("click", () => {
        $swipperContainer.scrollBy({
            left: -amount,
            behavior: "smooth"
        });

        setTimeout(updateButtons, 300);
    });

    $swipperRight.addEventListener("click", () => {
        $swipperContainer.scrollBy({
            left: amount,
            behavior: "smooth"
        });

        setTimeout(updateButtons, 300);
    });

    updateButtons();
};