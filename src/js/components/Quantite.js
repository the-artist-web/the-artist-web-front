"use strict";

export const Quantite = ($element) => {
    const $plus = $element.querySelector("[data-plus]");
    const $minus = $element.querySelector("[data-minus]");
    const $input = $element.querySelector("[data-input]");
    
    $plus.addEventListener("click", () => $input.value = parseInt($input.value) + 1 || 1);

    $minus.addEventListener("click", () => {
        const current = parseInt($input.value) || 1;
        $input.value = Math.max(1, current - 1);
    });
}