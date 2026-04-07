"use strict";

export const AddComment = ($element) => {
    const $textarea = $element.querySelector("[data-textarea]");
    const $submit = $element.querySelector("button[type='submit']");
    const $emojies = $element.querySelectorAll("[data-emoji]");
    
    const updateTextarea = () => {
        $submit.disabled = $textarea.value.trim().length === 0;
        
        $textarea.style.height = "48px";
        $textarea.style.height = $textarea.scrollHeight + "px";
    };

    $textarea.addEventListener("input", updateTextarea);

    $emojies.forEach($elem => {
        $elem.addEventListener("click", () => {
            const emoji = $elem.innerText;
            
            $textarea.value += emoji;
            
            $textarea.focus();

            updateTextarea();
        });
    });
};