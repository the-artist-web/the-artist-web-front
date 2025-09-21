'use strict';

const bodyLoad = document.body;

export const StartLoad = ($element, $imgLoad) => {
    setTimeout(() => {
        $element.classList.add("active");
        $imgLoad.classList.add("active");
        bodyLoad.classList.add("load");
    }, 800);
};