"use strict";

export const Popover = ($element) => {
    const popover = new bootstrap.Popover($element, {
        html: true,
        sanitize: false,
        trigger: 'manual'
    });

    let timeout;
    let tip = null;

    const show = () => {
        clearTimeout(timeout);

        popover.show();
    };

    const hide = () => timeout = setTimeout(() => popover.hide(), 200);

    $element.addEventListener("shown.bs.popover", () => {
        tip = document.querySelector(".popover:last-child");

        if (!tip) return;

        tip.addEventListener("mouseenter", () => clearTimeout(timeout));
        tip.addEventListener("mouseleave", () => hide());
    });

    $element.addEventListener("mouseenter", show);
    $element.addEventListener("mouseleave", hide);
};