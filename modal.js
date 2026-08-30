(function () {
    "use strict";

    const state = {
        initialized: false,
        activeTrigger: null,
        lastCategoryId: null
    };

    let modal;
    let modalTitle;
    let modalDescription;
    let modalIcon;
    let modalProducts;
    let modalLoading;
    let modalEmpty;
    let modalClose;

    function init() {
        if (state.initialized) {
            return;
        }

        modal = document.getElementById("productModal");
        modalTitle = document.getElementById("modalTitle");
        modalDescription = document.getElementById("modalDescription");
        modalIcon = document.getElementById("modalCategoryIcon");
        modalProducts = document.getElementById("modalProducts");
        modalLoading = document.getElementById("modalLoading");
        modalEmpty = document.getElementById("modalEmpty");
        modalClose = document.getElementById("modalClose");

        if (!modal || !modalTitle || !modalProducts) {
            return;
        }

        modal.addEventListener("click", handleModalClick);
        document.addEventListener("keydown", handleDocumentKeydown);

        state.initialized = true;
    }

    function open(categoryId, trigger) {
        init();

        if (!modal) {
            return;
        }

        const category = getCategory(categoryId);
        const productList = getProducts(categoryId);

        state.activeTrigger = trigger || document.activeElement;
        state.lastCategoryId = categoryId;

        setLoading(false);
        renderHeader(category, productList.length);
        renderProducts(productList, category);

        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        window.requestAnimationFrame(function () {
            if (modalClose) {
                modalClose.focus();
            }
        });
    }

    function close() {
        if (!isOpen()) {
            return;
        }

        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");

        if (state.activeTrigger && typeof state.activeTrigger.focus === "function") {
            state.activeTrigger.focus({ preventScroll: true });
        }
    }

    function isOpen() {
        return Boolean(modal && modal.getAttribute("aria-hidden") === "false");
    }

    function renderHeader(category, productCount) {
        const safeCategory = category || {
            title: "MENÜ",
            icon: "fa-solid fa-utensils"
        };

        modalTitle.textContent = safeCategory.title;
        modalDescription.textContent = productCount > 0
            ? `${productCount} örnek ürün listeleniyor`
            : "Bu kategori için ürün bekleniyor";

        if (modalIcon) {
            modalIcon.replaceChildren(createIcon(safeCategory.icon));
        }
    }

    function renderProducts(productList, category) {
        modalProducts.replaceChildren();

        if (!Array.isArray(productList) || productList.length === 0) {
            modalEmpty.hidden = false;
            return;
        }

        modalEmpty.hidden = true;

        const fragment = document.createDocumentFragment();

        productList.forEach(function (product) {
            fragment.appendChild(createProductCard(product, category));
        });

        modalProducts.appendChild(fragment);
    }

    function createProductCard(product, category) {
        const card = document.createElement("article");
        card.className = "product-card";

        const media = document.createElement("div");
        media.className = "product-media";
        media.dataset.imageHolder = "";

        const fallback = document.createElement("span");
        fallback.className = "product-media-fallback";
        fallback.setAttribute("aria-hidden", "true");
        fallback.appendChild(createIcon(category && category.icon ? category.icon : "fa-solid fa-utensils"));

        const imagePath = product && typeof product.image === "string" ? product.image.trim() : "";
        if (imagePath) {
            const image = document.createElement("img");
            image.className = "product-image";
            image.alt = `${product.name || "Ürün"} görseli`;
            image.loading = "lazy";
            image.decoding = "async";
            image.dataset.safeImage = "";
            protectImage(image, media);
            image.src = imagePath;
            media.append(image);
        } else {
            media.classList.add("is-image-missing");
        }

        media.append(fallback);

        const info = document.createElement("div");
        info.className = "product-info";

        const title = document.createElement("h3");
        title.textContent = product && product.name ? product.name : "Ürün";

        const description = document.createElement("p");
        description.textContent = product && product.description
            ? product.description
            : "Ürün açıklaması yakında eklenecek.";

        info.append(title, description);

        const price = document.createElement("strong");
        price.className = "product-price";
        price.textContent = product && product.price ? product.price : "Fiyat sorunuz";

        card.append(media, info, price);
        return card;
    }

    function protectImage(image, holder) {
        function markMissing() {
            image.hidden = true;
            holder.classList.add("is-image-missing");
        }

        function markLoaded() {
            if (!image.naturalWidth || !image.naturalHeight) {
                markMissing();
                return;
            }

            image.hidden = false;
            holder.classList.remove("is-image-missing");
        }

        image.addEventListener("error", markMissing);
        image.addEventListener("load", markLoaded);

        window.requestAnimationFrame(function () {
            if (image.complete) {
                markLoaded();
            }
        });
    }

    function setLoading(isLoading) {
        if (modalLoading) {
            modalLoading.hidden = !isLoading;
        }
    }

    function getCategory(categoryId) {
        const categories = Array.isArray(window.OneDayCategories) ? window.OneDayCategories : [];
        return categories.find(function (category) {
            return category.id === categoryId;
        });
    }

    function getProducts(categoryId) {
        const products = window.OneDayProducts || {};
        const productList = products[categoryId];
        return Array.isArray(productList) ? productList : [];
    }

    function createIcon(iconClass) {
        const icon = document.createElement("i");
        const classNames = String(iconClass || "fa-solid fa-utensils").split(" ").filter(Boolean);
        icon.classList.add.apply(icon.classList, classNames);
        return icon;
    }

    function handleModalClick(event) {
        if (event.target.closest("[data-modal-close]")) {
            close();
        }
    }

    function handleDocumentKeydown(event) {
        if (!isOpen()) {
            return;
        }

        if (event.key === "Escape") {
            event.preventDefault();
            close();
            return;
        }

        if (event.key === "Tab") {
            trapFocus(event);
        }
    }

    function trapFocus(event) {
        const focusable = getFocusableElements();

        if (focusable.length === 0) {
            event.preventDefault();
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
            return;
        }

        if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function getFocusableElements() {
        return Array.from(modal.querySelectorAll([
            "a[href]",
            "button:not([disabled])",
            "textarea:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            "[tabindex]:not([tabindex='-1'])"
        ].join(","))).filter(function (element) {
            return element.offsetParent !== null;
        });
    }

    window.OneDayModal = {
        init,
        open,
        close,
        isOpen
    };
})();
