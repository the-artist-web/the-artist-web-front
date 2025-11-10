"use strict";

export const AlertDialog = ($element, $overlay, $body) => {
    const $dialog = document.querySelector(`${$element.dataset.alertsDialog}`);

    document.querySelectorAll(".alerts-dialog.active").forEach($elem => $elem !== $dialog ? $elem.classList.remove("active") : "");
    
    document.querySelectorAll(".dialog.active").forEach($elem => $elem.classList.remove("active"));

    $overlay.classList.add("active");
    $dialog.classList.add("active");
    $body.classList.remove("load");
};