/**
    >   - maior que
    >=  - maior ou igual que
    <   - menor que
    <=  - menor ou igual
    ==  - igualdade somente de valores
    !=  - diferença somente de valores
    === - igualdade de valores e tipo de dado
 */

//maior que
console.log("maior que ")
console.log(`10 > 5 = ${ 10 > 5 }`) //verdadeiro = true
console.log(`10 > 20 = ${ 10 > 20 } \n`) //falso = false

// maior ou igual
console.log("maior ou igual ")
console.log(`10 >= 10 = ${ 10 >= 10 }`) //verdadeiro = true
console.log(`10 >= 9 = ${ 10 >= 9 } \n`) //falso = false

// menor que
console.log("menor que")
console.log(`10 < 5 = ${ 10 < 5 }`) //verdadeiro = true
console.log(`5 < 20 = ${ 10 < 20 } \n`) //falso = false

// menor ou igual 
console.log("menor ou igual ")
console.log(`10 <= 10 = ${ 10 <= 10 }`) //verdadeiro = true
console.log(`5 <= 9 = ${ 10 <= 9 } \n`) //falso = false

// ==  - igualdade somente de valores
console.log("==  - igualdade somente de valores")
console.log(`1 == 1 = ${ 1 == '1' }`) //falso = false
console.log(`true == 1 = ${ true == '1' }`)
console.log(`false == 1 = ${ false == '1' }`)
console.log(`null == undefined = ${ null == undefined }`)
console.log(`'' == 0 = ${ '' == 0 } \n`)

// === - igualdade de valores e tipo de dado
console.log("=== - igualdade de valores e tipo de dado")
console.log(`1 === 1 = ${ 1 === '1' }`)
console.log(`true === 1 = ${ true === '1' }`)
console.log(`false === 1 = ${ false === '1' } \n`)

// diferença de valores
console.log("diferença de valores")
console.log(`1 != 2 = ${ 1 != 2 }`)
console.log(`1 !== 2 = ${ 1 !== 2 } \n`)