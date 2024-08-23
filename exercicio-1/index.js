const btnTrocarCor = document.getElementById("btn-trocar-cor")

const btnvoltarCor = document.getElementById("btn-voltar-cor")

const quadradoAzul = document.querySelector(".azul")

btnTrocarCor.addEventListener("click", function btnTrocarCo() {
    quadradoAzul.classList.remove("azul")
    quadradoAzul.classList.add("amarelo")
})

btnvoltarCor.addEventListener("click", function voltarCor() {
    quadradoAzul.classList.remove("amarelo")
    quadradoAzul.classList.add("azul")
})