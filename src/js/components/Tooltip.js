"use strict";

export const Tooltip = ($element) => {
    let tooltip;

    const init = () => {
        tooltip = new bootstrap.Tooltip($element, {
            trigger: "hover",
            delay: {
                show: 600,
                hide: 0
            }
        });
    };

    init();

    $element.addEventListener("click", () => {
        tooltip.dispose();
        init();
    });
};