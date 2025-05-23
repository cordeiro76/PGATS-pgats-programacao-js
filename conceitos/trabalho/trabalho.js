function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    if (idade == 1 && porte === 'M') {
        console.log(`Pode ser Adotado pela idade e Porte!`)
        return true
    } else if (idade <= 1 && porte === 'P') {
        console.log(`Pode ser Adotado pela idade!`)
        return true
    } else if (idade <= 1 && porte === 'G') {
        console.log(`Pode ser Adotado pela idade!`)
        return true
    } else {
        console.log(`Não pode ser Adotado.`)
        return false
    }
}


function calcularConsumoDeRacao(nome, estoque, peso) {
    const consumoDiario = peso * 300
    console.log(`Peso: ${peso}. Nome: ${nome}. Estoque: ${estoque}`)
    return consumoDiario
}

function decidirTipoDeAtividadePorPorte(porte) {
    const atividades = {
        pequeno: 'brincar dentro de casa',
        médio: 'caminhada no quarteirão',
        grande: 'correr no parque'
    }

    return atividades[porte.toLowerCase()] || 'porte inválido';
    
}

async function buscarDadoAsync(dog = 'pipoca') {
    return dog.charAt(0).toUpperCase() + dog.slice(1).toLowerCase();
    
}


export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}

