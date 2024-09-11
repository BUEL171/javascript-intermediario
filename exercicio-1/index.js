const btnTorcarCo = document.getElementById("btn-trocar-cor")

const btnVoltarCor = document.getElementById("btn-voltar-cor")

const quadradoAzul = document.querySelector(".azul")

btnTorcarCo.addEventListener("click", function () {
    quadradoAzul.classList.remove("azul")
    quadradoAzul.classList.add("amarelo")
})

btnVoltarCo.addEventListener("click", function () {
    quadradoAzul.classList.remove("amarelo")
    quadradoAzul.classList.add("azul")
})