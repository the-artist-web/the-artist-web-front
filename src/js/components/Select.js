"use strict";

/**
 * Import modules
 */
import { addEventOnElements } from "../utils.js";

export const Select = ($element) => {
    const $options = $element.querySelectorAll("[data-options]");

    addEventOnElements($options, "click", function (e, $elem) {
        $options.forEach($elemOption => $elemOption.classList.remove("active"));

        $elem.classList.toggle("active");
    });
}