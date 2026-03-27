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

/**
 * Body
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
if ($search) Search($search)

/**
 * Quantites
 */
const $quantites = document.querySelectorAll("[data-quantitys]");
if ($quantites.length) $quantites.forEach($elem => Quantite($elem));

/**
 * Followers
 */
const $followers = document.querySelectorAll("[data-btn-followers]");
if ($followers.length) $followers.forEach($elem => BtnFollow($elem));

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
 * Icon Btns Add To Cart
 */
const $iconBtnsaddToCart = document.querySelectorAll("[data-icon-btns-add-to-cart]");
const $badgeShoppingCart = document.querySelector("#badge-shopping-cart");
if ($iconBtnsaddToCart.length) $iconBtnsaddToCart.forEach($elem => IconBtnAddToCart($elem, $badgeShoppingCart));

/**
 * Drag Drop Sheets
 */
DragDropSheet();