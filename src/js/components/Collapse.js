"use strict";

export const Collapse = ($element) => {
    const $collapseContent = document.querySelector(`${$element.dataset.togglerCollapses}`);
    const $arrow = $element.querySelector("[data-arrow]");

    $element.addEventListener("click", () => {
        $element.classList.toggle("show");
        $collapseContent.classList.toggle("show");
        $arrow?.classList.toggle("active");

        if ($collapseContent.classList.contains("show"))
            $collapseContent.style.height = $collapseContent.scrollHeight + "px";
        else
            $collapseContent.style.height = "0px";
    });
};
