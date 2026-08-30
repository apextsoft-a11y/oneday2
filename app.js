(function () {
    "use strict";

    const selectors = {
        grid: "categoriesGrid",
        state: "categoriesState",
        retry: "retryCategories",
        themeToggle: "themeToggle",
        themeColor: "meta[name='theme-color']"
    };

    function init() {
        initTheme();
        initImageProtection(document);
        renderCategories();
        bindCategoryEvents();
        bindRetryButton();

        if (window.OneDayModal && typeof window.OneDayModal.init === "function") {
            window.OneDayModal.init();
        }
    }

    function renderCategories() {
        const grid = document.getElementById(selectors.grid);
        const state = document.getElementById(selectors.state);
        const categories = Array.isArray(window.OneDayCategories) ? window.OneDayCategories : [];

        if (!grid) {
            return;
        }

        grid.setAttribute("aria-busy", "true");
        grid.replaceChildren();

        try {
            if (categories.length === 0) {
                showCategoryState(true);
                return;
            }

            const fragment = document.createDocumentFragment();

            categories.forEach(function (category) {
                fragment.appendChild(createCategoryCard(category));
            });

            grid.appendChild(fragment);
            grid.setAttribute("aria-busy", "false");

            if (state) {
                state.hidden = true;
            }
        } catch (error) {
            console.error("Kategori listesi hazırlanamadı:", error);
            showCategoryState(true);
        }
    }

    function createCategoryCard(category) {
        const button = document.createElement("button");
        button.className = "category-card";
        button.type = "button";
        button.dataset.categoryId = category.id;
        button.setAttribute("aria-label", `${category.title} kategorisini aç`);

        const content = document.createElement("span");
        content.className = "category-card-content";

        const art = document.createElement("span");
        art.className = "category-card-art";
        art.setAttribute("aria-hidden", "true");
        art.appendChild(createIcon(category.icon));

        const title = document.createElement("span");
        title.className = "category-card-title";
        title.textContent = category.title;

        content.append(art, title);
        button.appendChild(content);

        return button;
    }

    function bindCategoryEvents() {
        const grid = document.getElementById(selectors.grid);

        if (!grid) {
            return;
        }

        grid.addEventListener("click", function (event) {
            const card = event.target.closest(".category-card");

            if (!card || !grid.contains(card)) {
                return;
            }

            const categoryId = card.dataset.categoryId;

            if (window.OneDayModal && typeof window.OneDayModal.open === "function") {
                window.OneDayModal.open(categoryId, card);
            }
        });
    }

    function bindRetryButton() {
        const retry = document.getElementById(selectors.retry);

        if (!retry) {
            return;
        }

        retry.addEventListener("click", renderCategories);
    }

    function showCategoryState(show) {
        const grid = document.getElementById(selectors.grid);
        const state = document.getElementById(selectors.state);

        if (grid) {
            grid.setAttribute("aria-busy", "false");
        }

        if (state) {
            state.hidden = !show;
        }
    }

    function initTheme() {
        const toggle = document.getElementById(selectors.themeToggle);
        const storedTheme = safeStorageGet("oneDayTheme");
        const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";

        applyTheme(theme);

        if (!toggle) {
            return;
        }

        toggle.addEventListener("click", function () {
            const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
            const nextTheme = currentTheme === "light" ? "dark" : "light";

            applyTheme(nextTheme);
            safeStorageSet("oneDayTheme", nextTheme);
        });
    }

    function applyTheme(theme) {
        const normalizedTheme = theme === "light" ? "light" : "dark";
        const toggle = document.getElementById(selectors.themeToggle);
        const themeColor = document.querySelector(selectors.themeColor);

        document.documentElement.dataset.theme = normalizedTheme;

        if (toggle) {
            toggle.setAttribute("aria-pressed", String(normalizedTheme === "light"));
        }

        if (themeColor) {
            themeColor.setAttribute("content", normalizedTheme === "light" ? "#f6dfba" : "#130b07");
        }
    }

    function initImageProtection(root) {
        const scope = root || document;
        const images = Array.from(scope.querySelectorAll("img[data-safe-image]"));

        images.forEach(function (image) {
            protectImage(image);
        });
    }

    function protectImage(image) {
        if (!image || image.dataset.imageGuarded === "true") {
            return;
        }

        const holder = image.closest("[data-image-holder]") || image.parentElement;
        image.dataset.imageGuarded = "true";

        function markMissing() {
            image.hidden = true;

            if (holder) {
                holder.classList.remove("is-image-loading");
                holder.classList.add("is-image-missing");
            }
        }

        function markLoaded() {
            if (!image.naturalWidth || !image.naturalHeight) {
                markMissing();
                return;
            }

            image.hidden = false;

            if (holder) {
                holder.classList.remove("is-image-loading", "is-image-missing");
                holder.classList.add("is-image-ready");
            }
        }

        if (holder) {
            holder.classList.add("is-image-loading");
        }

        if (!image.getAttribute("src")) {
            markMissing();
            return;
        }

        image.addEventListener("error", markMissing);
        image.addEventListener("load", markLoaded);

        window.requestAnimationFrame(function () {
            if (image.complete) {
                markLoaded();
            }
        });
    }

    function createIcon(iconClass) {
        const icon = document.createElement("i");
        const classNames = String(iconClass || "fa-solid fa-utensils").split(" ").filter(Boolean);
        icon.classList.add.apply(icon.classList, classNames);
        return icon;
    }

    function safeStorageGet(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function safeStorageSet(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            return false;
        }

        return true;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.OneDayApp = {
        renderCategories,
        initImageProtection
    };
})();
