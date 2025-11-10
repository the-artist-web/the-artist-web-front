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
    });
};