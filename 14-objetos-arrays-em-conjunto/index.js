
// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//     {nome: 'Fifa'},
//     {nome: 'Fallout'}]
// }

// let jogo3 = {
//     nome: 'warzone'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'buel',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogo: [
            {nome: 'fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogo[0].nome) 