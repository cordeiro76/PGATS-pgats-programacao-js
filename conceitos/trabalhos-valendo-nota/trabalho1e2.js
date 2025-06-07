/**
Trabalho 1:
    Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
 */

function removerStringsDaLista() {
    const lista = [1, 'a', 2, 'b', 3, 'teste', 4, "23", `este`, 5, 12];
    const resultado = lista.filter(item => typeof item === 'number');
    console.log(`Trabalho 1: `)
    console.log(resultado);
}

removerStringsDaLista()

/**
Trabalho 2:
    Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. 
    O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
 */


function contarVogais() {
    const texto = "digitando algo para contar vogais"
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let contador = 0

    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++
        }
    }
    console.log(`\nTrabalho 2: `)
    console.log(`Número de vogais: ${contador}`)
}

contarVogais()