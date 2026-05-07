"use strict";

const $htmlLang = document.documentElement.lang;

/**
 * Import Modules
 */
import { IconBtnCopy } from "./IconBtnCopy.js";
import { Tooltip } from "./Tooltip.js";

/**
 * Markdown
 */
export const Markdown = ($element) => {
    const $tables = $element.querySelectorAll("table");
    const $preCodes = $element.querySelectorAll("pre");
    const $spinner = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a9 9 0 1 0 9 9" /></svg>`;

    /**
     * Markdown Table
     */
    $tables.forEach(($table) => {
        if ($table.parentElement.classList.contains("table-overflow")) return;

        const $wrapper = document.createElement("div");

        $wrapper.className = "table-overflow";

        $table.parentNode.insertBefore($wrapper, $table);

        $wrapper.appendChild($table);
    });

    /**
     * Markdown Pre Code
     */
    $preCodes.forEach(($preCode) => {
        const $parent = $preCode.parentElement;

        if ($parent.classList.contains("card") && $parent.classList.contains("filled")) return;

        const $wrapper = document.createElement("div");

        $wrapper.className = "card filled table-overflow";

        const $code = $preCode.querySelector("code");

        const $copyButton = document.createElement("button");

        $copyButton.type = "button";
        $copyButton.className = "icon-btn text small";
        $copyButton.setAttribute("data-bs-toggle", "tooltip");
        $copyButton.setAttribute("data-bs-title", $htmlLang === "en" ? "Copy" : "تم النسخ");
        $copyButton.setAttribute("data-bs-placement", "bottom");

        $copyButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>

            <div class="state-layer"></div>
        `;

        $preCode.parentNode.insertBefore($wrapper, $preCode);

        $wrapper.appendChild($copyButton);
        $wrapper.appendChild($preCode);

        Tooltip($copyButton);

        $copyButton.addEventListener("click", async () => {
            const $text = $preCode.querySelector("code")?.textContent || "";

            $copyButton.disabled = true;
            $copyButton.innerHTML = $spinner;

            try {
                await navigator.clipboard.writeText($text);
            } catch (err) {
                console.error("Copy failed:", err);
            }
            
            setTimeout(() => {
                $copyButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-copy-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.333 6a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-3.333 -4c1.094 0 1.828 .533 2.374 1.514a1 1 0 1 1 -1.748 .972c-.221 -.398 -.342 -.486 -.626 -.486h-10c-.548 0 -1 .452 -1 1v9.998c0 .32 .154 .618 .407 .805l.1 .065a1 1 0 1 1 -.99 1.738a3 3 0 0 1 -1.517 -2.606v-10c0 -1.652 1.348 -3 3 -3zm1.293 9.293l-3.293 3.292l-1.293 -1.292a1 1 0 0 0 -1.414 1.414l2 2a1 1 0 0 0 1.414 0l4 -4a1 1 0 0 0 -1.414 -1.414" /></svg>
        
                    <div class="state-layer"></div>
                `;
            }, 500);

            setTimeout(() => {
                $copyButton.innerHTML = $spinner;
                
                setTimeout(() => {
                    $copyButton.disabled = false;

                    $copyButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
        
                        <div class="state-layer"></div>
                    `;
                }, 500);
            }, 2000);
        });
    });
};