/**

    describe    -> agrupador de testes
    it          -> implementaçao do teste  
    
    TDD
        Crio o teste
        Vejo o teste falhar
        crio a implementaçao para o teste passar
        rodo o teste de novo
        refatoro o código para melhorar..

    ASSERTION / ASSERCAO
        Verificar se um comportamento está de acordo com o esperado

 */

import {exibirNomeDogFormatado} from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {
    it('deve exibir o nome do dog com letras maiusculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
        // VERIFIQUE SE: <valor atual> É IGUAL A <valor esperado>

    })

    it('segundo teste', () => {
       // throw new Error()
    })

})