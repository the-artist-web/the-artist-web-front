"use strict";

export const UploaderMediaGallery = ($element) => {
    const $inputFileMultiple = $element.querySelector("input[type='file'][multiple]");
    const $mediaGalleryList = $element.querySelector("[data-media-gallery-list]");

    const isArabic = document.documentElement.getAttribute("lang") === "ar";
    const deleteText = isArabic ? "حذف" : "Remove";

    const toggleGalleryVisibility = () => {
        if ($mediaGalleryList.children.length > 0)
            $mediaGalleryList.removeAttribute("hidden");
        else
            $mediaGalleryList.setAttribute("hidden", "");
    };

    $inputFileMultiple.addEventListener("change", (e) => {
        const files = Array.from(e.target.files);

        files.forEach((file) => {
            if (!file.type.startsWith("image/")) return;

            const reader = new FileReader();

            reader.onload = (event) => {
                const imageUrl = event.target.result;
                const $cardItem = document.createElement("li");

                $cardItem.innerHTML = `
                    <div class="card">
                        <div class="figure">
                            <div class="icon-big">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-photo"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>
                            </div>
                            
                            <img src="${imageUrl}" alt="${file.name}" loading="lazy" class="img-card img-cover" />
                            <input type="text" name="media-gallery[]" value="${file.name}" hidden />
                        </div>

                        <button type="button" class="icon-btn error extra-small" data-bs-toggle="tooltip" data-bs-title="${deleteText}" data-bs-placement="bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            <div class="state-layer"></div>
                        </button>
                    </div>
                `;

                const $deleteBtn = $cardItem.querySelector(".icon-btn.error");

                if (window.bootstrap && window.bootstrap.Tooltip)
                    new bootstrap.Tooltip($deleteBtn, {
                            trigger: "hover",
                            delay: { show: 600, hide: 0 }
                        });

                $deleteBtn.addEventListener("click", () => {
                    const tooltipInstance = bootstrap.Tooltip.getInstance($deleteBtn);
                    if (tooltipInstance) tooltipInstance.dispose();
                    
                    $cardItem.remove();
                    toggleGalleryVisibility();
                });

                $mediaGalleryList.prepend($cardItem);
                toggleGalleryVisibility();
            };

            reader.readAsDataURL(file);
        });

        $inputFileMultiple.value = "";
    });
};