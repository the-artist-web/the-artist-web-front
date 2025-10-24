"use strict";

export const Tooltip = ($element) => {
    const $dir = document.documentElement.dir;

    // Create Element
    const $tooltip = document.createElement("span");
    $tooltip.classList.add("tooltip");
    
    // Get Placement
    const $placement = $element.dataset.placement;

    $element.addEventListener("mouseenter", function() {
        $tooltip.innerHTML = `<p class="text-body-small">${$element.dataset.tooltips}</p>`;
        $tooltip.classList.add("active");
        document.body.appendChild($tooltip);

        const {
            top,
            left,
            width,
            height
        } = this.getBoundingClientRect();

        if ($placement === "" || !$placement) {
            $tooltip.style.top = top + height + 5 + "px";
            $tooltip.style.left = left + (width / 2) + "px";
            $tooltip.style.transform = "translateX(-50%)";
        } else if ($placement === "top") {
            $tooltip.style.top = top - 24 - 5 + "px";
            $tooltip.style.left = left + (width / 2) + "px";
            $tooltip.style.transform = "translateX(-50%)";
        } else if ($placement === "bottom") {
            $tooltip.style.top = top + height + 5 + "px";
            $tooltip.style.left = left + (width / 2) + "px";
            $tooltip.style.transform = "translateX(-50%)";
        } else if ($placement === "left") {
            if ($dir === "ltr") {
                $tooltip.style.top = top + (height / 2) + "px";
                $tooltip.style.left = left - $tooltip.offsetWidth - 5 + "px";
                $tooltip.style.transform = "translateY(-50%)";
            } else {
                $tooltip.style.top = top + (height / 2) + "px";
                $tooltip.style.left = left + width + 5 + "px";
                $tooltip.style.transform = "translateY(-50%)";
            }
        } else if ($placement === "right") {
            if ($dir === "rtl") {
                $tooltip.style.top = top + (height / 2) + "px";
                $tooltip.style.left = left - $tooltip.offsetWidth - 5 + "px";
                $tooltip.style.transform = "translateY(-50%)";
            } else {
                $tooltip.style.top = top + (height / 2) + "px";
                $tooltip.style.left = left + width + 5 + "px";
                $tooltip.style.transform = "translateY(-50%)";
            }
        }
    });

    $element.addEventListener("mouseleave", $tooltip.remove.bind($tooltip));

    $element.addEventListener("click", $tooltip.remove.bind($tooltip));
};