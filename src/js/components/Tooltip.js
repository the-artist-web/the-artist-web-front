"use strict";

export const Tooltip = ($element) => {
    const $dir = document.documentElement.dir;
    const $placement = $element.dataset.placement;

    const $tooltip = document.createElement("span");
    $tooltip.classList.add("tooltip");

    $element.addEventListener("mouseenter", function () {
        document.body.appendChild($tooltip);
        
        $tooltip.innerHTML = `<p class="text-body-small">${this.dataset.tooltips}</p>`;

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