"use strict";

export const Snackbar = ($value) => {
    const $snackbar = document.createElement("div");
    $snackbar.classList.add("snackbar");

    $snackbar.remove();

    $snackbar.innerHTML = `<p class="line-clamp line-clamp-1 text-capitalize text-body-large">${$value}</p>`;

    document.body.appendChild($snackbar);

    setTimeout(() => $snackbar.remove(), 3500);
};