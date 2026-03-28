"use strict";

let ticking = false;
let lastScrollY = window.scrollY;

export const FixedScrolling = ($fixedScrolling) => {
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const threshold = 5;

                $fixedScrolling.forEach($element => {
                    if (currentScrollY > lastScrollY + threshold) $element.classList.add("fixed-scrolling");

                    if (currentScrollY < lastScrollY - threshold) $element.classList.remove("fixed-scrolling");
                });

                lastScrollY = currentScrollY;
                ticking = false;
            });

            ticking = true;
        }
    });
};