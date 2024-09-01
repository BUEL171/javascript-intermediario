const btnTorcarCor = document.getElementById("btn-trocar-cor")

const btnVoltarCor = document.getElementById("btn-voltar-cor")

const quadradoAzul = document.querySelector(".azul")

btnTorcarCor.addEventListener("click", function () {
    quadradoAzul.classList.remove("azul")
    quadradoAzul.classList.add("amarelo")
})

btnVoltarCor.addEventListener("click", function () {
    quadradoAzul.classList.remove("amarelo")
    quadradoAzul.classList.add("azul")
}) 

// oie