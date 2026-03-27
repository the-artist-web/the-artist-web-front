"use strict";

export const DragDropSheet = () => {
    const types = [
        { selector: ".offcanvas-bottom", axis: "Y", dir: 1, prop: "translateY" },
        { selector: ".offcanvas-top", axis: "Y", dir: -1, prop: "translateY" },
        { selector: ".offcanvas-start", axis: "X", dir: -1, prop: "translateX" },
        { selector: ".offcanvas-end", axis: "X", dir: 1, prop: "translateX" }
    ];

    types.forEach(type => {
        const elements = document.querySelectorAll(type.selector);
        elements.forEach(el => initDrag(el, type));
    });

    function initDrag(el, config) {
        let startPos = 0;
        let currentPos = 0;
        let isDragging = false;

        el.addEventListener("touchstart", (e) => {
            if (el.querySelector('.offcanvas-list').scrollTop > 0 && config.axis === "Y") return;
            
            startPos = config.axis === "Y" ? e.touches[0].clientY : e.touches[0].clientX;
            isDragging = true;
            el.style.transition = "none";
        }, { passive: true });

        el.addEventListener("touchmove", (e) => {
            if (!isDragging) return;

            currentPos = config.axis === "Y" ? e.touches[0].clientY : e.touches[0].clientX;
            let diff = currentPos - startPos;

            if ((config.dir === 1 && diff > 0) || (config.dir === -1 && diff < 0)) el.style.transform = `${config.prop}(${diff}px)`;
        }, { passive: true });

        el.addEventListener("touchend", (e) => {
            if (!isDragging) return;

            isDragging = false;
            el.style.transition = "";

            let diff = currentPos - startPos;
            const threshold = 100;

            if (Math.abs(diff) > threshold) {
                const instance = bootstrap.Offcanvas.getOrCreateInstance(el);
                instance.hide();
            }

            el.style.transform = "";
        });
    }
};