"use strict";

export const BtnSave = ($element) => {
    const $icon = $element.querySelector(".icon-btn");
    const $p = $element.querySelector("p");

    const $spinner = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a9 9 0 1 0 9 9" /></svg>`;

    $element.addEventListener("click", () => {
        if ($element.dataset.btnsSave === "false") {
            $icon.innerHTML = $spinner;

            setTimeout(() => {
                $element.dataset.btnsSave = "true";
    
                $p.textContent = "Unsaved";
    
                // $element.classList.replace("secondary", "inverse");
    
                $icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-inverse icon-tabler-bookmark"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z" /></svg>`;
            }, 500);
        } else {
            $icon.innerHTML = $spinner;

            setTimeout(() => {
                $element.dataset.btnsSave = "false";
    
                $p.textContent = "Save";
    
                // $element.classList.replace("inverse", "secondary");
    
                $icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bookmark"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4" /></svg>`;
            }, 500);
        }
    });
};