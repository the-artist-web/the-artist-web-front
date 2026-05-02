"use strict";

export const Markdown = ($element) => {
    const $tables = $element.querySelectorAll("table");

    $tables.forEach(($table) => {
        if ($table.parentElement.classList.contains("table-overflow")) return;

        const $wrapper = document.createElement("div");

        $wrapper.className = "table-overflow";

        $table.parentNode.insertBefore($wrapper, $table);

        $wrapper.appendChild($table);
    });
};