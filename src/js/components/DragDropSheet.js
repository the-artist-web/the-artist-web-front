"use strict";

export const DragDropSheet = () => {
    const types = [
        { selector: ".offcanvas-bottom", axis: "Y", dir: 1, prop: "translateY" },
    ];

    types.forEach(type => {
        const elements = document.querySelectorAll(type.selector);
        elements.forEach(el => initDrag(el, type));
    });

    function initDrag(el, config) {
        let startPos = 0;
        let currentPos = 0;
        let isDragging = false;
        let startTime = 0;
        let isScrollingInside = false;

        const scrollableArea = el.querySelector('.offcanvas-body') || el.querySelector('.offcanvas-list');

        el.addEventListener("touchstart", (e) => {
            startTime = Date.now();
            startPos = config.axis === "Y" ? e.touches[0].clientY : e.touches[0].clientX;
            
            isScrollingInside = false; 
            el.style.transition = "none";
        }, { passive: true });

        el.addEventListener("touchmove", (e) => {
            currentPos = config.axis === "Y" ? e.touches[0].clientY : e.touches[0].clientX;
            const diff = currentPos - startPos;

            if (scrollableArea) {
                const scrollTop = scrollableArea.scrollTop;
                
                if (diff < 0 || (diff > 0 && scrollTop > 0)) {
                    isScrollingInside = true;
                    return;
                }
            }

            if (Math.abs(diff) > 10 && !isScrollingInside) {
                isDragging = true;
                
                if (e.cancelable) e.preventDefault(); 

                if (diff > 0) el.style.transform = `${config.prop}(${diff}px)`;
            }
        }, { passive: false });

        el.addEventListener("touchend", () => {
            if (!isDragging) {
                isScrollingInside = false;
                return;
            }

            const diff = currentPos - startPos;
            const duration = Date.now() - startTime;
            const velocity = Math.abs(diff) / duration;

            el.style.transition = "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)";

            if (diff > 100 || (diff > 50 && velocity > 0.5)) {
                el.style.transform = `${config.prop}(105%)`;
                setTimeout(() => {
                    const instance = bootstrap.Offcanvas.getOrCreateInstance(el);
                    instance.hide();
                }, 150);
            } else {
                el.style.transform = "";
            }

            isDragging = false;
            isScrollingInside = false;
        });

        el.addEventListener("hidden.bs.offcanvas", () => {
            el.style.transform = "";
            el.style.transition = "";
        });
    }
};