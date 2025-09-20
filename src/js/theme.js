'use strict';

/**
 * Import
 */
import { addEventOnElements } from "./utils.js";

/* Elements */
const $htmlTheme = document.documentElement;

const toggleTheme = () => {
    const currentTheme = $htmlTheme.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    $htmlTheme.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
};

/**
 * Initialize the theme
 */
const storedTheme = localStorage.getItem("theme");
const systemThemeIsDark = window.matchMedia("prefers-color-theme: dark").matches;
const initializeTheme = storedTheme ?? (systemThemeIsDark ? "dark" : "light");

$htmlTheme.setAttribute("data-theme", initializeTheme);

window.addEventListener("DOMContentLoaded", () => {
    const $toggleThemes = document.querySelectorAll("[data-toggle-theme]");

    addEventOnElements($toggleThemes, "click", toggleTheme);
});