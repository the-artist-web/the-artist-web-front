"use strict";

export const TextareaAutoExpanding = ($element) => {
    window.addEventListener("load", () => $element.style.height = ($element.scrollHeight) + "px");

    $element.addEventListener("input", function() {
        this.style.height = "150px";
        
        this.style.height = (this.scrollHeight) + "px";
    });
};