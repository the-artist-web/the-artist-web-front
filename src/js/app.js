"use strict";

/**
 * Import module
 */
import { StartLoading } from "./components/StartLoading.js";
import { Copyright } from "./components/Copyright.js";
import { Select } from "./components/Select.js";

/**
 * Get overlay & body
 */
const $body = document.body;
const $overlay = document.querySelector("[data-overlay]");

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