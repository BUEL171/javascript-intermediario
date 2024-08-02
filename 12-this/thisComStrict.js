'use strict'

// console.log(window)
// console.log(window === this)

// this.name = 'buel'
// function saudar(){
//     console.log('this no contexto da funcao', this)
//     console.log('Ola ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'buel',
//     saudar: function(){
//         console.log('this no contexto do metodo', this)

//         console.log('this.nome no contexto do metodo', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'brocolis',
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento){
        console.log('this no contexto do objeto comida', this);
        this.temperatura = temperaturaDeCozimento;
    }
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto do objeto comida', this);
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida);