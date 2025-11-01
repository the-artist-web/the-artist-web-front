"use strict";

export const OTP = ($element) => {
    const $fields = $element.querySelectorAll("[data-fields]");
    const $hiddenInput = $element.querySelector("[data-input-hidden]");

    $fields.forEach((input, index) => {
        input.addEventListener("input", (e) => {
                const value = e.target.value.replace(/[^A-Za-z0-9]/g, "");

                e.target.value = value;

                if (value && index < $fields.length - 1) $fields[index + 1].focus();

                $hiddenInput.value = [...$fields].map(i => i.value).join("");
        });

        input.addEventListener("keydown", (e) => e.key === "Backspace" && !input.value && index > 0 ? $fields[index - 1].focus() : "");

        input.addEventListener("paste", (e) => {
                e.preventDefault();

                const paste = (e.clipboardData || window.clipboardData).getData("text").trim();
                
                if (!/^[A-Za-z0-9]+$/.test(paste)) return;

                const digits = paste.split("").slice(0, $fields.length);

                digits.forEach((d, i) => $fields[i].value = d);

                $hiddenInput.value = digits.join("");
                $fields[digits.length - 1].focus();
        });
    });
};