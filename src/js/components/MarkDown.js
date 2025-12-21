"use strict";

/**
 * Import Modules
 */
import { Copied } from "./Copied.js";
import { Tooltip } from "./Tooltip.js";

export const MarkDown = ($elem) => {
    // Table
    $elem.querySelectorAll("table").forEach((table) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("table-overflow", "custom-scrollbar");

        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });

    // Video
    $elem.querySelectorAll("video").forEach((video) => {
        video.controls = true;

        video.setAttribute("controls", "");
    });

    // Code Block
    $elem.querySelectorAll("pre").forEach((pre) => {
        const codeBlock = pre.querySelector("code");

        if (!codeBlock) return;

        const codeText = codeBlock.textContent;

        // Copy Button
        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "icon-btn text small copy-btn";
        copyBtn.setAttribute("data-copied", codeText);
        copyBtn.setAttribute("data-tooltips", "Copy");
        copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
                <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
            </svg>
            <div class="state-layer"></div>
        `;

        pre.appendChild(copyBtn);

        Copied(copyBtn);
        Tooltip(copyBtn);
    });
};