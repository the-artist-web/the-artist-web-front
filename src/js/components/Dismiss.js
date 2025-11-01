"use strict";

export const Dismiss = ($body, $overlay) => {
    $body.classList.add("load");
    $overlay.classList.remove("active");

    document.querySelectorAll(".menu-content.active").forEach($elem => $elem.classList.remove("active"));
};