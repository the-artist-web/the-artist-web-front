"use strict";

export const Tooltip = ($element) => {
    const $dir = document.documentElement.dir;
    const $placement = $element.dataset.placement;

    const $tooltip = document.createElement("span");
    $tooltip.classList.add("tooltip");

    $element.addEventListener("mouseenter", function () {
        document.body.appendChild($tooltip);
        
        // Show Arrow Down
        if ($element.dataset.togglerCollapses)
            $tooltip.innerHTML = `
                <p class="text-body-small">${this.dataset.tooltips}</p>
            
                <div class="arrow-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
                </div>
            `;
        else
            $tooltip.innerHTML = `<p class="text-body-small">${this.dataset.tooltips}</p>`;

        // Hidden Tooltip in Navigation rail
        if ($element.closest(".navigation-rail") && $element.closest(".navigation-rail").classList.contains("active"))
            $tooltip.style.display = "none";
        else
            $tooltip.style.display = "flex";

        // Positions tooltip
        const {
            top,
            left,
            width,
            height
        } = this.getBoundingClientRect();

        if (!$placement) {
            $tooltip.style.top = top + height + 8 + "px";
            $tooltip.style.left = left + (width / 2) + "px";
            $tooltip.style.transform = "translateX(-50%)";
        } else if ($placement === "top") {
            $tooltip.style.top = top - 24 - 8 + "px";
            $tooltip.style.left = left + (width / 2) + "px";
            $tooltip.style.transform = "translateX(-50%)";
        } else if ($placement === "left") {
            $tooltip.style.top = top + (height / 2) + "px";
            $tooltip.style.transform = "translateY(-50%)";

            if ($dir === "ltr")
                $tooltip.style.left = left - $tooltip.offsetWidth - 8 + "px";
            else
                $tooltip.style.left = left + width + 8 + "px";
        } else if ($placement === "right") {
            $tooltip.style.top = top + (height / 2) + "px";
            $tooltip.style.transform = "translateY(-50%)";

            if ($dir === "ltr")
                $tooltip.style.left = left + width + 8 + "px";
            else
                $tooltip.style.left = left - $tooltip.offsetWidth - 8 + "px";
        }
    });

    $element.addEventListener("mouseleave", $tooltip.remove.bind($tooltip));

    $element.addEventListener("click", $tooltip.remove.bind($tooltip));
};