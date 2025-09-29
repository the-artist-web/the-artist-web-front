'use strict';

const dirCopyright = document.documentElement.dir;

export const Copyright = ($elements) => {
    $elements.forEach(elem => {
        let year = new Date().getFullYear();

        elem.innerHTML = "";
        elem.innerHTML = dirCopyright === "ltr"
            ? `Copyright &copy; 2025 - ${year} <strong>${elem.dataset.copyright}</strong>, Inc.`
            : `حقوق الطبع والنشر 2025 - ${year} <strong>${elem.dataset.copyright}</strong>، شركة.`;
    });
};