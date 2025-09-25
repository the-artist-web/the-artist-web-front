'use strict';

/**
 * Imports modules
 */
import { 
    inputUsername,
    inputEmailAddress
} from "./utils.js";

const validatationCreateNewAccount = ($form) => {
    const $inputUsername = $form.querySelector("[data-field='username']");
    const $inputEmail = $form.querySelector("[data-field='email']");
    const $inputPassword = $form.querySelector("[data-field='password']");
    const $inputConfirmPassword = $form.querySelector("[data-field='confirmPassword']");
    const $checkTermsOfUse = $form.querySelector("[data-field='checkTermsOfUse']");

    $inputUsername.addEventListener("input", () => inputUsername($inputUsername));
    $inputEmail.addEventListener("input", () => inputEmailAddress($inputEmail));
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

    // functions
    if (!inputUsername($inputUsername)) 
        allValid = false;

    if (!inputEmailAddress($inputEmail))
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

export {
    submitCreateNewAccount,
    validatationCreateNewAccount
}