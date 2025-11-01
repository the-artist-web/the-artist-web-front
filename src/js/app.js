"use strict";

/**
 * Import Modules
 */
import { StartLoading } from "./components/StartLoading.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Tooltip } from "./components/Tooltip.js";
import { Menu } from "./components/Menu.js";
import { Dismiss } from "./components/Dismiss.js";
import { Select } from "./components/Select.js";
import { Password } from "./components/Password.js";
import { MinusTime } from "./components/MinusTime.js";
import { OTP } from "./components/Otp.js";

/**
 * Get Overlay & Body
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
if ($fixedScrolling) window.addEventListener("scroll", () => $fixedScrolling.forEach($elem => FixedScrolling($elem)));

/**
 * Tooltip
 */
const $tooltips = document.querySelectorAll("[data-tooltips]");
if ($tooltips) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Menus
 */
const $togglerMenus = document.querySelectorAll("[data-toggler-menus]");
if ($togglerMenus) $togglerMenus.forEach($elem => Menu($elem, $body));

/**
 * Select
 */
const $selects = document.querySelectorAll("[data-selects]");
if ($selects) $selects.forEach($elem => Select($elem));

/**
 * Password
 */
const $passwords = document.querySelectorAll("[data-passwords]");
if ($passwords) $passwords.forEach($elem => Password($elem));

/**
 * Minus Time
 */
const $minusTimes = document.querySelectorAll("[data-minus-times]");
$minusTimes.forEach($elem => MinusTime($elem));

/**
 * OTP
 */
const $otps = document.querySelectorAll("[data-otps]");
$otps.forEach($elem => OTP($elem));

/**
 * Dismiss
 */
document.addEventListener("click", () => Dismiss($body, $overlay));