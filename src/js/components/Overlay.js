"use strict";

export const Overlay = ($overlay, $body) => {
    $overlay.classList.remove("active");
    $body.classList.add("load");

    /**
     * Alerts Dialog
     */
    document.querySelectorAll(".alerts-dialog.active").forEach($elem => $elem.classList.remove("active"));

    /**
     * Dialogs
     */
    document.querySelectorAll(".dialog.active").forEach($elem => $elem.classList.remove("active"));

    /**
     * Bottom Sheet
     */
    document.querySelectorAll(".bottom-sheet.active").forEach($elem => $elem.classList.remove("active"));

    /**
     * Side Sheet
     */
    document.querySelectorAll(".side-sheet.active").forEach($elem => $elem.classList.remove("active"));
};