"use strict";

export const TextareaAutoExpanding = ($element) => {
    $element.addEventListener("input", function() {
        this.style.height = "150px";
        
        this.style.height = (this.scrollHeight) + "px";
    });
};