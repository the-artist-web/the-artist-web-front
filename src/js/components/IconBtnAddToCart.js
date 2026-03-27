"use strict";

let count = 0;

export const IconBtnAddToCart = ($element, $badge) => {
    const p = $badge.querySelector("p");

    // Tooltip
    const existing = bootstrap.Tooltip.getInstance($element);

    if (existing) existing.dispose();

    const $tooltip = new bootstrap.Tooltip($element, {
            trigger: "hover focus",
            delay: 0
        });

    $element.addEventListener("click", () => {
        if ($element.dataset.iconBtnsAddToCart === "false") {
            count++;
            p.textContent = count;

            $badge.classList.add("active");

            $element.dataset.iconBtnsAddToCart = "true";

            $element.classList.remove("text");
            $element.classList.add("secondary");

            $tooltip.setContent({ ".tooltip-inner": "Delete From Cart" });

            $element.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" /></svg>

                <div class="state-layer"></div>
            `;
        } else {
            if (count > 0) {
                count--;
                p.textContent = count;
            }

            if (count === 0) $badge.classList.remove("active");

            $element.dataset.iconBtnsAddToCart = "false";

            $element.classList.remove("secondary");
            $element.classList.add("text");

            $tooltip.setContent({ ".tooltip-inner": "Add To Cart" });

            $element.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>

                <div class="state-layer"></div>
            `;
        }
    });
};