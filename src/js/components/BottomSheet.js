"use strict";

export const BottomSheet = ($element, $overlay, $body) => {
    const $bottomSheet = document.querySelector(`${$element.dataset.bottomSheets}`);

    document.querySelectorAll(".dialog.active").forEach($elem => $elem.classList.remove("active"));

    document.querySelectorAll(".bottom-sheet.active").forEach($elem => $elem !== $bottomSheet ? $elem.classList.remove("active") : "");

    $overlay.classList.add("active");
    $bottomSheet.classList.add("active");
    $body.classList.remove("load");
};