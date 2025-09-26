'use strict';

const dir = localStorage.getItem("dir") || document.documentElement.dir;

/**
 * Add event on elements
 */
const addEventOnElements = ($elements, eventType, callback) => $elements.forEach(elem => elem.addEventListener(eventType, callback));

/**
 * Input username
 */
const inputUsername = ($field) => {
    const value = $field.value.trim().toLowerCase();
    const regex = /^[a-zA-Z0-9_-]+$/;

    // Get validation div
    const $formBox = $field.closest(".form-box");
    const $validation = $formBox.querySelector(".validation");

    $validation.innerHTML = "";
    $field.classList.remove("error", "success", "warning");
    $validation.classList.remove("show", "error", "success", "warning");

    if (value === "") {
        $field.classList.add("error");
        $validation.classList.add("show", "error");
        $validation.innerHTML = dir === "ltr" ? "Username cannot be left blank." : "لا يمكن ترك اسم المستخدم فارغًا.";

        return false;
    } else if (value !== value.split(" ").join("")) {
        $validation.innerHTML = dir === "ltr" ? "Username cannot be spaced" : "لا يمكن وضع مسافة بين اسم المستخدم";
        $field.classList.add("error");
        $validation.classList.add("show", "error");

        return false;
    } else if (value.startsWith("_") || value.startsWith("-")) {
        $validation.innerHTML = dir === "ltr" ? "The username cannot start with `_` or `-` " : "لا يمكن أن يبدأ اسم المستخدم بـ `_` أو `-` ";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");

        return false;
    } else if (value.endsWith("_") || value.endsWith("-")) {
        $validation.innerHTML = dir === "ltr" ? "The username cannot end with `_` or `-` " : "لا يمكن أن ينتهي اسم المستخدم بـ `_` أو `-` ";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");

        return false;
    } else if (!regex.test(value)) {
        $validation.innerHTML = dir === "ltr" ? "Username must be small letters + numbers + - or _ only" : "يجب أن يتكون اسم المستخدم من أحرف صغيرة + أرقام + - أو _ فقط";
        $field.classList.add("error");
        $validation.classList.add("show", "error");

        return false;
    } else {
        $validation.innerHTML = dir === "ltr" ? "Username valid" : "اسم المستخدم صالح";
        $field.classList.add("success");
        $validation.classList.add("show", "success");

        return true;
    }
};

/**
 * Input email address
 */
const inputEmailAddress = ($field) => {
    const value = $field.value.trim().toLowerCase();
    const regex = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    const $formBox = $field.closest(".form-box");
    const $validation = $formBox.querySelector(".validation");

    $validation.innerHTML = "";
    $field.classList.remove("error", "success", "warning");
    $validation.classList.remove("show", "error", "success", "warning");

    if (value === "") {
        $validation.innerHTML = dir === "ltr" ? "Email cannot be left blank" : "لا يمكن ترك الايميل فارغ";
        $field.classList.add("error");
        $validation.classList.add("show", "error");

        return false;
    } else if (value.startsWith("_") || value.startsWith("-")) {
        $validation.innerHTML = dir === "ltr" ? "The name cannot start with `_` or `-` " : "لا يمكن أن يبدأ الاسم بـ `_` أو `-`";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");

        return false;
    } else if (value.endsWith("_") || value.endsWith("-")) {
        $validation.innerHTML = dir === "ltr" ? "The name cannot end with `_` or `-` " : "لا يمكن أن ينتهي الاسم بـ `_` أو `-`";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");

        return false;
    } else if (value !== value.split(" ").join("")) {
        $validation.innerHTML = dir === "ltr" ? "Spaces cannot be left in the email." : "لا يمكن ترك مسافات في الايميل";
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");

        return false;
    } else if (!regex.test(value)) {
        $validation.innerHTML = dir === "ltr" ? "Please enter a valid email address" : "من فضلك أدخل بريد إلكتروني صالح";
        $field.classList.add("error");
        $validation.classList.add("show", "error");

        return false;
    } else {
        $validation.innerHTML = dir === "ltr" ? "Email valid" : "الايميل صالح";
        $field.classList.add("success");
        $validation.classList.add("show", "success");

        return true;
    }
};

/**
 * Input apssword
 */
