"use strict";

/**
 * Import module
 */
import { StartLoading } from "./components/StartLoading.js";
import { Copyright } from "./components/Copyright.js";
import { Select } from "./components/Select.js";
import { addEventOnElements } from "./utils.js";
import { Menu } from "./components/Menu.js";
import { Dismiss } from "./components/Dismiss.js";
import { Tooltip } from "./components/Tooltip.js";
import { FixedScrolling } from "./components/FixedScrolling.js";

/**
 * Get overlay & body
 */
const $body = document.body;
const $overlay = document.querySelector("[data-overlay]");

/**
 * Fixed Scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
$fixedScrolling.forEach($elem => FixedScrolling($elem));

/**
 * Start Loading
 */
const $startLoading = document.querySelector("[data-start-loading]");
if ($startLoading) window.addEventListener("load", () => StartLoading($startLoading, $body));

/**
 * Copyright
 */
const $copyrights = document.querySelectorAll("[data-copyrights]");
$copyrights.forEach($elem => Copyright($elem));

/**
 * Selects
 */
const $selects = document.querySelectorAll("[data-selects]");
if ($selects) $selects.forEach($elem => Select($elem));

/**
 * Menus
 */
const $togglerMenus = document.querySelectorAll("[data-toggler-menus]");
addEventOnElements($togglerMenus, "click", function (e, $elem) { Menu(e, $elem, $body) });

/**
 * Tooltips
 */
const $tooltips = document.querySelectorAll("[data-tooltips]");
$tooltips.forEach($elem => Tooltip($elem));

/**
 * Dismiss
 */
document.addEventListener("click", () => Dismiss($body, $overlay));