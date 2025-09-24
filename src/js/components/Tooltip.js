'use strict';

export const Tooltip = ($elements) => 
{
    $elements.forEach($elem => {
        const tooltip = bootstrap.Tooltip.getOrCreateInstance($elem);

        $elem.addEventListener("click", () => {
            tooltip.show();
            tooltip.hide();
        });
    });
}