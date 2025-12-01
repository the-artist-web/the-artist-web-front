"use strict";

export const AutoPlayVideo = ($element) => {
    const $videoControl = $element.closest("[data-videos-control]");
    const $video = $videoControl.querySelector("[data-video]");
    const $play = $videoControl.querySelector("[data-play]");
    const $stop = $videoControl.querySelector("[data-stop]");
    const $audio = $videoControl.querySelector("[data-audio]");
    const $muted = $videoControl.querySelector("[data-muted]");

    $element.muted = true;
    $element.loop = true;

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