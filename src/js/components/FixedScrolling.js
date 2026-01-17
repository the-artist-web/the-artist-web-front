"use strict";

export const FixedScrolling = ($element) => {
    let lastScroll = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll)
            $element.classList.add("fixed-scrolling");
        else if (currentScroll < lastScroll)
            $element.classList.remove("fixed-scrolling");

        lastScroll = currentScroll;
    });
};