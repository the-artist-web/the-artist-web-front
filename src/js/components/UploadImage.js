"use strict";

export const UploadImage = ($element) => {
    const $img = $element.querySelector("img");
    const $inputFile = $element.querySelector("input[type='file']");

    $inputFile.addEventListener("change", (e) => {
        const $file = e.target.files[0];

        if ($file) {
            $img.src = URL.createObjectURL($file);

            $img.removeAttribute("hidden");
        }
    });
};