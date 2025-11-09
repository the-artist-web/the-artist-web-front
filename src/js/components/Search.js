"use strict";

import { addEventOnElements } from "../utils.js";

export const Search = ($element) => {
    const $searchHidden = $element.querySelectorAll("[data-search-hidden]");
    const $searchShow = $element.querySelector("[data-search-show]");
    const $opens = $element.querySelectorAll("[data-opens]");
    const $searchbar = $element.querySelector("[data-searchbar]");
    const $field = $element.querySelector("[data-field]");
    const $close = $element.querySelector("[data-close]");

    $searchShow.style.display = "none";

    addEventOnElements($opens, "click", function (e, $elem) {
        e.stopPropagation();

        document.querySelectorAll(".menu-content.active").forEach($elem => $elem.classList.remove("active"));

        $searchbar.classList.add("active");

        setTimeout(() => $field.focus(), 50);
    });

    $field.addEventListener("input", (e) => $searchHidden.forEach($elem => {
        if (e.target.value.length >= 1) {
            $elem.style.display = "none";
            $searchShow.style.display = "flex";
        } else {
            $elem.style.display = "flex";
            $searchShow.style.display = "none";
        }
    }));

    $close.addEventListener("click", (e) => {
        e.stopPropagation();

        $searchbar.classList.remove("active");

        $field.blur();
    });
};