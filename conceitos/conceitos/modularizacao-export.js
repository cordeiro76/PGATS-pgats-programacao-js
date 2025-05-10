/**

Sintaxe CommonJS:
    module.exports = {} / require('')

ESM - Ecmascript Standard Modules
    export {} / import

 */


// const nomePet = `Pitoco`
// console.log(`O nome do pet é ${nomePet}`)

// console.log(`--------------------------`)

function exibirNomePet(paramNomePet){
    console.log(`O nome do pet é ${paramNomePet}`) 
}

function exibirIdade(paramIdadePet){
    console.log(`Idade do Pet é ${paramIdadePet}`)
}
// exibirNomePet(`Pipoca`)
// exibirNomePet(`Belinha`)
// exibirNomePet(`Peggy`)

// export {} / import
export{
    exibirNomePet,
    exibirIdade
}