"use strict";

export const FixedScrolling = ($element) => {
    if (scrollY >= 100)
        $element.classList.add("active");
    else
        $element.classList.remove("active");
};