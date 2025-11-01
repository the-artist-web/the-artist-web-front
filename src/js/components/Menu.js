"use strict";

export const Menu = ($element, $body) => {
    $element.addEventListener("click", (e) => {
        e.stopPropagation();

        const $menu = $element.closest(".menu");
        const $menuContent = $menu.querySelector(".menu-content");

        document.querySelectorAll(".menu-content.active").forEach($elem => $elem !== $menuContent ? $elem.classList.remove("active") : "");

        $menuContent.classList.toggle("active");
        $body.classList.toggle("load");
    });
};