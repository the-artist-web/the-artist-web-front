"use strict";

export const UploadImage = ($element) => {
    const $img = $element.querySelector("img");
    const $inputFile = $element.querySelector("input[type='file']");

    $inputFile.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file) {
            $img.src = URL.createObjectURL(file);

            $img.removeAttribute("hidden");
        }
    });
};