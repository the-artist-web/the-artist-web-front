"use strict";

/**
 * Get Attributes Card
 */
const $titleCart = document.querySelector("[data-title-cart]");
const $priceCard = document.querySelector("[data-price-card]");
const $discountCard = document.querySelector("[data-discount-card]");
const $imgCard = document.querySelector("[data-img-card]");

/**
 * Get Attributes Form
 */
const $uploadImage = document.querySelector("[data-upload-image] input[type='file']");
const $titleProject = document.querySelector("[data-title-project]");
const $price = document.querySelector("[data-price]");
const $discount = document.querySelector("[data-discount]");
const $finalPrice = document.querySelector("[data-final-price]");

/**
 * Get Image Project
 */
$uploadImage.addEventListener("change", (e) => {
    const $file = e.target.files[0];

    if ($file) {
        $imgCard.src = URL.createObjectURL($file);

        $imgCard.removeAttribute("hidden");
    }
});

/**
 * Get Title Project
 */
$titleProject.addEventListener("input", (e) => $titleCart.textContent = e.target.value.length >= 1 ? e.target.value : "...");

/**
 * Get Price & Discount
 */
const getPrice = () => {
    return parseFloat(
        $finalPrice.textContent.replace(/[^\d.]/g, '')
    ) || 0;
};

const getDiscount = () => {
    return parseFloat($discount.value) || 0;
};

const updateTotal = () => {
    const price = getPrice();
    const discountValue = getDiscount();

    if ($discount.value.length >= 1) {
        const final = price + discountValue;

        $discountCard.textContent = `${final.toFixed(2)} E£`;
        $discountCard.removeAttribute("hidden");
    } else
        $discountCard.setAttribute("hidden", "");

    $priceCard.textContent = $finalPrice.textContent;
};

$price.addEventListener("input", updateTotal);
$discount.addEventListener("input", updateTotal);