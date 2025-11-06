"use strict";

export const NavigationRail = ($toggler, $navigationRail, $main) => {
    if (localStorage.getItem("navigation_rail") === "active") {
        $navigationRail.classList.add("active");
        $main.classList.add("active");

        $toggler.setAttribute("data-tooltips", "Close");

        $toggler.innerHTML = `
            <div class="arrow-dir">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-indent-decrease"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6l-7 0" /><path d="M20 12l-9 0" /><path d="M20 18l-7 0" /><path d="M8 8l-4 4l4 4" /></svg>
            </div>

            <div class="state-layer"></div>
        `;
    } else {
        $navigationRail.classList.remove("active");
        $main.classList.remove("active");

        $toggler.setAttribute("data-tooltips", "Open");

        $toggler.innerHTML = `
            <div class="arrow-dir">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-indent-increase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6l-11 0" /><path d="M20 12l-7 0" /><path d="M20 18l-11 0" /><path d="M4 8l4 4l-4 4" /></svg>
            </div>

            <div class="state-layer"></div>
        `;
    }

    $toggler.addEventListener("click", () => {
        const isActive = $navigationRail.classList.toggle("active");
        
        $main.classList.toggle("active");
        
        $toggler.innerHTML = "";

        if (isActive) {
            $toggler.innerHTML = `
                <div class="arrow-dir">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-indent-decrease"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6l-7 0" /><path d="M20 12l-9 0" /><path d="M20 18l-7 0" /><path d="M8 8l-4 4l4 4" /></svg>
                </div>
    
                <div class="state-layer"></div>
            `;

            $toggler.setAttribute("data-tooltips", "Close");
    
            localStorage.setItem("navigation_rail", "active");
        } else {
            $toggler.innerHTML = `
                <div class="arrow-dir">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-indent-increase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6l-11 0" /><path d="M20 12l-7 0" /><path d="M20 18l-11 0" /><path d="M4 8l4 4l-4 4" /></svg>
                </div>
    
                <div class="state-layer"></div>
            `;

            $toggler.setAttribute("data-tooltips", "Open");
    
            localStorage.removeItem("navigation_rail");
        }
    });
};