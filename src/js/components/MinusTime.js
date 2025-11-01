"use strict";

export const MinusTime = ($element) => {
    let [minutes, seconds] = $element.dataset.minusTimes.split(":").map(Number);

    const updateTimer = () => {
        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes < 0) {
            clearInterval(interval);
            $element.textContent = "00:00";
            return;
        }

        const m = String(minutes).padStart(2, "0");
        const s = String(seconds).padStart(2, "0");
        
        $element.textContent = `${m}:${s}`;
    };

    const interval = setInterval(updateTimer, 1000);
};