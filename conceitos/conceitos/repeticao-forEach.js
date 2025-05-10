/**
listaDeAlunos
    Matheus
    Renata
    Leandro
    Ana
    Lucas
paraCada (item da) listaDeAlunos

    //dar uma nota aleatória

 */

const listaDeAlunos = [
    'Matheus',
    'Renata',
    'Leandro',
    'Ana',
    'Lucas'
]

listaDeAlunos.forEach(aluno => {
    console.log(aluno)
})


const listaDeAlunosENotas = [
    {
        nome: 'Matheus',
        nota: 7
    },
    {
        nome: 'Renata',
        nota: 7
    },
    {
        nome: 'Leandro',
        nota: 7
    },
    {
        nome: 'Ana',
        nota: 2
    },
    {
        nome: 'Lucas',
        nota: 7
    }
]

console.log (`-----------------------------------`)
listaDeAlunosENotas.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota} `)
})

listaDeAlunosENotas.forEach((aluno, index) =>{
    
    if(aluno.nota< 7){
        
        console.log(`Aluno ${aluno.nome} precisa do trabalho extra`)
        console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
    }

    console.log(index)
})