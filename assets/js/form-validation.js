(() => {
    "use strict";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+()\d\s-]{7,20}$/;

    const errorFor = (form, field) => form.querySelector(`[data-error="${field.name}"]`);
    const setError = (form, field, message) => {
        const error = errorFor(form, field);
        if (error) error.textContent = message;
        field.setAttribute("aria-invalid", message ? "true" : "false");
        const trigger = field.closest(".styled-select")?.querySelector(".styled-select-trigger");
        if (trigger) {
            trigger.setAttribute("aria-invalid", message ? "true" : "false");
            if (error) {
                error.id = `${field.id}-error`;
                trigger.setAttribute("aria-describedby", error.id);
            }
        }
        return !message;
    };

    const validateField = (form, field) => {
        let message = "";
        const value = field.type === "checkbox" ? field.checked : field.value.trim();
        if (field.required && !value)
            message =
                field.type === "checkbox"
                    ? "Please confirm this option."
                    : "This field is required.";
        else if (field.type === "email" && !emailPattern.test(field.value))
            message = "Enter a valid email address.";
        else if (field.type === "tel" && !phonePattern.test(field.value))
            message = "Enter a valid phone number.";
        else if (field.type === "password" && field.value.length < 8)
            message = "Use at least 8 characters.";
        else if (field.name === "confirmPassword") {
            const password = form.querySelector('[name="password"]');
            if (password && field.value !== password.value) message = "Passwords must match.";
        }
        return setError(form, field, message);
    };

    document.querySelectorAll("[data-password-toggle]").forEach((button) =>
        button.addEventListener("click", () => {
            const input = document.getElementById(button.getAttribute("aria-controls"));
            if (!input) return;
            const showing = input.type === "text";
            input.type = showing ? "password" : "text";
            button.innerHTML = `<i class="bi ${showing ? "bi-eye" : "bi-eye-slash"}" aria-hidden="true"></i>`;
            button.setAttribute("aria-label", showing ? "Show password" : "Hide password");
        }),
    );

    document
        .querySelectorAll("[data-placeholder-link]")
        .forEach((link) => link.addEventListener("click", (event) => event.preventDefault()));

    document.querySelectorAll("[data-validate]").forEach((form) => {
        form.querySelectorAll("[required]").forEach((field) => {
            field.addEventListener(field.type === "checkbox" ? "change" : "blur", () =>
                validateField(form, field),
            );
        });
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const fields = [...form.querySelectorAll("[required]")];
            const valid = fields.map((field) => validateField(form, field)).every(Boolean);
            if (!valid) {
                form.querySelector('[aria-invalid="true"]')?.focus();
                return;
            }
            form.reset();
            const status = form.querySelector(".form-status");
            status?.classList.add("show");
            status?.focus();
        });
    });
})();
