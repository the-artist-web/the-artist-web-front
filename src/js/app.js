'use strict';

/**
 * Import module
 */
import { Tooltip } from "./components/Tooltip.js";
import { Languages } from "./components/Languages.js";
import { Password } from "./components/Password.js";
import { Copyright } from "./components/Copyright.js";
import { StartLoad } from "./components/StartLoad.js";
import {
    submitCreateNewAccount,
    validatationCreateNewAccount
} from "./user.js";

/**
 * Start load
 */
const $startLoad = document.querySelector("[data-start-load]");
const $imgLoad = $startLoad.querySelector(".img-load");
window.addEventListener("load", StartLoad($startLoad, $imgLoad));

/**
 * Toggle direction web
 */
const $languages = document.querySelectorAll("[data-languages]");
Languages($languages);

/**
 * Toggle password
 */
const $passwords = document.querySelectorAll("[data-passwords]");
Password($passwords);

/**
 * Run tooltip
 */
const $tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
Tooltip($tooltipTriggerList);

/**
 * Run Copyright
 */
const $copyrightAll = document.querySelectorAll("[data-copyright]");
Copyright($copyrightAll);

/**
 * Create new account
 */
const $createNewAccountForm = document.querySelector("[data-create-new-account]");
validatationCreateNewAccount($createNewAccountForm)
$createNewAccountForm.addEventListener("submit", (e) => submitCreateNewAccount(e, $createNewAccountForm));