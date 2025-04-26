/* CONSOLE API */

console.log("olá, mundo!")

console.error("Falha na execução!")

console.warn("Atenção!!! Usado par alertas!")

console.table([{
    nome: 'Wesley',
    turma: '02',
    disciplina: 'Programação com JS'
},
{
    nome: 'Junior',
    turma: '02',
    disciplina: 'Programação com JS'
}])


/* Constantes e Variáveis */

// const para informações que nunca mudam
// var ou let para informações que podem mudar


//informações que não mudam (cachorro)

const nome = 'Loki'
const raca = 'Sem raça definida'
const sexo = 'Macho'
const cor = 'Preto'
const dataNascimento = '01/01/2022'
const porte = 'M'

// informações que mudam (cachorro)

let idade = 3
let peso = 22.5
let vacinado = true
let castrado = false
let tamanho = 'M'

 /*tipos de dados

 inteiro - number
 cadeia - strings
 logico - boolean
 vetores - array
 
 undefined 
 null

 bigint - number para número extremamente grandes
 symbol - identificador único

*/

/* 'Turma' - aspas simples ou single quote
   "Turma" - aspas duplas ou double quote
   'Turma' - tamplate strings */

const turma = "02"

console.log("Aula 03 da Turma " + turma + " no sábado 05 de abril.")

console.log(`Aula 03 da Turma ${turma} no sábado 05 de abril`) // interpolação