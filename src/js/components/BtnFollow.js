"use strict";

export const BtnFollow = ($element) => {
    const $text = $element.querySelector("p");

    if (!$element.dataset.originalText) $element.dataset.originalText = $text.textContent.trim();

    const $spinner = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a9 9 0 1 0 9 9" /></svg>`;

    $element.addEventListener("click", () => {
        if ($element.dataset.btnsFollow === "false") {
            $text.innerHTML = $spinner;

            setTimeout(() => {
                $element.dataset.btnsFollow = "true";
    
                $element.classList.replace("inverse", "secondary");
    
                $text.textContent = "Following";
            }, 500);
        } else {
            $text.innerHTML = $spinner;

            setTimeout(() => {
                $element.dataset.btnsFollow = "false";
    
                $element.classList.replace("secondary", "inverse");
    
                $text.textContent = $element.dataset.originalText;
            }, 500);
        }
    });
};