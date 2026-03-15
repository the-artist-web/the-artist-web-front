"use strict";

export const Search = ($element) => {
    const $inputSearch = $element.querySelector("[data-input-search]");
    const $searchContainer = $element.querySelector("[data-search-container]");
    const $headerItems = $element.querySelectorAll("[data-header-items]");
    const $searchOverlay = $element.querySelector("[data-search-overlay]");
    const $searchBar = $element.querySelector("[data-searchbar]");
    const $openSearch = $element.querySelector("[data-open-search]");
    const $searchFor = $element.querySelector("[data-search-for]");
    const $recentSearches = $element.querySelector("[data-recent-searches]");
    const $clearAllRecentSearches = $element.querySelector("[data-clear-all-recent-searches]");

    $openSearch.addEventListener("click", (e) => {
        e.stopPropagation()

        $headerItems.forEach($elem => $elem.style.display = "none");
        $searchContainer.classList.add("active");
        setTimeout(() => $inputSearch.focus(), 50);
    });

    $inputSearch.addEventListener("focus", () => {
        if ($inputSearch.value.length > 0) {
            $searchBar.classList.add("active");
            $searchOverlay.classList.remove("active");
        } else {
            $searchOverlay.classList.add("active");
            $searchBar.classList.remove("active");
        }
    });

    $inputSearch.addEventListener("input", (e) => {
        $searchFor.innerHTML = `“ ${e.target.value} “`

        if (e.target.value.length >= 1) {
            $searchBar.classList.add("active");
            $searchOverlay.classList.remove("active");
        } else {
            $searchBar.classList.remove("active");
        }
    });
    
    document.addEventListener("click", (e) => {
        const isOutside =  !$searchContainer.contains(e.target) && !$openSearch.contains(e.target);

        if (isOutside) {
            $searchContainer.classList.remove("active");
            $searchBar.classList.remove("active");
            $searchOverlay.classList.remove("active");
            $headerItems.forEach($elem => $elem.style.display = "");
        }
    });

    $clearAllRecentSearches.addEventListener("click", () => $recentSearches.style.display = "none");
};