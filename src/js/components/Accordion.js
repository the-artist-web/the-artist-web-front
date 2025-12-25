"use strict";

export const Accordion = ($element) => {
    const $accordions = $element.querySelectorAll("[data-accordions]");
    const $accordionsBodyAll = $element.querySelectorAll("[data-accordion-body]");
    const $arrowAll = $element.querySelectorAll("[data-arrow]");
    const $togglerAccordionAll = $element.querySelectorAll("[data-toggler-accordion]");

    $accordions.forEach($elem => {
        const $togglerAccordion = $elem.querySelector("[data-toggler-accordion]");
        const $arrow = $elem.querySelector("[data-arrow]");
        const $accordionBody = $elem.querySelector("[data-accordion-body]");

        $togglerAccordion.addEventListener("click", () => {
            $accordionBody.classList.toggle("active");
            
            if ($accordionBody.classList.contains("active")) {
                $accordionsBodyAll.forEach($accordion => {
                    if ($accordion !== $accordionBody) {
                        $accordion.classList.remove("active");
                        $accordion.style.height = "0px";

                        $arrowAll.forEach($elem => $elem.classList.remove("active"));
                        $togglerAccordionAll.forEach($elem => $elem.classList.remove("active"));
                    }
                });

                $accordionBody.style.height = $accordionBody.scrollHeight + "px";
                $arrow.classList.add("active");
                $togglerAccordion.classList.add("active");
            } else {
                $accordionBody.style.height = "0px";
                $arrow.classList.remove("active");
                $togglerAccordion.classList.remove("active");
            }
        });
    });
};