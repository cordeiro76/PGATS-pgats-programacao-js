/**
    condicao (se verdadeira)
        acao dentro do if
    senao se (outra condicao)
        acao dentro do if
    senao
        acao dentro do else
 */

if(10 < 5){
    console.log("Valor é maior")
}else{
    console.log("Valor é menor")
}

const idade = 0.9
const porte = 'P'
if (idade >= 2){
    console.log(`Pode ser Adotado, pela idade`)
} else if(porte === 'P'){
    console.log(`Pode ser Adotado, pelo porte`)
} else{
    console.log(`Não pode ser Adotado`)
}