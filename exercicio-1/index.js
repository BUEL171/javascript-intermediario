const btnTorcarCor = document.getElementById("btn-trocar-cor")

const btnVoltarCor = document.getElementById("btn-voltar-cor")

const quadrado = document.querySelector(".azul")

btnTorcarCor.addEventListener("click", function () {
    quadrado.classList.remove("azul")
    quadrado.classList.add("amarelo")
})

btnVoltarCor.addEventListener("click", function () {
    quadrado.classList.remove("amarelo")
    quadrado.classList.add("azul")
})