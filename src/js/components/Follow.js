"use strict";

export const Follow = ($element) => {
    const $text = $element.querySelector("p");

    $element.addEventListener("click", () => {
        if ($element.dataset.followers === "false") {
            $element.dataset.followers = "true";

            $element.classList.remove("inverse");
            $element.classList.add("secondary");

            $text.textContent = "Following";
        } else {
            $element.dataset.followers = "false";

            $element.classList.remove("secondary");
            $element.classList.add("inverse");

            $text.textContent = "Follow";
        }
    });
};