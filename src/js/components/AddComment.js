"use strict";

export const AddComment = ($element) => {
    const $inputChat = $element.querySelector(".input-chat");
    const $submit = $element.querySelector("button[type='submit']");
    const $emojies = $element.querySelectorAll("[data-emoji]");

    const updateButtonState = () => {
        const text = $inputChat.innerText.trim();
        $submit.disabled = text.length === 0;
    };

    $inputChat.addEventListener("input", () => {
        if ($inputChat.innerHTML === "<br>") $inputChat.innerHTML = "";

        updateButtonState();
    });

    $emojies.forEach($elem => {
        $elem.addEventListener("click", () => {
            const emoji = $elem.innerText;

            insertAtCursor($inputChat, emoji);

            updateButtonState();
            $inputChat.focus();
        });
    });

    function insertAtCursor(el, text) {
        const selection = window.getSelection();

        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(text);
        range.insertNode(textNode);

        range.setStartAfter(textNode);
        range.setEndAfter(textNode);

        selection.removeAllRanges();
        selection.addRange(range);
    }
};