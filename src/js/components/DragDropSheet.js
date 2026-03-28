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
        let startTime = 0;

        const scrollContainer = el.querySelector('.offcanvas-list') || el;

        el.addEventListener("touchstart", (e) => {
            startTime = Date.now();
            startPos = config.axis === "Y" ? e.touches[0].clientY : e.touches[0].clientX;
            currentPos = startPos;
            isDragging = false;
        }, { passive: true });

        el.addEventListener("touchmove", (e) => {
            currentPos = config.axis === "Y" ? e.touches[0].clientY : e.touches[0].clientX;
            let diff = currentPos - startPos;

            if (config.axis === "Y") {
                if (config.dir === 1 && scrollContainer.scrollTop > 0) return;
                if (config.dir === -1 && (scrollContainer.scrollTop + scrollContainer.offsetHeight < scrollContainer.scrollHeight)) return; // للأعلى
            }

            if (Math.abs(diff) > 5) {
                isDragging = true;
                
                const isCorrectDirection = (config.dir === 1 && diff > 0) || (config.dir === -1 && diff < 0);
                
                if (isCorrectDirection) {
                    el.style.transition = "none";
                    el.style.transform = `${config.prop}(${diff}px)`;
                }
            }
        }, { passive: true });

        el.addEventListener("touchend", () => {
            if (!isDragging) return;

            let diff = currentPos - startPos;

            const threshold = 100;
            const duration = Date.now() - startTime;

            el.style.transition = "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)";

            const isSwipeFast = Math.abs(diff) > 50 && duration < 250;
            const isSwipeFar = Math.abs(diff) > threshold;
            const isCorrectDirection = (config.dir === 1 && diff > 0) || (config.dir === -1 && diff < 0);

            if (isCorrectDirection && (isSwipeFar || isSwipeFast)) {
                el.style.transform = `${config.prop}(${config.dir * 100}%)`;
                setTimeout(() => {
                    const instance = bootstrap.Offcanvas.getOrCreateInstance(el);
                    instance.hide();
                }, 200);
            } else
                el.style.transform = "";

            isDragging = false;
        });

        el.addEventListener("hidden.bs.offcanvas", () => {
            el.style.transform = "";
            el.style.transition = "";
        });
    }
};