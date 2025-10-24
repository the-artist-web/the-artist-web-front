"use strict";

export const FixedScrolling = ($element) => {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            $element.classList.remove("active");
        } else {
            $element.classList.add("active");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
};