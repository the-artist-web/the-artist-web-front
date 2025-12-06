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
import { Dialog } from "./components/Dialog.js";
import { Dismiss } from "./components/Dismiss.js";
import { Tab } from "./components/Tab.js";
import { Search } from "./components/Search.js";
import { BottomSheet } from "./components/BottomSheet.js";
import { AppearanceOnce } from "./components/AppearanceOnce.js";
import { StarRating } from "./components/StarRating.js";
import { Copied } from "./components/Copied.js";
import { Swipper } from "./components/Swipper.js";
import { VideoControl } from "./components/Video.js";
import { AutoPlayVideo } from "./components/AutoPlayVideo.js";
import { SideSheet } from "./components/SideSheet.js";

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
if ($fixedScrolling.length) $fixedScrolling.forEach($elem => FixedScrolling($elem));

/**
 * Tooltip
 */
const $tooltips = document.querySelectorAll("[data-tooltips]");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Menus
 */
const $togglerMenus = document.querySelectorAll("[data-toggler-menus]");
if ($togglerMenus.length) $togglerMenus.forEach($elem => Menu($elem));

/**
 * Select
 */
const $selects = document.querySelectorAll("[data-selects]");
if ($selects.length) $selects.forEach($elem => Select($elem));

/**
 * Password
 */
const $passwords = document.querySelectorAll("[data-passwords]");
if ($passwords.length) $passwords.forEach($elem => Password($elem));

/**
 * Minus Time
 */
const $minusTimes = document.querySelectorAll("[data-minus-times]");
if ($minusTimes.length) $minusTimes.forEach($elem => MinusTime($elem));

/**
 * OTP
 */
const $otps = document.querySelectorAll("[data-otps]");
if ($otps.length) $otps.forEach($elem => OTP($elem));

/**
 * Collapses
 */
const $togglerCollapses = document.querySelectorAll("[data-toggler-collapses]");
if ($togglerCollapses.length) $togglerCollapses.forEach($elem => Collapse($elem));

/**
 * Fab Menus
 */
const $togglerFabsMenu = document.querySelectorAll("[data-toggler-fabs-menu]");
if ($togglerFabsMenu.length) $togglerFabsMenu.forEach($elem => FabMenu($elem));

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
if ($alertsDialog.length) $alertsDialog.forEach($elem => $elem.addEventListener("click", () => AlertDialog($elem, $overlay, $body)));

/**
 * Dialogs
 */
const $dialogs = document.querySelectorAll("[data-dialogs]");
if ($dialogs.length) $dialogs.forEach($elem => $elem.addEventListener("click", () => Dialog($elem, $overlay, $body)));

/**
 * Tabs
 */
const $tabs = document.querySelectorAll("[data-tabs]");
if ($tabs.length) $tabs.forEach($elem => Tab($elem));

/**
 * Search
 */
const $search = document.querySelector("[data-search]");
if ($search) Search($search);

/**
 * Bottom Sheets
 */
const $bottomSheets = document.querySelectorAll("[data-bottom-sheets]");
if ($bottomSheets.length) $bottomSheets.forEach($elem => $elem.addEventListener("click", () => BottomSheet($elem, $overlay, $body)));

/**
 * Appearance Once 
 */
const $appearanceOnce = document.querySelectorAll("[data-appearance-once]");
if ($appearanceOnce.length) $appearanceOnce.forEach($elem => AppearanceOnce($elem, $overlay, $body));

/**
 * Star Rating
 */
const $starRatings = document.querySelectorAll("[data-star-ratings]");
if ($starRatings.length) $starRatings.forEach($elem => StarRating($elem));

/**
 * COPIED
 */
const $copied = document.querySelectorAll("[data-copied]");
if ($copied.length) $copied.forEach($elem => Copied($elem));

/**
 * SWIPPER
 */
const $swippers = document.querySelectorAll("[data-swippers]");
if ($swippers.length) $swippers.forEach($elem => Swipper($elem));

/**
 * Vidoe Control
 */
const $videosControl = document.querySelectorAll("[data-videos-control]");
if ($videosControl.length) $videosControl.forEach($elem => VideoControl($elem));

/**
 * Auto Play Videos
 */
const $videos = document.querySelectorAll("[data-video]");
if ($videos.length) $videos.forEach($elem => AutoPlayVideo($elem));

/**
 * Side Sheets
 */
const $sideSheets = document.querySelectorAll("[data-side-sheets]");
if ($sideSheets.length) $sideSheets.forEach($elem => $elem.addEventListener("click", () => SideSheet($elem, $overlay, $body)));

/**
 * Toggler Dismiss
 */
const $dismiss = document.querySelectorAll("[data-dismiss]");
if ($dismiss.length) $dismiss.forEach($elem => $elem.addEventListener("click", () => Dismiss($overlay, $body)));

/**
 * Document Dismiss
 */
document.addEventListener("click", () => DocumentDismiss());