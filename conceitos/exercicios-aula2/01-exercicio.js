/**

E x e r c í c i o I n d i v i d u a l
Programação para Automação d e Testes

H a n d s - o n
Validador de idade mínima para adoção
Crie um script que verifique s e um dog pode ser
adotado com base na idade mínima definida, por
exemplo, 2 anos.
Use o s operadores adequados e exiba:
N o m e d o d o g
I d a d e
S e está apto ou não para adoção

Extra: aplique uma regra com operador lógico para
permitir que s e o cão for d e pequeno porte, pode ser
adotado independente da idade

*/


/**
let nomeDog = "Chico"
let idadeDog = 2
const estaAptoParaAdocao = idadeDog >= 2 ? 'Sim' : 'Não'

console.log(`Nome: ${nomeDog} \nIdade: ${idadeDog} \nEstá apto para adoção? ${estaAptoParaAdocao}`)
*/

let nomeDog = "Chico"
let idadeDog = 1
const porte = "P"
const idadeMinima = 2

const adocao = idadeDog >= idadeMinima
                            ? 'sim'
                            : porte === 'P'
                            ? 'sim'
                            : 'não' 
//console.log(adocao)
console.log(`Nome: ${nomeDog} \nIdade: ${idadeDog} \nEstá apto para adoção? ${adocao}`)

const adocacaoV2 = idadeDog >= idadeMinima || porte === 'P'
console.log(`Nome: ${nomeDog} \nIdade: ${idadeDog} \nEstá apto para adoção? ${adocacaoV2}`)

function verificarSePodeSerAdotado(idadeDog, porte){
    const adocao = idadeDog >= idadeMinima
                            ? 'sim'
                            : porte === 'P'
                            ? 'sim'
                            : 'não' 
    console.log(adocao)
}

verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(2, 'P')
verificarSePodeSerAdotado(1, 'P')