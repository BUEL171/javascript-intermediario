const btnTrocaCor = document.getElementById("btn-troca-cor");

const Azul = document.querySelector(".azul");

btnTrocaCor.addEventListener("click", trocarCor);

function trocarCor() {
    Azul.classList.remove("azul");
    Azul.classList.add("amarelo");
}