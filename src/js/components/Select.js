"use strict";

import { addEventOnElements } from "../utils.js";

export const Select = ($element) => {
    const $options = $element.querySelectorAll("[data-options]");

    addEventOnElements($options, "click", function (e, $elem) {
        $options.forEach($elem => $elem.classList.remove("active"));

        $elem.classList.add("active");
    });
};