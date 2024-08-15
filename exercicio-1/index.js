const btnTrocarCor = document.getElementById("btn-trocar-cor")

const btnVoltarCor = document.getElementById("btn-voltar-cor")

const quadradoAzul = document.querySelector(".azul")

btnTrocarCor.addEventListener("click", function trocarcor() {
    quadradoAzul.classList.remove("azul")
    quadradoAzul.classList.add("amarelo")
})

btnVoltarCor.addEventListener("click", function voltarcor() {
    quadradoAzul.classList.remove("amarelo")
    quadradoAzul.classList.add("azul")
})