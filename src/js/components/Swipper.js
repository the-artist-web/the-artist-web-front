"use strict";

export const Swipper = ($element) => {
    const $swipperList = $element.querySelector("[data-swipper-list]");
    const $swipperNext = $element.querySelector("[data-swipper-next]");
    const $swipperPrev = $element.querySelector("[data-swipper-prev]");
    const dir = document.documentElement.dir;

    const amount = 500;

    const updateButtons = () => {
        const scrollLeft = Math.abs($swipperList.scrollLeft);
        const maxScroll = $swipperList.scrollWidth - $swipperList.clientWidth;

        if (scrollLeft <= 5)
            $swipperPrev.style.display = "none";
        else
            $swipperPrev.style.display = "";

        if (scrollLeft >= maxScroll - 5)
            $swipperNext.style.display = "none";
        else
            $swipperNext.style.display = "";
    };

    $swipperNext.addEventListener("click", () => $swipperList.scrollBy({
            left: dir === "ltr" ? amount : -amount,
            behavior: "smooth",
        }));

    $swipperPrev.addEventListener("click", () => $swipperList.scrollBy({
            left: dir === "ltr" ? -amount : amount,
            behavior: "smooth",
        }));

    $swipperList.addEventListener("scroll", updateButtons);

    updateButtons();
};