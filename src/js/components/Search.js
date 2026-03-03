"use strict";

export const Search = ($element) => {
    const $inputSearch = $element.querySelector("[data-input-search]");
    const $searchContainer = $element.querySelector("[data-search-container]");
    const $headerItems = $element.querySelectorAll("[data-header-items]");
    const $searchBar = $element.querySelector("[data-searchbar]");
    const $openSearch = $element.querySelector("[data-open-search]");

    $openSearch.addEventListener("click", (e) => {
        e.stopPropagation()

        $headerItems.forEach($elem => $elem.style.display = "none");
        $searchContainer.classList.add("active");
        setTimeout(() => $inputSearch.focus(), 50);
    });

    $inputSearch.addEventListener("input", (e) => {
        if (e.target.value.length >= 2)
            $searchBar.classList.add("active");
        else
            $searchBar.classList.remove("active");
    });

    document.addEventListener("click", (e) => {
        const isOutside =  !$searchContainer.contains(e.target) && !$openSearch.contains(e.target);

        if (isOutside) {
            $searchContainer.classList.remove("active");
            $searchBar.classList.remove("active");
            $headerItems.forEach($elem => $elem.style.display = "");
        }
    });
};