/**
para, faca
contador; condição; manipuacao do contador (incremento/decremento)

quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++

 */
const quantidadeCalculada = 3

for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++){
    //ação de dar um petisco

    console.log(`Dando o petisco de número: ${ quantidadeDePetiscos}`)

}


const gatos = ['Lessie', 'Pony', 'Fumaca']

for (let indice = 0; indice < gatos.length; indice++){
    console.log(`Dando o petisco para: ${gatos[indice]}`)
}

//for dentro do for
for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++){
    
    for (let indice = 0; indice < gatos.length; indice++){
        console.log(`Dando o petisco para: ${gatos[indice]}`)
    }

    console.log(`Dando o petisco de número: ${ quantidadeDePetiscos}`)

}