const nomeDog = "tH oR @#$! @"
//let nomeFormatado = nomeDog.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "");
//nomeFormatado = nome

let nomeFormatado = removerCaracteresEspeciais(nomeDog)
nomeFormatado = nomeFormatado.charAt(0).toUpperCase() + nomeFormatado.slice(1, nomeFormatado.length).toLowerCase()

console.log(nomeDog)
console.log(nomeFormatado)

function removerCaracteresEspeciais(nome) {
    return nome = nome.replace(/\s+/g, "").replace(/[^a-zA-ZÀ-ÿ]/g, "");
}