"use strict";

export const Search = ($element) => {
    const $inputSearch = $element.querySelector("[data-input-search]");
    const $searchbarFocus = $element.querySelector("[data-searchbar-focus]");
    const $searchbar = $element.querySelector("[data-searchbar]");
    const $value = $element.querySelector("[data-value]");

    $inputSearch.addEventListener("focus", () => $element.classList.add("active"));

    $inputSearch.addEventListener("input", (e) => {
        if (e.target.value.length >= 1) {
            $searchbarFocus.setAttribute("hidden", "");
            $searchbar.removeAttribute("hidden");
        } else {
            $searchbarFocus.removeAttribute("hidden");
            $searchbar.setAttribute("hidden", "");
        }

        $value.textContent = e.target.value;
    });

    document.addEventListener("click", (e) => {
        if (!$element.contains(e.target)) {
            $element.classList.remove("active");

            $searchbar.setAttribute("hidden", "");
            $searchbarFocus.removeAttribute("hidden");
        }
    });
};