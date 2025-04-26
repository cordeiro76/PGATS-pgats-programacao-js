/**
 * Console API
 */

/**
console.log("Aula inicial JS")

console.error("Falha na execução")

console.warn("Atenção!")

console.table([{
    nome: 'samuel',
    turma: 't2',
    disciplina: 'Prog JS'
},
{
    nome: 'jessica',
    turma: 't2',
    disciplina: 'Prog JS'
}])
 */

/**
 * Constantes e Variaveis
 */

// Const - Informaçoes que nunca muda
// var e let - para informaçoes que pode mudar

// informaçoes que nao mudam

const nome = "Kiara"
const raca = "Pitbull"
const sexo = "F"
const cor = "Cinza"
const dataNascimento = "10/07/2023" 
const porte = "Grande"

//informações que mudam

let idade = 2
let peso = 40.5
let vacinado = true
let castrado = false
let tamanho = 'M'

// 'Turma 02 do PGATS' - aspas simples ou single quote
// "Turma 02 do PGATS" - aspas duplas ou double quote
// `Turma 02 do PGATS` - template strings

const numeroAula = "03"
const turma = "02"
let data = "05 de abril"

console.log("Aula 03 da turma " + turma + " no sabado dia 05 de abril")

console.log(`Aula ${ numeroAula } da turma ${ turma } no sabado dia ${ data }`)

console.log(data.length)

// split - separar a string

const nomeDeAlunos = "Giuliana Goku Andre Lucas Lenilson"
const nomeDeAlunosSplit = nomeDeAlunos.split(" ")

console.log(nomeDeAlunosSplit)

console.log(nomeDeAlunos.toLowerCase()) //minusculo
console.log(nomeDeAlunos.toUpperCase()) //maiusculo

console.log(nomeDeAlunos.includes("Denis")) //verifica se o nome esta na "lista"

//console.log(nomeDeAlunos.toLocaleLowerCase().replaceAll('a', 'i'))
console.log(nomeDeAlunos.replaceAll('a', 'i'))

//ignorar espaços

const conceitosLogica = "     cadeia numero logica  "

console.log(conceitosLogica.trim())

let dataParaCortar = "05 de abril"
const cpf = "98789039823"

console.log(dataParaCortar.slice(0, 2))
console.log(dataParaCortar.substring(0, 2))

console.log(cpf.slice(0, 3))