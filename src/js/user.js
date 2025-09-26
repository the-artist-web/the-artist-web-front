'use strict';

/**
 * Imports modules
 */
import { 
    inputUsername,
    inputEmailAddress,
    inputPassword,
    inputConfirmPassword,
    inputCheckTermsOfUse
} from "./utils.js";

/**
 * Create new account
 */
const validatationCreateNewAccount = ($form) => {
    const $inputUsername = $form.querySelector("[data-field='username']");
    const $inputEmail = $form.querySelector("[data-field='email']");
    const $inputPassword = $form.querySelector("[data-field='password']");
    const $inputConfirmPassword = $form.querySelector("[data-field='confirmPassword']");
    const $checkTermsOfUse = $form.querySelector("[data-field='checkTermsOfUse']");
    const $btnSubmit = $form.querySelector("button[type='submit']");
    let getPasswordValue;

    $btnSubmit.disabled = true;

    $inputUsername.addEventListener("input", () => inputUsername($inputUsername));
    $inputEmail.addEventListener("input", () => inputEmailAddress($inputEmail));
    $inputPassword.addEventListener("input", (e) => {
        getPasswordValue = e.target.value.trim();

        inputPassword($inputPassword);
    });
    $inputConfirmPassword.addEventListener("input", () => inputConfirmPassword($inputConfirmPassword,  getPasswordValue));
    $checkTermsOfUse.addEventListener("change", () => inputCheckTermsOfUse($checkTermsOfUse, $btnSubmit));
};

const submitCreateNewAccount = (e, $form) => {
    e.preventDefault();

    let allValid = true;

    // Inputs in form
    const $inputUsername = $form.querySelector("[data-field='username']");
    const $inputEmail = $form.querySelector("[data-field='email']");
    const $inputPassword = $form.querySelector("[data-field='password']");
    const $inputConfirmPassword = $form.querySelector("[data-field='confirmPassword']");
    const $checkTermsOfUse = $form.querySelector("[data-field='checkTermsOfUse']");
    const $btnSubmit = $form.querySelector("button[type='submit']");

    // functions
    if (!inputUsername($inputUsername)) 
        allValid = false;

    if (!inputEmailAddress($inputEmail))
        allValid = false;

    if (!inputPassword($inputPassword))
            allValid = false;

    if (!inputConfirmPassword($inputConfirmPassword, $inputPassword.value.trim()))
            allValid = false;

    if (!inputCheckTermsOfUse($checkTermsOfUse, $btnSubmit))
            allValid = false;

    // reset input & validation
    if (allValid) {
        $form.querySelectorAll("input").forEach(elem => {
            elem.value = "";
            elem.classList.remove("success", "warning", "error");
        });
    
        $form.querySelectorAll(".validation").forEach(elem => elem.classList.remove("show"));
    }
};

/**
 * Login
 */


export {
    submitCreateNewAccount,
    validatationCreateNewAccount
}