const quadrado = document.querySelector(".quadrado")

quadrado.addEventListener("click", function () {
    const corAzulExiste = quadrado.classList.contains("azul")

    if (corAzulExiste) {
        quadrado.classList.remove("azul")
    } else {
        quadrado.classList.add("azul")
    }
})