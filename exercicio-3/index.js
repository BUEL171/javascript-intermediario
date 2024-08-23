const quadrado = document.querySelector(".quadrado")

quadrado.addEventListener("click", function () {
    const quadradoAzulExiste = quadrado.classList.contains("azul")

    if (quadradoAzulExiste) {
        quadrado.classList.remove("azul")
    } else {
        quadrado.classList.add("azul")
    }
})