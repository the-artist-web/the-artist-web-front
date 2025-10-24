"use strict";

export const Dismiss = ($body, $overlay) => {
    /**
     * Closes Menu
     */
    document.querySelectorAll(".menu-content.active").forEach($elem => {
        $elem.classList.remove("active");
        $body.classList.add("load");
    });
};