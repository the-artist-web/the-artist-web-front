"use strict";

export const IconBtnLike = ($element) => {
    // Tooltip
    const $tooltip = new bootstrap.Tooltip($element, {
            trigger: "hover focus",
            delay: 0
        });

    const $spinner = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a9 9 0 1 0 9 9" /></svg>`;

    $element.addEventListener("click", () => {
        $tooltip.hide();
        
        if ($element.dataset.iconBtnsLike === "false") {
            $element.innerHTML = $spinner;

            setTimeout(() => {
                $element.dataset.iconBtnsLike = "true";
    
                $tooltip.setContent({ ".tooltip-inner": "I Dislike This" });
    
                $element.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-inverse icon-tabler-heart text-error"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
    
                    <div class="state-layer"></div>
                `;
            }, 500);
        } else {
            $element.innerHTML = $spinner;

            setTimeout(() => {
                $element.dataset.iconBtnsLike = "false";
    
                $tooltip.setContent({ ".tooltip-inner": "I like This" });
    
                $element.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
    
                    <div class="state-layer"></div>
                `;
            }, 500);
        }
    });
};