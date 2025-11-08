"use strict";

export const FabMenu = ($element) => {
    $element.addEventListener("click", (e) => {
        e.stopPropagation();

        const $fabMenu = $element.closest(".fab-menu");
        const $menu = $fabMenu.querySelector(".menu");

        $element.innerHTML = "";

        document.querySelectorAll(".fab-menu .menu.active").forEach($elem => {
            if ($elem !== $menu) {
                $elem.classList.remove("active");

                $element.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                
                    <div class="state-layer"></div>
                `;
            }
        });

        $menu.classList.toggle("active");
        $element.classList.toggle("active");

        if ($menu.classList.contains("active"))
            $element.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        
            <div class="state-layer"></div>
        `;
        else
            $element.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        
            <div class="state-layer"></div>
        `;
    });
}