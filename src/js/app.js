"use strict";

/**
 * Import Modules
 */
import { StartLoading } from "./components/StartLoading.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Tooltip } from "./components/Tooltip.js";
import { Menu } from "./components/Menu.js";
import { DocumentDismiss } from "./components/DocumentDismiss.js";
import { Select } from "./components/Select.js";
import { Password } from "./components/Password.js";
import { MinusTime } from "./components/MinusTime.js";
import { OTP } from "./components/Otp.js";
import { Collapse } from "./components/Collapse.js";
import { FabMenu } from "./components/FabMenu.js";
import { NavigationRail } from "./components/NavigationRail.js";
import { Overlay } from "./components/Overlay.js";
import { AlertDialog } from "./components/AlertDialog.js";
import { Dismiss } from "./components/Dismiss.js";
import { Tab } from "./components/Tab.js";
import { Search } from "./components/Search.js";

/**
 * Get Overlay & Body & Main
 */
const $overlay = document.querySelector("[data-overlay]");
const $main = document.querySelector("[data-main]");
const $body = document.body;

/**
 * Toggler Overlay
 */
$overlay.addEventListener("click", () => Overlay($overlay, $body));

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
if ($togglerMenus) $togglerMenus.forEach($elem => Menu($elem));

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
 * Collapses
 */
const $togglerCollapses = document.querySelectorAll("[data-toggler-collapses]");
if ($togglerCollapses) $togglerCollapses.forEach($elem => Collapse($elem));

/**
 * Fab Menus
 */
const $togglerFabsMenu = document.querySelectorAll("[data-toggler-fabs-menu]");
if ($togglerFabsMenu) $togglerFabsMenu.forEach($elem => FabMenu($elem));

/**
 * Toggler Navigation Rail
 */
const $togglerNavigationRail = document.querySelector("[data-toggler-navigation-rail]");
const $navigationRail = document.querySelector("[data-navigation-rail]");

if ($togglerNavigationRail, $navigationRail) NavigationRail($togglerNavigationRail, $navigationRail, $main);

/**
 * Alerts Dialog
 */
const $alertsDialog = document.querySelectorAll("[data-alerts-dialog]");
if ($alertsDialog) $alertsDialog.forEach($elem => $elem.addEventListener("click", () => AlertDialog($elem, $overlay, $body)));

/**
 * Tabs
 */
const $tabs = document.querySelectorAll("[data-tabs]");
if ($tabs) $tabs.forEach($elem => Tab($elem));

/**
 * Search
 */
const $search = document.querySelector("[data-search]");
if ($search) Search($search);

/**
 * Toggler Dismiss
 */
const $dismiss = document.querySelectorAll("[data-dismiss]");
if ($dismiss) $dismiss.forEach($elem => $elem.addEventListener("click", () => Dismiss($overlay, $body)));

/**
 * Document Dismiss
 */
document.addEventListener("click", () => DocumentDismiss());