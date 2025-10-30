"use strict";

/**
 * Import modules
 */
import { StartLoading } from "./components/StartLoading.js";

/**
 * Get overlay & body
 */
const $overlay = document.querySelector("[data-overlay]");
const $body = document.body;

/**
 * Start Loading
 */
const $startLoading = document.querySelector("[data-start-loading]");
window.addEventListener("load", () => StartLoading($startLoading, $body));