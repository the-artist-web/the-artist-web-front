"use strict";

export const AppearanceOnce = ($element, $overlay, $body) => {
    const delay = parseInt($element.dataset.appearanceOnce) || 1000;

    if (sessionStorage.appearanceOnce === "active") {
        $element.classList.remove("active");
        $overlay.classList.remove("active");
        $body.classList.add("load");

        return;
    }

    window.addEventListener("load", () => {
        setTimeout(() => {
            $element.classList.add("active");
            $overlay.classList.add("active");
            $body.classList.remove("load");

            sessionStorage.setItem("appearanceOnce", "active");
        }, delay);

        setTimeout(() => {
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
            document.querySelectorAll(".sidebar-docs.active").forEach($elem => $elem.classList.remove("active"));

            /**
             * Menu Content
             */
            document.querySelectorAll(".menu-content.active").forEach($elem => $elem.classList.remove("active"));
        }, delay - 10);
    });
};