const inputPassword = ($field) => {
    const value = $field.value.trim();
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const $formBox = $field.closest(".form-box");
    const $validation = $formBox.querySelector(".validation");

    $validation.innerHTML = "";
    $field.classList.remove("error", "warning", "success");
    $validation.classList.remove("show", "error", "warning", "success");

    if (value === "") {
        $field.classList.add("error");
        $validation.classList.add("show", "error");
        $validation.innerHTML = dir === "ltr" ? "Password cannot be left blank." : "لا يمكن ترك كلمة المرور فارغًة.";

        return false;
    } else if (value.startsWith("_") || value.startsWith("-")) {
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");
        $validation.innerHTML = dir === "ltr" 
            ? "Password cannot start with _ or -." 
            : "لا يمكن أن تبدأ كلمة المرور بشرطة أو شرطة سفلية.";

        return false;
    } else if (value.endsWith("_") || value.endsWith("-")) {
        $field.classList.add("warning");    
        $validation.classList.add("show", "warning");
        $validation.innerHTML = dir === "ltr" 
            ? "Password cannot end with _ or -." 
            : "لا يمكن أن تنتهي كلمة المرور '-' أو '_'.";

        return false;
    } else if (value !== value.split(" ").join("")) {
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");
        $validation.innerHTML = dir === "ltr" 
            ? "Password cannot contain spaces." 
            : "لا يمكن أن تحتوي كلمة المرور على مسافات.";

        return false;
    } else if (value.length <= 8) {
        $field.classList.add("error");
        $validation.classList.add("show", "error");
        $validation.innerHTML = dir === "ltr" 
            ? "Password must be longer than 8 characters." 
            : "يجب أن تكون كلمة المرور أطول من 8 أحرف.";

        return false;
    } else if (value.length >= 30) {
        $field.classList.add("error");
        $validation.classList.add("show", "error");
        $validation.innerHTML = dir === "ltr" 
            ? "Password must be less than 30 characters." 
            : "يجب أن تكون كلمة المرور أقل من 30 حرفًا.";

        return false;
    } else if (!regex.test(value)) {
        $field.classList.add("error");
        $validation.classList.add("show", "error");
        $validation.innerHTML = dir === "ltr" 
            ? "Password must contain uppercase, lowercase, number, and special character." 
            : "يجب أن تحتوي كلمة المرور على حرف كبير وصغير ورقم ورمز خاص.";

        return false;
    } else {
        $validation.innerHTML = dir === "ltr" ? "Password valid" : "كلمة المرور صالحة";
        $field.classList.add("success");
        $validation.classList.add("show", "success");

        return true;
    }
}

/**
 * Input apssword
 */
const inputConfirmPassword = ($field, $passwordValue) => {
    const value = $field.value.trim();
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const $formBox = $field.closest(".form-box");
    const $validation = $formBox.querySelector(".validation");

    $validation.innerHTML = "";

    $field.classList.remove("error", "warning", "success");

    $validation.classList.remove("show", "error", "warning", "success");

    if (value === "") {
        $field.classList.add("error");

        $validation.classList.add("show", "error");

        $validation.innerHTML = dir === "ltr" 
            ? "Confirm password cannot be left blank." 
            : "لا يمكن ترك تأكيد كلمة المرور فارغًا.";

        return false;
    } else if (value.startsWith("_") || value.startsWith("-")) {
        $field.classList.add("warning");

        $validation.classList.add("show", "warning");

        $validation.innerHTML = dir === "ltr" 
            ? "Confirm password cannot start with _ or -." 
            : "لا يمكن أن يبدأ تأكيد كلمة المرور بشرطة أو شرطة سفلية.";

        return false;
    } else if (value.endsWith("_") || value.endsWith("-")) {
        $field.classList.add("warning");    

        $validation.classList.add("show", "warning");

        $validation.innerHTML = dir === "ltr" 
            ? "Confirm password cannot end with _ or -." 
            : "لا يمكن أن ينتهي تأكيد كلمة المرور '-' أو '_'.";

        return false;
    } else if (value !== value.split(" ").join("")) {
        $field.classList.add("warning");

        $validation.classList.add("show", "warning");

        $validation.innerHTML = dir === "ltr" 
            ? "Confirm password cannot contain spaces." 
            : "لا يمكن أن يحتوي تأكيد كلمة المرور على مسافات.";

        return false;
    } else if (value.length <= 8) {
        $field.classList.add("error");

        $validation.classList.add("show", "error");

        $validation.innerHTML = dir === "ltr" 
            ? "Confirm password must be longer than 8 characters." 
            : "يجب أن يكون تأكيد كلمة المرور أطول من 8 أحرف.";

        return false;
    } else if (value.length >= 30) {
        $field.classList.add("error");

        $validation.classList.add("show", "error");

        $validation.innerHTML = dir === "ltr" 
            ? "Confirm password must be less than 30 characters." 
            : "يجب أن يكون تأكيد كلمة المرور أقل من 30 حرفًا.";

        return false;
    } else if (!regex.test(value)) {
        $field.classList.add("error");

        $validation.classList.add("show", "error");

        $validation.innerHTML = dir === "ltr" 
            ? "Confirm password must contain uppercase, lowercase, number, and special character." 
            : "يجب أن يحتوي تأكيد كلمة المرور على حرف كبير وصغير ورقم ورمز خاص.";

        return false;
    } else if ($passwordValue && value !== $passwordValue) {
        $field.classList.add("error");

        $validation.classList.add("show", "error");

        $validation.innerHTML = dir === "ltr" 
            ? "Passwords do not match." 
            : "كلمة المرور غير متطابقة.";


        return false;
    } else {
        $field.classList.add("success");
        
        $validation.classList.add("show", "success");
        
        $validation.innerHTML = dir === "ltr" ? "Confirm password valid" : "تأكيد كلمة المرور صالح";

        return true;
    }
}

/**
 * Input check terms of use
 */
const inputCheckTermsOfUse = ($field, $btn) => {
    const $formBox = $field.closest(".form-box");
    const $validation = $formBox.querySelector(".validation");

    $validation.innerHTML = "";
    $field.classList.remove("error", "warning", "success");
    $validation.classList.remove("show", "error", "warning", "success");

    console.log($field.checked)
    
    if (!$field.checked) {
        $field.classList.add("error");
        $validation.classList.add("show", "error");
        $validation.innerHTML = dir === "ltr" 
            ? "You must accept the terms of use." 
            : "يجب الموافقة على شروط الاستخدام.";

        $btn.disabled = true;

        return false;
    } else {
        $btn.disabled = false;

        return true;
    }
}

export {
    addEventOnElements,
    inputUsername,
    inputEmailAddress,
    inputPassword,
    inputConfirmPassword,
    inputCheckTermsOfUse
}