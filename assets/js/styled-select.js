(() => {
    "use strict";
    document.querySelectorAll("form select.form-control").forEach((select) => {
        const wrapper = document.createElement("div");
        wrapper.className = "styled-select";
        select.before(wrapper);
        wrapper.append(select);
        select.classList.add("styled-select-native");
        select.tabIndex = -1;
        select.setAttribute("aria-hidden", "true");
        const label = document.querySelector(`label[for="${select.id}"]`);
        if (label) label.id = `${select.id}-label`;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "form-control styled-select-trigger";
        button.id = `${select.id}-trigger`;
        button.setAttribute("role", "combobox");
        button.setAttribute("aria-haspopup", "listbox");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", `${select.id}-options`);
        button.setAttribute("aria-labelledby", label?.id || select.id);
        button.setAttribute("aria-required", String(select.required));
        const list = document.createElement("div");
        list.id = `${select.id}-options`;
        list.className = "styled-select-options";
        list.setAttribute("role", "listbox");
        list.setAttribute("aria-labelledby", label?.id || select.id);
        list.hidden = true;
        wrapper.append(button, list);
        let active = select.selectedIndex;
        const options = Array.from(select.options, (option, index) => {
            const item = document.createElement("div");
            item.id = `${select.id}-option-${index}`;
            item.className = "styled-select-option";
            item.setAttribute("role", "option");
            item.textContent = option.textContent;
            item.addEventListener("click", () => choose(index));
            item.addEventListener("pointerenter", () => {
                active = index;
                options.forEach(option => option.classList.remove("is-active"));
                button.removeAttribute("aria-activedescendant");
            });
            list.append(item);
            return item;
        });
        function sync() {
            button.textContent = select.options[select.selectedIndex]?.textContent || "Select";
            options.forEach((item, index) => item.setAttribute("aria-selected", String(index === select.selectedIndex)));
        }
        function highlight(index) {
            active = Math.max(0, Math.min(index, options.length - 1));
            options.forEach((item, i) => item.classList.toggle("is-active", i === active));
            button.setAttribute("aria-activedescendant", options[active].id);
            options[active].scrollIntoView({ block: "nearest" });
        }
        function close() {
            list.hidden = true;
            button.setAttribute("aria-expanded", "false");
            button.removeAttribute("aria-activedescendant");
        }
        function open() {
            list.hidden = false;
            button.setAttribute("aria-expanded", "true");
            active = select.selectedIndex;
            options.forEach(item => item.classList.remove("is-active"));
            button.removeAttribute("aria-activedescendant");
        }
        function choose(index) {
            select.selectedIndex = index;
            sync();
            close();
            button.focus();
            select.dispatchEvent(new Event("change", { bubbles: true }));
            select.dispatchEvent(new Event("blur"));
        }
        button.addEventListener("click", () => list.hidden ? open() : close());
        button.addEventListener("keydown", (event) => {
            if (["ArrowDown", "ArrowUp", "Home", "End", "Enter", " "].includes(event.key)) {
                event.preventDefault();
                if (list.hidden) { open(); return; }
                if (event.key === "Enter" || event.key === " ") choose(active);
                else highlight(event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : active + (event.key === "ArrowDown" ? 1 : -1));
            } else if (event.key === "Escape") { event.preventDefault(); close(); }
            else if (event.key === "Tab") close();
            else if (event.key.length === 1) {
                const match = options.findIndex((item, i) => i > active && item.textContent.toLowerCase().startsWith(event.key.toLowerCase()));
                const index = match >= 0 ? match : options.findIndex(item => item.textContent.toLowerCase().startsWith(event.key.toLowerCase()));
                if (index >= 0) { event.preventDefault(); if (list.hidden) open(); highlight(index); }
            }
        });
        wrapper.addEventListener("focusout", event => {
            if (!wrapper.contains(event.relatedTarget)) { close(); select.dispatchEvent(new Event("blur")); }
        });
        document.addEventListener("pointerdown", event => { if (!wrapper.contains(event.target)) close(); });
        select.addEventListener("focus", () => button.focus());
        select.addEventListener("change", sync);
        label?.addEventListener("click", event => { event.preventDefault(); button.focus(); });
        select.form?.addEventListener("reset", () => queueMicrotask(() => { sync(); close(); button.removeAttribute("aria-invalid"); }));
        sync();
    });
})();
