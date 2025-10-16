"use strict";

/**
 * Import module
 */
import { StartLoading } from "./components/StartLoading.js";
import { Copyright } from "./components/Copyright.js";

/**
 * Get overlay & Body
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