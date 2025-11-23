"use strict";

export const Snackbar = ($value) => {
    const $snackbar = document.createElement("div");
    $snackbar.classList.add("snackbar", "active");

    document.querySelectorAll(".snackbar.active").forEach($elem => $elem.classList.remove("active"));

    $snackbar.innerHTML = `<p class="line-clamp line-clamp-1 text-capitalize text-body-large">${$value}</p>`;

    document.body.appendChild($snackbar);

    setTimeout(() => $snackbar.classList.remove("active"), 3500);
};