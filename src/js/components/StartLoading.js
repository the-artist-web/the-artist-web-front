"use strict";

export const StartLoading = (startLoading, body) => setTimeout(() => {
        startLoading.classList.add("active");
        body.classList.add("load");
    }, 800);