"use strict";

export const Overlay = (overlay, body) => {
    overlay.classList.remove("active");
    body.classList.add("load");
};