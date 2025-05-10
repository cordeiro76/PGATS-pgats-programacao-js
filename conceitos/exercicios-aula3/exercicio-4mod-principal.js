/**

  Distribuidor de petiscos

  Você tem uma lista de cães: Pantera, Luna e Thor
  Crie um script que "entregue" 1 petisco para cada cão da lista.
  Exiba uma mensagem como: "Entregando petisco para Pantera"

  Mantenha os dados e a função em arquivos separados; use modularização para organizar.

*/

import {dogs} from './exercicio-4mod-dados.js'
import {entregarPetiscosPara} from './exercicio-4mod-funcao.js'

entregarPetiscosPara(dogs)