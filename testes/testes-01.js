// describe título do teste
// it implementação do teste
//Assertion ou asserção : verificar valor ou comportamento está de acordo com o esperado

import { exibirNomeDogFormatado } from '../Conceitos/teste-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {
    it('Deve exibir o nome do dog com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA') 
    })

    it('Segundo teste', () => {
        
    })
})