"use strict";

let lastScrollY = 0;
let ticking = false;

export const FixedScrolling = ($element) => {
    const currentScrollY = window.scrollY;
    const threshold = 5;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (currentScrollY > lastScrollY + threshold) $element.classList.add("fixed-scrolling");

            if (currentScrollY < lastScrollY - threshold) $element.classList.remove("fixed-scrolling");

            lastScrollY = currentScrollY;
            ticking = false;
        });

        ticking = true;
    }
};