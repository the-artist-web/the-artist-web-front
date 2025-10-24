"use strict";

export const Menu = (e, $element, $body) => {
    e.stopPropagation();
    
    const $menu = $element.closest(".menu");
    const $menuContent = $menu.querySelector(".menu-content");

    document.querySelectorAll(".menu-content.active").forEach($elem => {
        if ($menuContent !== $elem) {
            $elem.classList.remove("active");
            $body.classList.add("load");
        }
    });

    $menuContent.classList.toggle("active");
    $body.classList.toggle("load");
};