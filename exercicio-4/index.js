const inputText = document.querySelectorAll(".input-text")

inputText.forEach(inputs => {
    inputs.addEventListener("change", () => {
        if (inputs.value !== "") {
            inputs.classList.add("campo-preenchido")
        } else {
            inputs.classList.remove("campo-preenchido")
        }
    })
});