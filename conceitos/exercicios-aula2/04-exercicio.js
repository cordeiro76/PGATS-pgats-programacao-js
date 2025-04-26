/**
Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande); e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
pequeno -> brincar dentro de casa
médio -> caminhada no quarteirão
grande -> correr no parque
qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
menor que 15 -> "atividade rápida: [atividade]"
de 15 a 30 -> "tempo ideal: [atividade]"
acima de 30 -> "hora da diversão: [atividade]
 */

let porte = 'Médio'
let tempo = 50
let atividade


    switch (porte){
        case 'Pequeno':
            atividade = 'Brincar dentro de casa'
            break
        case 'Médio':
            atividade = 'Caminhada no quarteirão'
            break
        case 'Grande':
            atividade = 'Correr no parque'
            break
        default: //else
            atividade = 'Porte Inválido'
    }


if(tempo < 15){
    console.log(`Atividade rápida: ${ atividade }`)
} else if (tempo > 15 && tempo < 30){
    console.log(`Tempo ideal: ${ atividade }`)
}else{
    console.log(`Hora da Diversão: ${ atividade }`)
}