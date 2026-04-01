"use strict";

export const BtnAddToCart = ($element, $badge) => {
    const p = $badge.querySelector("p");

    const $spinner = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a9 9 0 1 0 9 9" /></svg>`;

    $element.addEventListener("click", () => {
        let currentCount = parseInt(p.textContent.trim()) || 0;
        let currentHTML = $element.innerHTML;

        if ($element.dataset.btnsAddToCart === "false") {
            const $icon = $element.querySelector(".icon-btn");
            $icon.innerHTML = $spinner;

            setTimeout(() => {
                currentCount++;
                p.textContent = currentCount;
    
                $badge.classList.add("active");
    
                $element.dataset.btnsAddToCart = "true";
    
                $element.innerHTML = currentHTML.replace("Add To Cart", "Added To Cart");

                const $newIcon = $element.querySelector(".icon-btn");
                $newIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-inverse icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" /></svg>`;
            }, 500);
        } else {
            const $icon = $element.querySelector(".icon-btn");
            $icon.innerHTML = $spinner;
            
            setTimeout(() => {
                if (currentCount > 0) {
                    currentCount--;
                    p.textContent = currentCount;
                }
    
                if (currentCount === 0) $badge.classList.remove("active");
    
                $element.dataset.btnsAddToCart = "false";
    
                $element.innerHTML = currentHTML.replace("Added To Cart", "Add To Cart");

                const $newIcon = $element.querySelector(".icon-btn");
                $newIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>`;
            }, 500);
        }
    });
};