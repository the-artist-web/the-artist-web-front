"use strict";

/**
 * Import modules
 */
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Tooltip } from "./components/Tooltip.js";
import { addEventOnElements } from "./utils.js";

/**
 * Start loading
 */
const $startLoading = document.querySelector("[data-start-loading]");
if ($startLoading) window.addEventListener("load", () => setTimeout(() => $startLoading.classList.add("active"), 800));

/**
 * Fixed scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
if ($fixedScrolling) window.addEventListener("scroll", () => $fixedScrolling.forEach($elem => FixedScrolling($elem)));

/**
 * Menus
 */
const $menusToggler = document.querySelectorAll("[data-menus-toggler]");
if ($menusToggler) addEventOnElements($menusToggler, "click", function (e, $elem) {
    e.stopPropagation();

    const $menu = $elem.closest(".menu");
    const $menuContent = $menu.querySelector(".menu-content");

    document.querySelectorAll(".menu-content.active").forEach($elemContent => {
        if ($elemContent !== $menuContent)
            $elemContent.classList.remove("active");
    });

    $menuContent.classList.toggle("active");
});

document.addEventListener("click", () => document.querySelectorAll(".menu-content.active").forEach($elem => $elem.classList.remove("active", "show")));

/**
 * Tooltip
 */
const $tooltips = document.querySelectorAll("[data-tooltips]");
if ($tooltips) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Toggle password
 */
const $togglePasswords = document.querySelectorAll("[data-toggle-passwords]");
if ($togglePasswords) addEventOnElements($togglePasswords, "click", function (e, $elem) {
    const $formBox = $elem.closest(".form-box");
    const $input = $formBox.querySelector("input[type='password'], input[type='text']");

    $input.type = $input.type === "password" ? "text" : "password";

    $elem.innerHTML = ``;

    if ($input.type === "password") {
        $elem.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>`;

        $elem.setAttribute("data-tooltips", document.documentElement.dir === "ltr" ? "Show Password" : "اظهار كلمة المرور");
    } else {
        $elem.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>`;

        $elem.setAttribute("data-tooltips", document.documentElement.dir === "ltr" ? "Hidden Password" : "اخفاء كلمة المرور");
    }
});