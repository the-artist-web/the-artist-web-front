"use strict";

export const Collapse = ($element) => {
    document.querySelectorAll(".collapse-content.show").forEach($elem => $elem.style.height = $elem.scrollHeight + "px");

    const $collapseContent = document.querySelector($element.dataset.togglerCollapses);
    const $arrow = $element.querySelector("[data-arrow]");

    const updateHeights = ($content) => {
        $content.style.height = $content.classList.contains("show")
            ? $content.scrollHeight + "px"
            : "0px";

        let parent = $content.parentElement.closest(".collapse-content");

        while (parent) {
            parent.style.height = "auto";
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