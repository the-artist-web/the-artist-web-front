'use strict';

const dir = localStorage.getItem("dir") || document.documentElement.dir;

/**
 * Add event on elements
 */
const addEventOnElements = ($elements, eventType, callback) => {
    $elements.forEach(elem => elem.addEventListener(eventType, callback));
};

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
        $field.classList.add("warning");
        $validation.classList.add("show", "warning");
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
    const $formBox = $field.closest(".form-box");
    const $validation = $field.closest(".form-box");

    
};

export {
    addEventOnElements,
    inputUsername,
    inputEmailAddress
}