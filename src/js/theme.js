'use strict';

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
};

/**
 * Initialize the theme
 */
const storedTheme = localStorage.getItem("theme");
const systemThemeIsDark = window.matchMedia("prefers-color-scheme: dark").matches;
const initializeTheme = storedTheme ?? (systemThemeIsDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", initializeTheme);

/**
 * Attach toggleTheme to theme button click event
 */
window.addEventListener("DOMContentLoaded", () => {
    const $togglerThemes = document.querySelectorAll("[data-toggler-themes]");

    if ($togglerThemes) $togglerThemes.forEach($elem => $elem.addEventListener("click", toggleTheme));
});