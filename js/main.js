function showBox(title, content, buttons) {
    const windw = document.createElement("div");

    windw.classList.add("win");
    windw.innerHTML = `
        <div class="win__in">
            <div class="win__top">
                <div class="win__title">${title}</div>
                <button class="win__close" type="button">
                    <i class="material-icons">close</i>
                </button>
            </div>
            <div class="win__content">${content}</div>
            <div class="win__bottom"></div>
        </div>
    `;

    for (const button of buttons) {
        const element = document.createElement("button");

        element.setAttribute("type", "button");
        element.classList.add("win__button");
        element.textContent = button.label;
        element.addEventListener("click", () => {
            if (button.triggerClose) {
                document.body.removeChild(windw);
            }

            button.onClick(windw);
        });

        windw.querySelector(".win__bottom").appendChild(element);
    }

    windw.querySelector(".win__close").addEventListener("click", () => {
        document.body.removeChild(windw);
    })

    document.body.appendChild(windw);
}