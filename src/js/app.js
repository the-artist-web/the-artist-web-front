"use strict";
/**
 * Import Modules
 */
import { Tooltip } from "./components/Tooltip.js";
import { StartLoading } from "./components/StartLoading.js";
import { ProgressBar } from "./components/ProgressBar.js";
import { Password } from "./components/Password.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Search } from "./components/Search.js";
import { Quantite } from "./components/Quantite.js";

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
 * Fixed Scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
if ($fixedScrolling.length) window.addEventListener("scroll", () => $fixedScrolling.forEach($elem => FixedScrolling($elem)));

/**
 * Tooltip
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Progress Bar
 */
const $progressBar = document.querySelector("[data-progress-bar]");
const $actions = document.querySelectorAll("a, button[type='submit']");
if ($progressBar) ProgressBar($progressBar, $actions);

/**
 * Password
 */
const $passwords = document.querySelectorAll("[data-passwords]");
if ($passwords.length) $passwords.forEach($elem => Password($elem));

/**
 * Search
 */
const $search = document.querySelector("[data-search]");
if ($search) Search($search);

/**
 *  Quantites
 */
const $quantites = document.querySelectorAll("[data-quantitys]");
if ($quantites.length) $quantites.forEach($elem => Quantite($elem));