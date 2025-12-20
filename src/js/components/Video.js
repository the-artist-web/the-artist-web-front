"use strict";

export const VideoControl = ($element) => {
    const $video = $element.querySelector("[data-video]");
    const $play = $element.querySelector("[data-play]");
    const $stop = $element.querySelector("[data-stop]");
    const $audio = $element.querySelector("[data-audio]");
    const $muted = $element.querySelector("[data-muted]");

    $video.addEventListener("click", () => {
        if ($video.paused) {
            $video.play();

            $play.style.display = "none";
            $stop.style.display = "flex";
        } else {
            $video.pause();
            
            $play.style.display = "flex";
            $stop.style.display = "none";
        }
    });

    $play.addEventListener("click", () => {
        $video.play();

        $play.style.display = "none";
        $stop.style.display = "flex";
    });

    $stop.addEventListener("click", () => {
        $video.pause();

        $play.style.display = "flex";
        $stop.style.display = "none";
    });

    $audio.addEventListener("click", () => {
        $video.muted = true;

        $audio.style.display = "none";
        $muted.style.display = "flex";
    });

    $muted.addEventListener("click", () => {
        $video.muted = false;

        $audio.style.display = "flex";
        $muted.style.display = "none";
    });
};