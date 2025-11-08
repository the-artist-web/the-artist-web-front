"use strict";

import { addEventOnElements } from "../utils.js";

export const Tab = ($element) => {
    const $btnTabs = $element.querySelectorAll("[data-btn-tabs]");

    addEventOnElements($btnTabs, "click", function (e, $elem) {
        const $tabId = document.querySelector(`[data-tabs-id="${$elem.dataset.btnTabs}"]`);

        $element.querySelectorAll("[data-tabs-id]").forEach($elemTabId => {
            $elemTabId.style.height = "0px";

            $elemTabId.classList.remove("active");
        });
        
        $btnTabs.forEach($elemBtn => $elemBtn.classList.remove("active"));

        $tabId.classList.add("active");
        $tabId.style.height = $tabId.scrollHeight + "px";

        $elem.classList.add("active");
    });
};