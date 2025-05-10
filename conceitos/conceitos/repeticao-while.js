/**
Enquanto (pet nao estiver cansado); faca {
    (açao que quer executar)
    dar uma volta na quadra
}
 */

let voltasAteFicarCansado = 5
let quantidadesVoltasAtual = 0

while (quantidadesVoltasAtual < voltasAteFicarCansado){
    console.log(`Dar uma volta na quadra 🐶`)
    //colocar o incremento abaixo para nao ficar no loop infinito
    quantidadesVoltasAtual++
}