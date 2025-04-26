
/**
Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
Até 10kg -> Pequeno; acima disso -> Médio
Use o operador ternário para determinar o porte. Exiba:
Nome
P e s o
P o r t e c l a s s i fi c a d o
Extra: transforme a lógica em uma função (da forma que conseguir)

*/


const nome = "Kiara"
const peso = 9

function porteClassificado(){
    if(peso < 10){
         porte = 'Pequeno'
        //console.log("Porte pequeno")
    }else{
        porte = 'Medio'
        //console.log("Porte medio")
    }
    return porte
}

console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Porte: ${porteClassificado()}`)


//correcao
const nome2 = "Kiara"
const peso2 = 9
const porte2  = peso2 <= 10 ? 'pequeno' : 'medio'

console.log(`------------`)
console.log(`-Soluçao 2-`)
console.log(`Nome: ${nome2}`)
console.log(`Peso: ${peso2}`)
console.log(`Porte: ${porte2}`)
console.log(`------------`)

//correcao 2
let nome3 = "Kiara"
let peso3 = 9
function classificarPortePorPeso(nome3, peso3){
    const porte3  = peso3 <= 10 ? 'Pequeno' : 'Medio'

    console.log(`------------`)
    console.log(`-Soluçao 3-`)
    console.log(`Nome: ${nome3}`)
    console.log(`Peso: ${peso3}`)
    console.log(`Porte: ${porte3}`)

}

classificarPortePorPeso('Pantera', 14.5)
classificarPortePorPeso('Thor', 35)
classificarPortePorPeso('Rubens', 8)