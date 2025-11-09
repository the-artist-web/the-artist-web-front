"use strict";

export const Menu = ($element) => {
    $element.addEventListener("click", (e) => {
        e.stopPropagation();

        const $menu = $element.closest(".menu");
        const $menuContent = $menu.querySelector(".menu-content");
        const $searchbars = document.querySelector(".searchbar.active");

        if ($searchbars) $searchbars.classList.remove("active");

        document.querySelectorAll(".menu-content.active").forEach($elem => $elem !== $menuContent ? $elem.classList.remove("active") : "");

        $menuContent.classList.toggle("active");
    });
};