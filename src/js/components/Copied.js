"use strict";

/**
 * Import Modules
 */
import { Snackbar } from "./Snackbar.js";

export const Copied = ($element) => {
    $element.addEventListener("click", () => {
        Snackbar("Copied!");

        navigator.clipboard.writeText($element.dataset.copied);
    });
};