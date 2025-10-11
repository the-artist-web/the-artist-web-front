"use strict";

export const FixedScrolling = ($elem) => {
    if (scrollY >= 50)
        $elem.classList.add("active");
    else
        $elem.classList.remove("active");
};