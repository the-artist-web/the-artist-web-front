"use strict";

export const Follow = ($element) => {
    $element.addEventListener("click", () => {
        if ($element.dataset.followers === "false") {
            $element.dataset.followers = "true";

            $element.classList.remove("inverse");
            $element.classList.add("secondary");

            $element.innerHTML = `
                <p class="text-body-small">Following</p>

                <div class="state-layer"></div>
            `;
        } else {
            $element.dataset.followers = "false";

            $element.classList.remove("secondary");
            $element.classList.add("inverse");

            $element.innerHTML = `
                <p class="text-body-small">Follow Back</p>

                <div class="state-layer"></div>
            `;
        }
    });
};