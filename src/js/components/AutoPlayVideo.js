"use strict";

export const AutoPlayVideo = ($element) => {
    const $videoControl = $element.closest("[data-videos-control]");
    const $play = $videoControl.querySelector("[data-play]");
    const $stop = $videoControl.querySelector("[data-stop]");

    $element.muted = true;
    $element.loop = true;

    let soundActivated = false;

    const enableSound = () => {
        if (!soundActivated) {
            $element.muted = false;
            soundActivated = true;

            window.removeEventListener("click", enableSound);
        }
    };

    window.addEventListener("click", enableSound);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $element.play().catch(err => console.log('Video autoplay blocked', err));

                $play.style.display = "none";
                $stop.style.display = "flex";
            } else {
                $element.pause();

                $play.style.display = "flex";
                $stop.style.display = "none";
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe($element);
};
