export const AddSkills = ($element) => {
    const $list = $element.querySelector("[data-skills-list]");
    const $input = $element.querySelector("[data-input-add-skills]");

    /**
     * Get current language
     */
    const lang = document.documentElement.lang?.toLowerCase() || "en";

    const translations = {
        remove: {
            ar: "حذف المهارة",
            en: "Remove Skill",
        },
    };

    /**
     * Toggle Skills List Visibility
     */
    const toggleListVisibility = () => {
        const hasItems = $list.querySelectorAll("li").length > 0;

        $list.toggleAttribute("hidden", !hasItems);
    };

    /**
     * Check if skill already exists
     */
    const skillExists = (value) => {
        return [...$list.querySelectorAll("input[name='skills[]']")]
            .some(($input) => $input.value.toLowerCase() === value.toLowerCase());
    };

    /**
     * Create Skill Item
     */
    const createSkillItem = (skillName) => {
        const value = skillName.trim().toLowerCase();

        const $li = document.createElement("li");

        $li.innerHTML = `
            <span class="btn secondary extra-small p-end-0 rounded-pill" style="gap: var(--spacing-1) !important;">
                <input type="text" name="skills[]" value="${value}" hidden />

                <p class="text-body-small line-clamp line-clamp-1">${skillName}</p>

                <button
                    type="button"
                    class="icon-btn text extra-small"
                    data-bs-toggle="tooltip"
                    data-bs-title="${translations.remove[lang] || translations.remove.en}"
                    data-bs-placement="bottom"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>

                    <div class="state-layer"></div>
                </button>
            </span>
        `;

        const $removeBtn = $li.querySelector("button");

        /**
         * Remove Skill
         */
        $removeBtn.addEventListener("click", () => {
            const tooltip = bootstrap.Tooltip.getInstance($removeBtn);

            if (tooltip) {
                tooltip.dispose();
            }

            $li.remove();

            toggleListVisibility();
        });

        /**
         * Bootstrap Tooltip
         */
        new bootstrap.Tooltip($removeBtn);

        $list.appendChild($li);

        toggleListVisibility();
    };

    /**
     * Init Existing Remove Buttons
     */
    const initRemoveButtons = () => {
        const $buttons = $list.querySelectorAll("button");

        $buttons.forEach(($button) => {
            /**
             * Set translated tooltip
             */
            $button.setAttribute(
                "data-bs-title",
                translations.remove[lang] || translations.remove.en
            );

            /**
             * Bootstrap Tooltip
             */
            new bootstrap.Tooltip($button);

            /**
             * Prevent duplicate listeners
             */
            if ($button.dataset.initialized === "true") return;

            $button.dataset.initialized = "true";

            /**
             * Remove Existing Skill
             */
            $button.addEventListener("click", () => {
                const tooltip = bootstrap.Tooltip.getInstance($button);

                if (tooltip) {
                    tooltip.dispose();
                }

                $button.closest("li")?.remove();

                toggleListVisibility();
            });
        });
    };

    /**
     * Add Skill On Enter
     */
    $input.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;

        event.preventDefault();

        const value = $input.value.trim();

        if (!value) return;

        if (skillExists(value)) {
            $input.value = "";
            return;
        }

        createSkillItem(value);

        $input.value = "";
    });

    /**
     * Init Existing Buttons
     */
    initRemoveButtons();

    /**
     * Initial Visibility
     */
    toggleListVisibility();
};