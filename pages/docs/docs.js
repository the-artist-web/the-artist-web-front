"use strict";

/**
 * ScrollSPY
 */
const $sections = document.querySelectorAll("[data-scrollspy-sections]");
const $navLinks = document.querySelectorAll("[data-scrollspy-links]");

const updateScrollspy = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    $sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            $navLinks.forEach((link) => link.classList.remove("active"));

            const sectionId = section.getAttribute("id");
            const activeLink = document.querySelector(`[data-scrollspy-links][href="#${sectionId}"]`);
            
            if (activeLink) activeLink.classList.add("active");
        }
    });
};

window.addEventListener("scroll", updateScrollspy);

$navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        $navLinks.forEach((link) => link.classList.remove("active"));

        link.classList.add("active");
    });
});

updateScrollspy();