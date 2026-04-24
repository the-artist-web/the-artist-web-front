"use strict";

/**
 * Import Modules
 */
import { DragDropSheet } from "./DragDropSheet.js";

export const SharedBottomSheet = ($element) => {
    const $sharedbottomSheet = document.createElement("div");
    $sharedbottomSheet.classList.add("offcanvas", "offcanvas-bottom");
    
    const $offcanvasHeader = document.createElement("div");
    $offcanvasHeader.classList.add("offcanvas-header");

    const $offcanvasList = document.createElement("ul");
    $offcanvasList.classList.add("offcanvas-list", "custom-scrollbar");

    const $offcanvasDismiss = document.createElement("ul");
    $offcanvasDismiss.classList.add("offcanvas-dismiss");
    $offcanvasDismiss.setAttribute("data-bs-dismiss", "offcanvas");

    $sharedbottomSheet.appendChild($offcanvasDismiss);

    $element.addEventListener("click", (e) => {
        if (window.innerWidth < 992) {
            e.preventDefault();
            e.stopPropagation();

            const $dropdown = $element.closest(".dropdown");
            const $dropdownMenu = $dropdown.querySelector(".dropdown-menu");

            const $dropdownHeader = $dropdown.querySelector(".dropdown-header");
            if ($dropdownHeader) {
                $dropdownHeader.classList.replace("dropdown-header", "offcanvas-header");
                $offcanvasHeader.innerHTML = $dropdownHeader.innerHTML;
                $sharedbottomSheet.appendChild($offcanvasHeader);
            }
            
            Array.from($dropdownMenu.children)
                .filter($item => !$item.classList.contains("offcanvas-header"))
                .forEach($item => $offcanvasList.appendChild($item));
            
            $offcanvasList.querySelectorAll(".dropdown-item").forEach($item => $item.classList.replace("dropdown-item", "offcanvas-link"));

            $sharedbottomSheet.appendChild($offcanvasList);
            document.body.appendChild($sharedbottomSheet);

            const $myOffcanvas = new bootstrap.Offcanvas($sharedbottomSheet);
            $myOffcanvas.show();

            DragDropSheet();

            $sharedbottomSheet.addEventListener("hidden.bs.offcanvas", () => $sharedbottomSheet.remove());
        }
    });
};