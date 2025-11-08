"use strict";

export const DocumentDismiss = () => {
    /**
     * Menus
     */
    document.querySelectorAll(".menu-content.active").forEach($elem => $elem.classList.remove("active"));

    /**
     * Fab Menu
     */
    document.querySelectorAll(".fab-menu .menu.active").forEach($elem => {
        const $fabMenu = $elem.closest(".fab-menu");
        const $togglerFabsMenu = $fabMenu.querySelector("[data-toggler-fabs-menu]");

        $elem.classList.remove("active");
        $togglerFabsMenu.classList.remove("active");

        $togglerFabsMenu.innerHTMl = "";

        $togglerFabsMenu.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        
            <div class="state-layer"></div>
        `;
    });
};