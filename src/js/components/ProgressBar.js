"use strict";

/**
 * Import Modules
 */
import { addEventOnElements } from "../utils.js";

export const ProgressBar = ($progressBar, $elements) => addEventOnElements($elements, "click", function (e, $elem) {
        if ($elem.target === "_blank") return;

        $progressBar.classList.add("active");

        setTimeout(() => $progressBar.classList.add("hide"), 1000);
    });