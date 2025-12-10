"use strict";

export const SideSheet = ($element, $overlay, $body) => {
    const $sideSheet = document.querySelector(`${$element.dataset.sideSheets}`);

    document.querySelectorAll(".dialog.active").forEach($elem => $elem.classList.remove("active"));
    document.querySelectorAll(".bottom-sheet.active").forEach($elem => $elem.classList.remove("active"));

    document.querySelectorAll(".side-sheet.active").forEach($elem => $elem !== $sideSheet ? $elem.classList.remove("active") : "");

    $overlay.classList.add("active");
    $sideSheet.classList.add("active");
    $body.classList.remove("load");
};