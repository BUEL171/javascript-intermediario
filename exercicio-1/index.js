const btnTrocarCor = document.getElementById("btn-trocar-cor")

const btnVoltarCor = document.getElementById("btn-voltar-cor")

const quadraAzul = document.querySelector(".azul")

btnTrocarCor.addEventListener("click", function trocarCor() {
    quadraAzul.classList.remove("azul")
    quadraAzul.classList.add("amarelo")
})

btnVoltarCor.addEventListener("click", function btnVoltarCor() {
    quadraAzul.classList.remove("amarelo")
    quadraAzul.classList.add("azul")
})