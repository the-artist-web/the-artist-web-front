"use strict";
/**
 * Import Modules
 */
import { Tooltip } from "./components/Tooltip.js";
import { StartLoading } from "./components/StartLoading.js";
import { Password } from "./components/Password.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Quantite } from "./components/Quantite.js";
import { BtnFollow } from "./components/BtnFollow.js";
import { IconBtnLike } from "./components/IconBtnLike.js";
import { Swipper } from "./components/Swipper.js";
import { Search } from "./components/Search.js";
import { SharedBottomSheet } from "./components/SharedBottomSheet.js";
import { DragDropSheet } from "./components/DragDropSheet.js";
import { IconBtnAddToCart } from "./components/IconBtnAddToCart.js";
import { Popover } from "./components/Popover.js";
import { BtnLike } from "./components/BtnLike.js";
import { BtnSave } from "./components/BtnSave.js";
import { BtnAddToCart } from "./components/BtnAddToCart.js";
import { IconBtnCopy } from "./components/IconBtnCopy.js";

/**
 * Get Body & Badge Shopping Cart
 */
const $body = document.body;
const $badgeShoppingCart = document.querySelector("#badge-shopping-cart");

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
if ($search) Search($search)

/**
 * Quantites
 */
const $quantites = document.querySelectorAll("[data-quantitys]");
if ($quantites.length) $quantites.forEach($elem => Quantite($elem));

/**
 * Followers
 */
const $btnsFollowe = document.querySelectorAll("[data-btns-follow]");
if ($btnsFollowe.length) $btnsFollowe.forEach($elem => BtnFollow($elem));

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
 * Icon Btns Like
 */
const $iconBtnslike = document.querySelectorAll("[data-icon-btns-like]");
if ($iconBtnslike.length) $iconBtnslike.forEach($elem => IconBtnLike($elem));

/**
 * Btns Like
 */
const $btnslike = document.querySelectorAll("[data-btns-like]");
if ($btnslike.length) $btnslike.forEach($elem => BtnLike($elem));

/**
 * Btns Save
 */
const $btnsSave = document.querySelectorAll("[data-btns-save]");
if ($btnsSave.length) $btnsSave.forEach($elem => BtnSave($elem));

/**
 * Icon Btns Add To Cart
 */
const $iconBtnsAddToCart = document.querySelectorAll("[data-icon-btns-add-to-cart]");
if ($iconBtnsAddToCart.length) $iconBtnsAddToCart.forEach($elem => IconBtnAddToCart($elem, $badgeShoppingCart));

/**
 * Btns Add To Cart
 */
const $btnsAddToCart = document.querySelectorAll("[data-btns-add-to-cart]");
if ($btnsAddToCart.length) $btnsAddToCart.forEach($elem => BtnAddToCart($elem, $badgeShoppingCart));

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