"use strict";

export const Swipper = ($element) => {
    const $swipperLeft = $element.querySelector("[data-swipper-left]");
    const $swipperRight = $element.querySelector("[data-swipper-right]");
    const $swipperContainer = $element.querySelector("[data-swipper-container]");
    const dir = document.documentElement.dir;

    const amount = 500;

    $swipperLeft.addEventListener("click", () => {
        if (dir === "ltr")
            $swipperContainer.scrollBy({
                left: -amount,
                behavior: "smooth"
            });
        else
            $swipperContainer.scrollBy({
                left: amount,
                behavior: "smooth"
            });
    });

    $swipperRight.addEventListener("click", () => {
        if (dir === "ltr")
            $swipperContainer.scrollBy({
                left: amount,
                behavior: "smooth"
            });
        else
            $swipperContainer.scrollBy({
                left: -amount,
                behavior: "smooth"
            });
    });
};