"use strict";

let count = 0;

export const BtnAddToCart = ($element, $badge) => {
    const p = $badge.querySelector("p");

    $element.addEventListener("click", () => {
        let currentHTML = $element.innerHTML;

        if ($element.dataset.btnsAddToCart === "false") {
            count++;
            p.textContent = count;

            $badge.classList.add("active");

            $element.dataset.btnsAddToCart = "true";

            $element.classList.replace("inverse", "success");

            $element.innerHTML = currentHTML.replace("Add To Cart", "Added To Cart");
        } else {
            if (count > 0) {
                count--;
                p.textContent = count;
            }

            if (count === 0) $badge.classList.remove("active");

            $element.dataset.btnsAddToCart = "false";

            $element.classList.replace("success", "inverse");

            $element.innerHTML = currentHTML.replace("Added To Cart", "Add To Cart");
        }
    });
};