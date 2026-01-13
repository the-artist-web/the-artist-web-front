"use strict";

export const Tooltip = ($element) => {
    const tooltip = new bootstrap.Tooltip($element);

    $element.addEventListener("click", () => tooltip.hide());
};