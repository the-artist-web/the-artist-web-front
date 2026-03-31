"use strict";

let count = 0;

export const BtnAddToCart = ($element, $badge) => {
    const p = $badge.querySelector("p");

    $element.addEventListener("click", () => {
        let currentCount = parseInt(p.textContent);
        let currentHTML = $element.innerHTML;

        if ($element.dataset.btnsAddToCart === "false") {
            currentCount++;
            p.textContent = currentCount;

            $badge.classList.add("active");

            $element.dataset.btnsAddToCart = "true";

            $element.classList.replace("inverse", "success");

            $element.innerHTML = currentHTML.replace("Add To Cart", "Added To Cart");
        } else {
            if (currentCount > 0) {
                currentCount--;
                p.textContent = currentCount;
            }

            if (currentCount === 0) $badge.classList.remove("active");

            $element.dataset.btnsAddToCart = "false";

            $element.classList.replace("success", "inverse");

            $element.innerHTML = currentHTML.replace("Added To Cart", "Add To Cart");
        }
    });
};