"use strict";

export const StarRating = ($element) => {
    const $stars = $element.querySelectorAll("[data-star]");
    const $starsSVG = $element.querySelectorAll("[data-star] svg");

    $stars.forEach(($star, index1) => {
        $star.addEventListener("click", () => {
            $stars.forEach(($s, index2) => {
                $s.classList.toggle("active", index2 <= index1);

                $s.querySelector("svg").style.color = $s.classList.contains("active") ? "var(--primary)" : "var(--outline-variant)";
            });
        });
    });

    $starsSVG.forEach(($star, index1) => {
        $star.addEventListener("mouseenter", () => $starsSVG.forEach(($s, index2) => $s.style.color = index2 <= index1 ? "var(--primary)" : "var(--outline-variant)"));

        $star.addEventListener("mouseleave", () => $stars.forEach(($s) => $s.querySelector("svg").style.color = $s.classList.contains("active") ? "var(--primary)" : "var(--outline-variant)"));
    });
};
