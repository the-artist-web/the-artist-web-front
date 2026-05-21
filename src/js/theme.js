"use strict";

/**
 * Import Modules
 */
import { addEventOnElements } from "./utils.js";

/**
 * Get DOM
 */
const $html = document.documentElement;
const $btnsTheme = document.querySelectorAll("[data-btns-theme]");

const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme) => {
    let activeTheme = theme;

    if (theme === "system") activeTheme = getSystemTheme();

    $html.dataset.theme = activeTheme;

    $btnsTheme.forEach($btn => {
        if ($btn.dataset.btnsTheme === theme)
            $btn.classList.add("active");
        else
            $btn.classList.remove("active");
    });
};

addEventOnElements($btnsTheme, "click", function (e, $elem) {
    const selectedTheme = $elem.dataset.btnsTheme;

    localStorage.setItem("theme", selectedTheme);

    applyTheme(selectedTheme);
});

const savedTheme = localStorage.getItem("theme") || "system";
applyTheme(savedTheme);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => localStorage.getItem("theme") === "system" ? applyTheme("system") : "");