'use strict';

/**
 * Imports modules
 */
import { 
    inputUsername,
    inputEmailAddress,
    inputPassword,
    inputConfirmPassword,
    inputCheckTermsOfUse,
    inputsOTP
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
            elem.checked = false;
            elem.classList.remove("success", "warning", "error");
        });
    
        $form.querySelectorAll(".validation").forEach(elem => elem.classList.remove("show"));
    }
};

/**
 * Login
 */
const validationLogin = ($form) => {
    const $email = $form.querySelector("[data-field='email']");
    const $password = $form.querySelector("[data-field='password']");

    $email.addEventListener("input", () => inputEmailAddress($email));
    $password.addEventListener("input", () => inputPassword($password));
};

const submitLogin = (e, $form) => {
    e.preventDefault();

    const $email = $form.querySelector("[data-field='email']");
    const $password = $form.querySelector("[data-field='password']");

    let allValid = true;

    if (!inputEmailAddress($email))
        allValid = false;

    if (!inputPassword($password))
        allValid = false;

    if (allValid) {
        $form.querySelectorAll("input").forEach(elem => {
            elem.value = "";
            elem.classList.remove("success", "warning", "error");
        });
    
        $form.querySelectorAll(".validation").forEach(elem => elem.classList.remove("show"));
    }
};

/**
 * Forgot password
 */
const validationForgotPassword = ($form) => {
    const $email = $form.querySelector("[data-field='email']");

    $email.addEventListener("input", () => inputEmailAddress($email));
};

const submitForgotPassword = (e, $form) => {
    e.preventDefault();

    const $email = $form.querySelector("[data-field='email']");

    let allValid = true;

    if (!inputEmailAddress($email))
        allValid = false;

    if (allValid) {
        $form.querySelectorAll("input").forEach(elem => {
            elem.value = "";
            elem.classList.remove("success", "warning", "error");
        });
    
        $form.querySelectorAll(".validation").forEach(elem => elem.classList.remove("show"));
    }
};

/**
 * Reset password
 */
const validationResetPassword = ($form) => {
    const $inputPassword = $form.querySelector("[data-field='password']");
    const $inputConfirmPassword = $form.querySelector("[data-field='confirmPassword']");
    let getPasswordValue;

    $inputPassword.addEventListener("input", (e) => {
        getPasswordValue = e.target.value.trim();

        inputPassword($inputPassword);
    });
    $inputConfirmPassword.addEventListener("input", () => inputConfirmPassword($inputConfirmPassword,  getPasswordValue));
};

const submitResetPassword = (e, $form) => {
    e.preventDefault();

    const $inputPassword = $form.querySelector("[data-field='password']");
    const $inputConfirmPassword = $form.querySelector("[data-field='confirmPassword']");

    let allValid = true;

    if (!inputPassword($inputPassword))
            allValid = false;

    if (!inputConfirmPassword($inputConfirmPassword, $inputPassword.value.trim()))
            allValid = false;

    if (allValid) {
        $form.querySelectorAll("input").forEach(elem => {
            elem.value = "";
            elem.checked = false;
            elem.classList.remove("success", "warning", "error");
        });
    
        $form.querySelectorAll(".validation").forEach(elem => elem.classList.remove("show"));
    }
};

/**
 * Otp
 */
const validationOTP = ($form) => {
    const $otp1 = $form.querySelector("[data-field='otp1']");
    const $otp2 = $form.querySelector("[data-field='otp2']");
    const $otp3 = $form.querySelector("[data-field='otp3']");
    const $otp4 = $form.querySelector("[data-field='otp4']");
    const $otp5 = $form.querySelector("[data-field='otp5']");
    const $otp6 = $form.querySelector("[data-field='otp6']");
    const $otpValue = $form.querySelector("[data-field='valueOTP']");
    const $validation = $form.querySelector(".validation");

    inputsOTP($otp1, $otp2, $otp3, $otp4, $otp5, $otp6, $otpValue, $validation);
};

const submitOTP = (e, $form) => {
    e.preventDefault();

    const $otp1 = $form.querySelector("[data-field='otp1']");
    const $otp2 = $form.querySelector("[data-field='otp2']");
    const $otp3 = $form.querySelector("[data-field='otp3']");
    const $otp4 = $form.querySelector("[data-field='otp4']");
    const $otp5 = $form.querySelector("[data-field='otp5']");
    const $otp6 = $form.querySelector("[data-field='otp6']");
    const $otpValue = $form.querySelector("[data-field='valueOTP']");
    const $validation = $form.querySelector(".validation");

    $otp1.focus();

    const validate = inputsOTP($otp1, $otp2, $otp3, $otp4, $otp5, $otp6, $otpValue, $validation);

    if (validate()) {
        // if () {
        //     هنا الشرط بتاع ال database
        // }

        $validation.classList.remove("show");

        [$otp1, $otp2, $otp3, $otp4, $otp5, $otp6, $otpValue].forEach($elem => {
            $elem.classList.remove("success", "error");
            $elem.value = "";
        });
    }
};

const clickToResend = (e) => {
    e.preventDefault();

    // هنا كود ال database
};

export {
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
}