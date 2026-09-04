(() => {
    "use strict";
    const page = document.body?.dataset.page || "";
    const isHome = page === "home1" || page === "home2";
    const active = (name) => (page === name ? " active" : "");
    const header = /* HTML */ `<a class="skip-link" href="#main">Skip to content</a>
        <header class="site-header">
            <div class="container nav-wrap">
                <a class="brand" href="index.html" aria-label="Sweet Crumbs home"
                    ><span class="brand-mark">SC</span
                    ><span class="brand-copy"
                        ><strong>Sweet Crumbs</strong><small>Bakery &amp; Mithai</small></span
                    ></a
                >
                <nav class="desktop-nav" aria-label="Main navigation">
                    <div class="dropdown" data-dropdown>
                        <button
                            class="dropdown-toggle${isHome ? " active" : ""}"
                            aria-expanded="false"
                        >
                            Home <i class="bi bi-chevron-down" aria-hidden="true"></i>
                        </button>
                        <div class="dropdown-menu">
                            <a href="index.html">Home Page 1</a
                            ><a href="index-2.html">Home Page 2</a>
                        </div>
                    </div>
                    <a class="nav-link${active("about")}" href="about.html">About</a
                    ><a class="nav-link${active("products")}" href="products.html">Products</a
                    ><a class="nav-link${active("gifts")}" href="festive-gift-boxes.html"
                        >Festive Gift Boxes</a
                    ><a class="nav-link${active("bulk")}" href="bulk-orders.html">Bulk Orders</a
                    ><a class="nav-link${active("contact")}" href="contact.html">Contact</a>
                </nav>
                <div class="header-actions">
                    <button class="icon-btn" data-theme-toggle aria-label="Use dark theme">
                        <i class="bi bi-moon" aria-hidden="true"></i></button
                    ><button
                        class="icon-btn"
                        data-direction-toggle
                        aria-label="Switch to right-to-left layout"
                    >
                        <i class="bi bi-text-right" aria-hidden="true"></i></button
                    ><a class="btn btn-primary header-cta" href="login.html">Login</a
                    ><button
                        class="menu-btn"
                        data-menu
                        aria-expanded="false"
                        aria-controls="mobile-nav"
                        aria-label="Open menu"
                    >
                        <i class="bi bi-list" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <nav
                class="mobile-nav"
                id="mobile-nav"
                aria-label="Mobile navigation"
                aria-hidden="true"
            >
                <div class="mobile-nav-header">
                    <a class="brand" href="index.html" aria-label="Sweet Crumbs home">
                        <span class="brand-mark">SC</span>
                        <span class="brand-copy">
                            <strong>Sweet Crumbs</strong>
                            <small>Bakery &amp; Mithai</small>
                        </span>
                    </a>
                    <button class="mobile-nav-close" data-menu-close aria-label="Close menu">
                        <i class="bi bi-x-lg" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="mobile-nav-links">
                    <button
                        class="mobile-home-toggle${isHome ? " active" : ""}"
                        data-mobile-home
                        aria-expanded="false"
                        aria-controls="mobile-home-links"
                    >
                        <i class="bi bi-house-door" aria-hidden="true"></i>
                        <span>Home</span>
                        <i class="bi bi-chevron-down mobile-home-chevron" aria-hidden="true"></i>
                    </button>
                    <div class="mobile-submenu" id="mobile-home-links">
                        <a class="${active("home1")}" href="index.html">
                            <i class="bi bi-house" aria-hidden="true"></i>
                            <span>Home Page 1</span>
                        </a>
                        <a class="${active("home2")}" href="index-2.html">
                            <i class="bi bi-stars" aria-hidden="true"></i>
                            <span>Home Page 2</span>
                        </a>
                    </div>
                    <a class="${active("about")}" href="about.html">
                        <i class="bi bi-info-circle" aria-hidden="true"></i>
                        <span>About</span>
                    </a>
                    <a class="${active("products")}" href="products.html">
                        <i class="bi bi-grid" aria-hidden="true"></i>
                        <span>Products</span>
                    </a>
                    <a class="${active("gifts")}" href="festive-gift-boxes.html">
                        <i class="bi bi-gift" aria-hidden="true"></i>
                        <span>Festive Gift Boxes</span>
                    </a>
                    <a class="${active("bulk")}" href="bulk-orders.html">
                        <i class="bi bi-box-seam" aria-hidden="true"></i>
                        <span>Bulk Orders</span>
                    </a>
                    <a class="${active("contact")}" href="contact.html">
                        <i class="bi bi-envelope" aria-hidden="true"></i>
                        <span>Contact</span>
                    </a>
                </div>
                <div class="mobile-nav-actions">
                    <a class="btn btn-primary" href="login.html">
                        <i class="bi bi-person" aria-hidden="true"></i>
                        <span>Login</span>
                    </a>
                </div>
            </nav>
            <button
                class="mobile-nav-backdrop"
                data-menu-backdrop
                aria-label="Close navigation menu"
                tabindex="-1"
            ></button>
        </header>`;
    const footer = /* HTML */ `<footer class="site-footer">
        <div class="container footer-grid">
            <div>
                <a class="brand" href="index.html"
                    ><span class="brand-mark">SC</span><span>Sweet Crumbs</span></a
                >
                <p>Traditional mithai, fresh bakes and thoughtful gifts, handcrafted every day.</p>
                <div class="social-links">
                    <a href="#" aria-label="Instagram"
                        ><i class="bi bi-instagram" aria-hidden="true"></i></a
                    ><a href="#" aria-label="Facebook"
                        ><i class="bi bi-facebook" aria-hidden="true"></i
                    ></a>
                </div>
            </div>
            <div>
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="index.html">Home Page 1</a></li>
                    <li><a href="index-2.html">Home Page 2</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="festive-gift-boxes.html">Gift Boxes</a></li>
                    <li><a href="bulk-orders.html">Bulk Orders</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3>Products</h3>
                <ul class="footer-links">
                    <li><a href="products.html#traditional">Traditional Sweets</a></li>
                    <li><a href="products.html#bakery">Baked Goods</a></li>
                    <li><a href="products.html#chocolates">Chocolates</a></li>
                    <li><a href="products.html#dry-fruits">Dry Fruit Boxes</a></li>
                </ul>
            </div>
            <div>
                <h3>Visit Us</h3>
                <p>
                    12 Market Lane, Your City<br /><a href="tel:+00000000000">+00 00000 00000</a
                    ><br /><a href="mailto:hello@example.com">hello@example.com</a><br />Mon - Sat:
                    9 AM - 9 PM
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                Copyright 2026 Sweet Crumbs Bakery &amp; Mithai. All rights reserved.
            </div>
        </div>
    </footer>`;
    document.querySelector("[data-site-header]")?.insertAdjacentHTML("afterbegin", header);
    document.querySelector("[data-site-footer]")?.insertAdjacentHTML("afterbegin", footer);
    if (document.querySelector(".site-header")) document.body.classList.add("has-site-header");
    const root = document.documentElement;
    root.dataset.theme =
        localStorage.getItem("sweetcrumbs-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const updateThemeButtons = () =>
        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            const dark = root.dataset.theme === "dark";
            button.innerHTML = `<i class="bi ${dark ? "bi-sun" : "bi-moon"}" aria-hidden="true"></i>`;
            button.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
        });
    updateThemeButtons();
    document.querySelectorAll("[data-theme-toggle]").forEach((button) =>
        button.addEventListener("click", () => {
            root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
            localStorage.setItem("sweetcrumbs-theme", root.dataset.theme);
            updateThemeButtons();
        }),
    );
    root.dir = localStorage.getItem("sweetcrumbs-direction") || root.dir || "ltr";
    const updateDirectionButtons = () =>
        document.querySelectorAll("[data-direction-toggle]").forEach((button) => {
            const rtl = root.dir === "rtl";
            button.innerHTML = `<i class="bi ${rtl ? "bi-text-left" : "bi-text-right"}" aria-hidden="true"></i>`;
            button.setAttribute(
                "aria-label",
                rtl ? "Switch to left-to-right layout" : "Switch to right-to-left layout",
            );
        });
    updateDirectionButtons();
    document.querySelectorAll("[data-direction-toggle]").forEach((button) =>
        button.addEventListener("click", () => {
            root.dir = root.dir === "rtl" ? "ltr" : "rtl";
            localStorage.setItem("sweetcrumbs-direction", root.dir);
            updateDirectionButtons();
        }),
    );

    const launchCountdown = document.querySelector("[data-launch-countdown]");
    if (launchCountdown) {
        const countdownDuration = 30 * 24 * 60 * 60 * 1000;
        const storageKey = "sweetcrumbs-launch-deadline";
        const savedDeadline = Number(localStorage.getItem(storageKey));
        const deadline = savedDeadline > 0 ? savedDeadline : Date.now() + countdownDuration;

        if (!savedDeadline) localStorage.setItem(storageKey, String(deadline));

        const daysElement = launchCountdown.querySelector("[data-countdown-days]");
        const hoursElement = launchCountdown.querySelector("[data-countdown-hours]");
        const minutesElement = launchCountdown.querySelector("[data-countdown-minutes]");
        const twoDigits = (value) => String(value).padStart(2, "0");

        let countdownTimer;
        const updateCountdown = () => {
            const remaining = Math.max(0, deadline - Date.now());
            const totalMinutes = Math.ceil(remaining / 60000);
            const days = Math.floor(totalMinutes / 1440);
            const hours = Math.floor((totalMinutes % 1440) / 60);
            const minutes = totalMinutes % 60;

            daysElement.textContent = twoDigits(days);
            hoursElement.textContent = twoDigits(hours);
            minutesElement.textContent = twoDigits(minutes);
            launchCountdown.setAttribute(
                "aria-label",
                `${days} days, ${hours} hours and ${minutes} minutes until launch`,
            );

            if (remaining <= 0) window.clearInterval(countdownTimer);
        };

        updateCountdown();
        countdownTimer = window.setInterval(updateCountdown, 30000);
    }

    const menuButton = document.querySelector("[data-menu]");
    const mobileNav = document.querySelector("#mobile-nav");
    const menuCloseButton = document.querySelector("[data-menu-close]");
    const menuBackdrop = document.querySelector("[data-menu-backdrop]");
    const siteHeader = document.querySelector(".site-header");
    const updateStickyHeader = () =>
        siteHeader?.classList.toggle("is-scrolled", window.scrollY > 8);
    updateStickyHeader();
    window.addEventListener("scroll", updateStickyHeader, { passive: true });
    const setMobileMenu = (open) => {
        mobileNav?.classList.toggle("open", open);
        menuBackdrop?.classList.toggle("open", open);
        document.body.classList.toggle("mobile-menu-open", open);
        menuButton?.setAttribute("aria-expanded", String(open));
        menuButton?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        mobileNav?.setAttribute("aria-hidden", String(!open));
    };
    menuButton?.addEventListener("click", () =>
        setMobileMenu(!mobileNav?.classList.contains("open")),
    );
    menuCloseButton?.addEventListener("click", () => {
        setMobileMenu(false);
        menuButton?.focus();
    });
    menuBackdrop?.addEventListener("click", () => setMobileMenu(false));
    mobileNav?.querySelectorAll("a").forEach((link) =>
        link.addEventListener("click", () => setMobileMenu(false)),
    );
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileNav?.classList.contains("open")) {
            setMobileMenu(false);
            menuButton?.focus();
        }
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1200) setMobileMenu(false);
    });
    document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const open = dropdown.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open);
        });
        toggle.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                dropdown.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.focus();
            }
        });
    });
    document.addEventListener("click", () =>
        document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
            dropdown.classList.remove("open");
            dropdown.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
        }),
    );
    document.querySelector("[data-mobile-home]")?.addEventListener("click", (event) => {
        const submenu = document.querySelector("#mobile-home-links");
        const open = submenu.classList.toggle("open");
        event.currentTarget.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll("[data-filter]").forEach((button) =>
        button.addEventListener("click", () => {
            document
                .querySelectorAll("[data-filter]")
                .forEach((item) => item.classList.remove("active"));
            button.classList.add("active");
            const filter = button.dataset.filter;
            document.querySelectorAll(".product-item").forEach((item) => {
                item.hidden = filter !== "all" && item.dataset.category !== filter;
            });
        }),
    );
    document.querySelectorAll(".accordion-button").forEach((button) =>
        button.addEventListener("click", () => {
            const item = button.closest(".accordion-item");
            const open = item.classList.toggle("open");
            button.setAttribute("aria-expanded", open);
        }),
    );

    const fadeUpSections = document.querySelectorAll("main > section:not(.hero)");
    if (fadeUpSections.length) {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reducedMotion || !("IntersectionObserver" in window)) {
            fadeUpSections.forEach((section) => section.classList.add("fade-up-visible"));
        } else {
            const sectionObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add("fade-up-visible");
                        observer.unobserve(entry.target);
                    });
                },
                { threshold: 0.12, rootMargin: "0px 0px -48px" },
            );

            fadeUpSections.forEach((section) => {
                section.classList.add("fade-up-section");
                sectionObserver.observe(section);
            });
        }
    }
})();
