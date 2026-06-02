"use strict";

/**
 * Import Modules
 */
import { addEventOnElements } from "../utils.js";

export const SelectStar = ($element) => {
    const $stars = $element.querySelectorAll("[data-stars]");

    addEventOnElements($stars, "click", function (e, $elem) {
        let reachedCurrent = false;

        $stars.forEach(($star) => {
            if (!reachedCurrent)
                $star.classList.add("active");
            else
                $star.classList.remove("active");

            if ($star === $elem) reachedCurrent = true;
        });
    });

    addEventOnElements($stars, "mouseenter", function (e, $elem) {
        const index = [...$stars].indexOf($elem);

        $stars.forEach(($star, i) => {
            if (i <= index)
                $star.classList.add("text-warning");
            else
                $star.classList.remove("text-warning");
        });
    });

    $element.addEventListener("mouseleave", () => $stars.forEach(($star) => $star.classList.remove("text-warning")));
};