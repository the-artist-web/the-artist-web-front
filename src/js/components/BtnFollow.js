"use strict";

export const BtnFollow = ($element) => {
    const $text = $element.querySelector("p");

    if (!$element.dataset.originalText) $element.dataset.originalText = $text.textContent.trim();

    $element.addEventListener("click", () => {
        if ($element.dataset.btnFollowers === "false") {
            $element.dataset.btnFollowers = "true";

            $element.classList.replace("inverse", "secondary");

            $text.textContent = "Following";
        } else {
            $element.dataset.btnFollowers = "false";

            $element.classList.replace("secondary", "inverse");

            $text.textContent = $element.dataset.originalText;
        }
    });
};