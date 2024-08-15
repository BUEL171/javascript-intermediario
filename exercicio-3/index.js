const quadrado = document.querySelector(".quadrado")

quadrado.addEventListener("click", function () {
    const azulExiste = quadrado.classList.contains("azul")
    if (azulExiste) {
        quadrado.classList.remove("azul")
    } else {
        quadrado.classList.add("azul")
    }
})