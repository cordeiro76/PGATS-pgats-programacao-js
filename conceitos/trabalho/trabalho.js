function geradorDeTagsDeIdentificacao(nome){
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado (idade, porte){
    if (idade == 1 && porte === 'M'){
        console.log(`Pode ser Adotado!`)
        return true
    } else{
        console.log(`Não pode ser Adotado.`)
        return false
    }
    
}

function calcularConsumoDeRacao(nome, estoque, peso) {
    const consumoDiario = peso * 300
    console.log(`Peso: ${peso}. Nome: ${nome}. Estoque: ${estoque}`)
    return consumoDiario
  }

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao
}