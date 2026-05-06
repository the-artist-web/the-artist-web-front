"use strict";

/**
 * Import Modules
 */
import { Tooltip } from "./components/Tooltip.js";

/**
 * Get Attributes
 */
const $emojies = document.querySelectorAll("[data-emoji]");
const $chatOnline = document.querySelector("[data-chat-outline]");
const $inputChat = document.querySelector("[data-input-chat]");
const $inputFile = document.querySelector("[data-input-file]");
const $submit = document.querySelector("[data-submit-message]");
const $swippers = document.querySelector("[data-swippers]");
const $photosChatList = $swippers.querySelector("[data-photos-chat-list]");

/**
 * Basics Input Chat
 */
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

/**
 * Upload Photos
 */
const $isArabic = document.documentElement.getAttribute("lang") === "ar";
const $deleteText = $isArabic ? "حذف" : "Remove";

let selectedFiles = [];

$inputFile.addEventListener("change", () => {
    const files = [...$inputFile.files];

    selectedFiles = [...selectedFiles, ...files];

    renderPhotos();

    $inputFile.value = "";
});

function renderPhotos() {
    $photosChatList.innerHTML = "";

    if (selectedFiles.length > 0) {
        $chatOnline.classList.add("active");
        $swippers.removeAttribute("hidden");
    } else {
        $chatOnline.classList.remove("active");
        $swippers.setAttribute("hidden", "");
    }

    selectedFiles.forEach((file, index) => {
        if (!file.type.startsWith("image/")) return;

        const imageURL = URL.createObjectURL(file);

        const li = document.createElement("li");
        li.className = "card";

        li.innerHTML = `
            <div class="figure">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-photo"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>

                <img src="${imageURL}" alt="preview" class="img-card img-cover"/>

                <input type="text" name="media_gallery[]" value="${file.name}" hidden />
            </div>

            <button type="button" class="icon-btn error extra-small" data-index="${index}" data-bs-toggle="tooltip" data-bs-title="${$deleteText}" data-bs-placement="bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>

                <div class="state-layer"></div>
            </button>
        `;

        li.querySelector("img").onload = () => URL.revokeObjectURL(imageURL);

        $photosChatList.appendChild(li);
    });

    initTooltips();
}

$photosChatList.addEventListener("click", (e) => {
    const btn = e.target.closest(".icon-btn.error");

    if (!btn) return;

    const index = btn.dataset.index;

    selectedFiles.splice(index, 1);

    renderPhotos();
});

function initTooltips() {
    const $tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    $tooltips.forEach($elem => Tooltip($elem));
}