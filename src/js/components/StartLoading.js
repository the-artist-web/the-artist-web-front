"use strict";

export const StartLoading = ($element, $body) => {
    setTimeout(() => {
        $element.classList.add("active");
        $body.classList.add("load");
    }, 800);
};