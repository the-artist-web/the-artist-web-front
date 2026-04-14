"use strict";

export const PriceAmount = ($element) => {
    const $price = $element.querySelector("[data-price]");
    const $discount = $element.querySelector("[data-discount]");
    const $finalPrice = $element.querySelector("[data-final-price]");

    const updateFinalPrice = () => {
        const priceVal = parseFloat($price.value) || 0;
        const discountVal = parseFloat($discount.value) || 0;

        const total = priceVal - discountVal;
        $finalPrice.textContent = total.toFixed(2);
    };

    $price.addEventListener("input", updateFinalPrice);
    $discount.addEventListener("input", updateFinalPrice);
};