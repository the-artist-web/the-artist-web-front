"use strict";

export const Overlay = ($overlay, $body) => {
    $overlay.classList.remove("active");
    $body.classList.add("load");

    /**
     * Alerts Dialog
     */
    document.querySelectorAll(".alerts-dialog.active").forEach($elem => $elem.classList.remove("active"));

    /**
     * Bottom Sheet
     */
    document.querySelectorAll(".bottom-sheet.active").forEach($elem => $elem.classList.remove("active"));
};