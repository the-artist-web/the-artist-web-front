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
 * Favorits
 */
const $iconBtnlikes = document.querySelectorAll("[data-icon-btn-likes]");
if ($iconBtnlikes.length) $iconBtnlikes.forEach($elem => IconBtnLike($elem));

/**
 * Swippers
 */
const $swippers = document.querySelectorAll("[data-swippers]");
if ($swippers.length) $swippers.forEach($elem => Swipper($elem));