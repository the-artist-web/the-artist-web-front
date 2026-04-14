"use strict";

export const UploadFile = ($element) => {
    const $inputFile = $element.querySelector("input[type='file']");
    const $livePreviewFile = $element.querySelector("[data-live-preview-file]");

    const getTranslation = () => {
        const isArabic = document.documentElement.lang === "ar";
        return {
            deleteLabel: isArabic ? "حذف" : "Delete"
        };
    };

    const formatBytes = (bytes, decimals = 1) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
    };

    $inputFile.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const fileName = file.name;
            const fileSize = formatBytes(file.size);
            const { deleteLabel } = getTranslation();

            const previewHtml = `
                <li class="card outline">
                    <div class="card-body p-4">
                        <div class="wrapper-between">
                            <div class="flex" style="gap: var(--spacing-3);">
                                <div class="icon-btn tonal-success medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-zip"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M16 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" /><path d="M12 15v6" /><path d="M5 15h3l-3 6h3" /></svg>
                                </div>

                                <div class="wrapper-content">
                                    <p class="text-body-large line-clamp line-clamp-1">${fileName}</p>
                                    <p class="text-body-medium text-on-background-variant">${fileSize}</p>
                                </div>
                            </div>

                            <button type="button" class="icon-btn text-error extra-small" 
                                    data-bs-toggle="tooltip" 
                                    data-bs-title="${deleteLabel}" 
                                    data-bs-placement="bottom" 
                                    data-delete-preview>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                
                                <div class="state-layer"></div>
                            </button>
                        </div>
                    </div>

                    <input type="text" name="file_project" value="${fileName}" hidden />
                </li>`;

            $livePreviewFile.innerHTML = previewHtml;
            $livePreviewFile.removeAttribute("hidden");

            const $btnDelete = $livePreviewFile.querySelector("[data-delete-preview]");
            if (window.bootstrap && window.bootstrap.Tooltip) {
                new bootstrap.Tooltip($btnDelete);
            }
        }
    });

    $livePreviewFile.addEventListener("click", (e) => {
        const deleteBtn = e.target.closest("[data-delete-preview]");
        if (deleteBtn) {
            const tooltipInstance = bootstrap.Tooltip.getInstance(deleteBtn);
            if (tooltipInstance) {
                tooltipInstance.hide();
                tooltipInstance.dispose();
            }

            $livePreviewFile.innerHTML = "";
            $livePreviewFile.setAttribute("hidden", "");
            $inputFile.value = "";
        }
    });
};