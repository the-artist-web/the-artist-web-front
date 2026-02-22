"use strict";

/**
 * Import Modules
 */
import { ProgressBar } from "./components/ProgressBar.js";
import { StartLoading } from "./components/StartLoading.js";

/**
 * Overlay & Body
 */
const $overlay = document.querySelector("[data-overlay]");
const $body = document.body;

/**
 * Start Loading
 */
const $startLoading = document.querySelector("[data-start-loading]");
console.log($startLoading)
if ($startLoading) window.addEventListener("load", () => StartLoading($startLoading, $body));

/**
 * Progress Bar
 */
const $progressBar = document.querySelector("[data-progress-bar]");
const $action = document.querySelectorAll("a, button[type='submit']");
if ($action.length) $action.forEach($elem => $elem.addEventListener("click", () => {
        if ($elem.target === "_blank") return;
        ProgressBar($progressBar);
    }));