const nomeDog = 'Sam'
let idadeDog = 1
const idadeAdocao = 2
const porte = 'P'

/* usando apenas ternário
let aptoAdocao = idadeDog >= 2 || porte == 'P' ? 'pode ser adotado' : 'não pode ser adotado' 

console.log(`O nome dele é ${nomeDog} tem ${idadeDog} anos e ${aptoAdocao}`)
*/

// usando function
function verificarSeDogPodeSerAdotado(idade, porte) {
    const adocao = idadeDog >= idadeAdocao || porte == 'P' ? 'pode ser adotado' : 'não pode ser adotado' 
    console.log(adocao)
}

verificarSeDogPodeSerAdotado(1, 'M')
verificarSeDogPodeSerAdotado(2, 'M')
verificarSeDogPodeSerAdotado(2, 'P')
verificarSeDogPodeSerAdotado(1, 'P')
