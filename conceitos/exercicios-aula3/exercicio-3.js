/**

 */

const listaDeBrinquedos = [
    'Bola',
    'Osso',
    'Corda',
    'Sino'
]

listaDeBrinquedos.forEach((brinquedos,index) => {
    console.log(`${index + 1} - O brinquedo ${brinquedos} foi entregue.`)
})

//exemplo funçao normal
console.log(`--------------------------`)

listaDeBrinquedos.forEach(function(cachorro){
    console.log(`O brinquedo ${cachorro} foi entregue.`)
})