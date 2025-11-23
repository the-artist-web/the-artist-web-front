"use strict";

/**
 * Import Modules
 */
import { Snackbar } from "./Snackbar.js";

export const Copied = ($element) => {
    $element.addEventListener("click", () => {
        Snackbar(document.documentElement.dir === "ltr" ? "Copied!" : "تم نسخها!");

        navigator.clipboard.writeText($element.dataset.copied);
    });
};