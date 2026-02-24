"use strict";

export const Tooltip = ($element) => {
    const $tooltip = new bootstrap.Tooltip($element, {
            trigger: "hover",
            delay: { show: 600 }
        });

    $element.addEventListener("click", () => $tooltip.hide());
};