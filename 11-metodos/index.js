let usuario = {
    nome: 'buel',
    sobrenome: 'soares',
    excluir: function(){
        console.log('O usuario ' + this.nome + ' foi excluido')
    }
}

usuario.excluir()