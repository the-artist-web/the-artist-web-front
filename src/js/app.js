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
    validatationCreateNewAccount,
    validationLogin,
    submitLogin,
    validationForgotPassword,
    submitForgotPassword,
    validationResetPassword,
    submitResetPassword,
    validationOTP,
    submitOTP,
    clickToResend
} from "./user.js";

/**
 * Start load
 */
const $startLoad = document.querySelector("[data-start-load]");
const $imgLoad = $startLoad.querySelector(".img-load");
if ($startLoad && $imgLoad) window.addEventListener("load", StartLoad($startLoad, $imgLoad));

/**
 * Toggle direction web
 */
const $languages = document.querySelectorAll("[data-languages]");
if ($languages) Languages($languages);

/**
 * Toggle password
 */
const $passwords = document.querySelectorAll("[data-passwords]");
if ($passwords) Password($passwords);

/**
 * Run tooltip
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips) Tooltip($tooltips);

/**
 * Run Copyright
 */
const $copyrightAll = document.querySelectorAll("[data-copyright]");
Copyright($copyrightAll);

/**
 * Create new account
 */
const $createNewAccountForm = document.querySelector("[data-create-new-account]");
if ($createNewAccountForm) {
    validatationCreateNewAccount($createNewAccountForm)
    $createNewAccountForm.addEventListener("submit", (e) => submitCreateNewAccount(e, $createNewAccountForm));
}

/**
 * Login
 */
const $loginForm = document.querySelector("[data-login]");
if ($loginForm) {
    validationLogin($loginForm);
    $loginForm.addEventListener("submit", (e) => submitLogin(e, $loginForm));
}

/**
 * Forgot password
 */
const $forgotPasswordForm = document.querySelector("[data-forgot-password]");
if ($forgotPasswordForm) {
    validationForgotPassword($forgotPasswordForm);
    $forgotPasswordForm.addEventListener("submit", (e) => submitForgotPassword(e, $forgotPasswordForm));
}

/**
 * Reset password
 */
const $resetPassword = document.querySelector("[data-reset-password]");
if ($resetPassword) {
    validationResetPassword($resetPassword);
    $resetPassword.addEventListener("submit", (e) => submitResetPassword(e, $resetPassword));
}

/**
 * Otp
 */
const $otp = document.querySelector("[data-otp]");
const $clickToResend = document.querySelector("[data-click-to-resend]");
if ($otp) {
    validationOTP($otp);
    $otp.addEventListener("submit", (e) => submitOTP(e, $otp));
}

if ($clickToResend) $clickToResend.addEventListener("click", (e) => clickToResend(e));