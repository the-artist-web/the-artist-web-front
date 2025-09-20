'use strict';

const htmlDir = document.documentElement;

const ToggleDirWeb = (value) => {    
    if (value === "en") {
        htmlDir.setAttribute("dir", "ltr");
        localStorage.setItem("dir", "ltr");
    } else {
        htmlDir.setAttribute("dir", "rtl");
        localStorage.setItem("dir", "rtl");
    }
};

export const Languages = ($elements) => {
    $elements.forEach(elem => elem.addEventListener("click", () => ToggleDirWeb(elem.dataset.languages)));
};

htmlDir.setAttribute("dir", localStorage.dir);