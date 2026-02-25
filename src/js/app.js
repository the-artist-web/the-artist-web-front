"use strict";
/**
 * Import Modules
 */
import { Tooltip } from "./components/Tooltip.js";
import { StartLoading } from "./components/StartLoading.js";
import { ProgressBar } from "./components/ProgressBar.js";
import { Password } from "./components/Password.js";

/**
 * Overlay & Body
 */
const $overlay = document.querySelector("[data-overlay]");
const $body = document.body;

/**
 * Start Loading
 */
const $startLoading = document.querySelector("[data-start-loading]");
if ($startLoading) window.addEventListener("load", () => StartLoading($startLoading, $body));

/**
 * Tooltip
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Progress Bar
 */
const $progressBar = document.querySelector("[data-progress-bar]");
const $action = document.querySelectorAll("a, button[type='submit']");
if ($action.length) $action.forEach($elem => $elem.addEventListener("click", () => {
        if ($elem.target === "_blank") return;
        ProgressBar($progressBar);
    }));

/**
 * Password
 */
const $passwords = document.querySelectorAll("[data-passwords]");
if ($passwords.length) $passwords.forEach($elem => Password($elem));