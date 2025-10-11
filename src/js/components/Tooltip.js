"use strict";

export const Tooltip = ($element) => {
    const placement = $element.dataset.placement;

    const $tooltip = document.createElement("span");
    $tooltip.classList.add("tooltip", "text-body-small");

    $element.addEventListener("mouseenter", function () { 
        $tooltip.textContent = $element.dataset.tooltips;

        const {
            top,
            left,
            width,
            height,
        } = this.getBoundingClientRect();

        document.body.appendChild($tooltip);

        if (!placement) {
            $tooltip.style.top = top + height + 5 + "px";
            $tooltip.style.left = left + (width / 2) + "px";
            $tooltip.style.transform = "translateX(-50%)";
        } else if (placement === "top") {
            $tooltip.style.top = top - $tooltip.offsetHeight - 5 + "px";
            $tooltip.style.left = left + (width / 2) + "px";
            $tooltip.style.transform = "translateX(-50%)";
        } else if (placement === "bottom") {
            $tooltip.style.top = top + height + 5 + "px";
            $tooltip.style.left = left + (width / 2) + "px";
            $tooltip.style.transform = "translateX(-50%)";
        } else if (placement === "left") {
            if (document.documentElement.dir === "rtl") {
                $tooltip.style.top = top + (height / 2) + "px";
                $tooltip.style.left = left + width + 5 + "px";
                $tooltip.style.transform = "translateY(-50%)";
            } else {
                $tooltip.style.top = top + (height / 2) + "px";
                $tooltip.style.left = left - $tooltip.offsetWidth - 5 + "px";
                $tooltip.style.transform = "translateY(-50%)";
            }
        } else if (placement === "right") {
            if (document.documentElement.dir === "ltr") {
                $tooltip.style.top = top + (height / 2) + "px";
                $tooltip.style.left = left + width + 5 + "px";
                $tooltip.style.transform = "translateY(-50%)";
            } else {
                $tooltip.style.top = top + (height / 2) + "px";
                $tooltip.style.left = left - $tooltip.offsetWidth - 5 + "px";
                $tooltip.style.transform = "translateY(-50%)";
            }
        }
    });

    $element.addEventListener("mouseleave", $tooltip.remove.bind($tooltip));

    $element.addEventListener("click", $tooltip.remove.bind($tooltip));
};