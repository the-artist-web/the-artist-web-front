"use strict";

export const Collapse = ($element) => {
    const $collapseContent = document.querySelector($element.dataset.togglerCollapses);
    const $arrow = $element.querySelector("[data-arrow]");

    const updateHeights = ($content) => {
        if ($content.classList.contains("show"))
            $content.style.height = $content.scrollHeight + "px";
        else
            $content.style.height = "0px";

        let parent = $content.parentElement.closest(".collapse-content");

        while (parent) {
            parent.style.height = parent.scrollHeight + "px";
            parent = parent.parentElement.closest(".collapse-content");
        }
    };

    $element.addEventListener("click", () => {
        $element.classList.toggle("show");
        $collapseContent.classList.toggle("show");
        $arrow?.classList.toggle("active");

        updateHeights($collapseContent);
    });

    $collapseContent.addEventListener("transitionend", (e) => e.propertyName === "height" ? updateHeights($collapseContent) : "");
};