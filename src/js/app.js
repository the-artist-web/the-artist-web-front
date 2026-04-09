"use strict";
/**
 * Import Modules
 */
import { Tooltip } from "./components/Tooltip.js";
import { StartLoading } from "./components/StartLoading.js";
import { Password } from "./components/Password.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Swipper } from "./components/Swipper.js";
import { Search } from "./components/Search.js";
import { SharedBottomSheet } from "./components/SharedBottomSheet.js";
import { DragDropSheet } from "./components/DragDropSheet.js";
import { Popover } from "./components/Popover.js";
import { IconBtnCopy } from "./components/IconBtnCopy.js";
import { AddComment } from "./components/AddComment.js";

/**
 * Get Body & Badge Shopping Cart
 */
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
if ($fixedScrolling.length) FixedScrolling($fixedScrolling);

/**
 * Tooltip
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));

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
 * Swippers
 */
const $swippers = document.querySelectorAll("[data-swippers]");
if ($swippers.length) $swippers.forEach($elem => Swipper($elem));

/**
 * Shared Bottom Sheet
 */
const $dropdownsToggle = document.querySelectorAll("[data-bs-toggle='dropdown']");
if ($dropdownsToggle.length) $dropdownsToggle.forEach($elem => SharedBottomSheet($elem));

/**
 * Popover
 */
const $popovers = document.querySelectorAll("[data-bs-toggle='popover']");
if ($popovers.length) $popovers.forEach($elem => Popover($elem));

/**
 * Drag Drop Sheets
 */
DragDropSheet();

/**
 * Copy
 */
const $iconBtnsCopy = document.querySelectorAll("[data-icon-btns-copy]");
if ($iconBtnsCopy.length) $iconBtnsCopy.forEach($elem => IconBtnCopy($elem));

/**
 * Add Comments
 */
const $addComments = document.querySelectorAll("[data-add-comments]");
if ($addComments.length) $addComments.forEach($elem => AddComment($elem));