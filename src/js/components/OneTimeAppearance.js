"use strict";

const cleanBootstrapBackdrops = () => {
    document.querySelectorAll(".modal-backdrop, .offcanvas-backdrop").forEach(el => el.remove());
    document.body.classList.remove("modal-open", "offcanvas-open");
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("padding-right");
};

const registerBootstrapCleanup = ($element) => {
    const handler = () => {
        cleanBootstrapBackdrops();
        
        $element.removeEventListener("hidden.bs.modal", handler);
        $element.removeEventListener("hidden.bs.offcanvas", handler);
    };
    $element.addEventListener("hidden.bs.modal", handler);
    $element.addEventListener("hidden.bs.offcanvas", handler);
};

const closeAllBootstrapComponents = () => {
    const modals = document.querySelectorAll(".modal.show");
    modals.forEach(el => {
        const instance = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
        instance.hide();
    });

    const offcanvasList = document.querySelectorAll(".offcanvas.show");
    offcanvasList.forEach(el => {
        const instance = bootstrap.Offcanvas.getInstance(el) || new bootstrap.Offcanvas(el);
        instance.hide();
    });
};

export const OneTimeAppearance = ($element) => {
    if (!( $element instanceof HTMLElement )) return;
    if (sessionStorage.getItem("appearanceOnce") === "active") return;

    const delay = parseInt($element.dataset.oneTimeAppearances) || 1000;
    const isMobile = window.innerWidth < 992;

    setTimeout(() => {
        closeAllBootstrapComponents();

        registerBootstrapCleanup($element);

        const instance = isMobile
            ? new bootstrap.Offcanvas($element)
            : new bootstrap.Modal($element);

        instance.show();
        sessionStorage.setItem("appearanceOnce", "active");
    }, delay);
};
