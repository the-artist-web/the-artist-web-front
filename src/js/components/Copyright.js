'use strict';

export const Copyright = ($elements) => {
    $elements.forEach(elem => {
        let year = new Date().getFullYear();

        elem.innerHTML = "";
        elem.innerHTML = `Copyright &copy; 2025 - ${year} <strong>${elem.dataset.copyright}</strong>, Inc.`;
    });
};