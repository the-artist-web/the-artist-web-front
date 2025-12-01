"use strict";

export const AutoPlayVideo = ($element) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $element.play().catch(err => console.log('Video autoplay blocked', err));
            } else {
                $element.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe($element);
};