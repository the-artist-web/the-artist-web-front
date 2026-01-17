"use strict";

/**
 * Import Modules
 */
import { FixedScrolling } from "./components/FixedScrolling.js";
import { OneTimeAppearance } from "./components/OneTimeAppearance.js";
import { Overlay } from "./components/Overlay.js";
import { Password } from "./components/Password.js";
import { Rating } from "./components/Rating.js";
import { StartLoading } from "./components/StartLoading.js";
import { Tooltip } from "./components/Tooltip.js";

/**
 * Get Body
 */
const $body = document.body;

/**
 * Overlay
 */
const $overlay = document.querySelector("[data-overlay]");
if ($overlay) $overlay.addEventListener("click", () => Overlay($overlay, $body));

/**
 * Fixed Scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
if ($fixedScrolling.length) $fixedScrolling.forEach($elem => FixedScrolling($elem));

/**
 * Start Loading
 */
const $startLoading = document.querySelector("[data-start-loading]");
if ($startLoading) window.addEventListener("load", () => StartLoading($startLoading, $body));

/**
 * Tooltips
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Password
 */
const $passwords = document.querySelectorAll("[data-passwords]");
if ($passwords.length) $passwords.forEach($elem => Password($elem));

/**
 * One Time Appearance
 */
const $oneTimeAppearances = document.querySelectorAll("[data-one-time-appearances]");
if ($oneTimeAppearances.length) $oneTimeAppearances.forEach($elem => OneTimeAppearance($elem));

/**
 * Rating
 */
const $ratings = document.querySelectorAll("[data-ratings]");
if ($ratings.length) $ratings.forEach($elem => Rating($elem));