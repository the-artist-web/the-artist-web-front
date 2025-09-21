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
    $inputUsername.addEventListener("input", () => inputEmailAddress($inputEmail));
};

const createNewAccount = (e, $form) => {
    e.preventDefault();

    // Inputs in form
    const $inputUsername = $form.querySelector("[data-field='username']");
    const $inputEmail = $form.querySelector("[data-field='email']");
    const $inputPassword = $form.querySelector("[data-field='password']");
    const $inputConfirmPassword = $form.querySelector("[data-field='confirmPassword']");
    const $checkTermsOfUse = $form.querySelector("[data-field='checkTermsOfUse']");

    inputUsername($inputUsername);
    inputEmailAddress($inputEmail);
};

export {
    createNewAccount,
    validatationCreateNewAccount
}