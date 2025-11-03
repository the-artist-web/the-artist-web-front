"use strict";

export const Collapse = ($element) => {
    const $collapseContent = document.querySelector(`${$element.dataset.togglerCollapses}`);
    const $arrow = $element.querySelector("[data-arrow]");

    $element.addEventListener("click", () => {
        $collapseContent.classList.toggle("active");

        if ($collapseContent.classList.contains("active"))
            $collapseContent.style.height = $collapseContent.scrollHeight + "px";
        else
            $collapseContent.style.height = "0px";

        $arrow?.classList.toggle("active");
    });
};
