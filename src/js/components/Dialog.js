"use strict";

export const Dialog = ($element, $overlay, $body) => {
    const $dialog = document.querySelector(`${$element.dataset.dialogs}`);

    document.querySelectorAll(".dialog.active").forEach($elem => $elem !== $dialog ? $elem.classList.remove("active") : "");

    document.querySelectorAll(".bottom-sheet.active").forEach($elem => $elem.classList.remove("active"));
    
    document.querySelectorAll(".alerts-dialog.active").forEach($elem => $elem.classList.remove("active"));

    $overlay.classList.add("active");
    $dialog.classList.add("active");
    $body.classList.remove("load");
};