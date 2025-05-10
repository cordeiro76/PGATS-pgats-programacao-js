/**

  Distribuidor de petiscos

  Você tem uma lista de cães: Pantera, Luna e Thor
  Crie um script que "entregue" 1 petisco para cada cão da lista.
  Exiba uma mensagem como: "Entregando petisco para Pantera"

  Mantenha os dados e a função em arquivos separados; use modularização para organizar.

 */

//import {dogs} from './exercicio-4mod-dados.js'

// listaDeCaes.forEach(caes => {
//     console.log(`Entregando petisco para ${caes}.`)
// })


function entregarPetiscosPara(listaDeDogs){
    listaDeDogs.forEach(dog => {
        console.log(`Entregando petisco para ${dog}.`)
    })
}



export{
    entregarPetiscosPara
}