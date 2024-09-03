const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {

  if (imagemAtual === imagens.length - 1) {
    return
  }
  

  imagemAtual++

  mostrarOuEsconderSetas()
  mostrarImagem();
  escorderIamgemAberta()
})

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return
  }

  imagemAtual--
  escorderIamgemAberta()
  mostrarImagem()
  mostrarOuEsconderSetas()
})

function mostrarImagem() {
  imagens[imagemAtual].classList.add("mostrar");
}

function escorderIamgemAberta() {
  const imagemAberta = document.querySelector(".mostrar")
  imagemAberta.classList.remove("mostrar")
}

function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade")
  } else {
    setaVoltar.classList.add("opacidade")
  }

  const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1
  if (chegouNaUltimaImagem) {
    setaAvancar.classList.add("opacidade")
  } else {
    setaAvancar.classList.remove("opacidade")
  }
}