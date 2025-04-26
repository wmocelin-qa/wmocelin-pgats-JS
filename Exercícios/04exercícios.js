// simplificado sem função 

const nomeDog = 'Sam'
const pesoDog = 10
const estoqueRacao = 5000

const qtdRecomendadaDia = pesoDog * 30 
const diasDuracaoEstoque = estoqueRacao / qtdRecomendadaDia


console.log(`Nome: ${nomeDog}`)
console.log(`Peso: ${pesoDog}kg`)
console.log(`Quantidade recomendada dia: ${qtdRecomendadaDia}g dia`)
console.log(`Duração estoque: ${Math.floor(diasDuracaoEstoque)} dias`)


//usando função

function calcularQtdConsumoRacao(nomeDog, pesoDog, estoqueRacao) {
    const qtdRecomendadaDia = pesoDog * 30 
    const diasDuracaoEstoque = estoqueRacao / qtdRecomendadaDia

    console.log("---------------------------")
    console.log(`Nome: ${nomeDog}`)
    console.log(`Peso: ${pesoDog}kg`)
    console.log(`Quantidade recomendada dia: ${qtdRecomendadaDia}g dia`)
    console.log(`Duração estoque: ${Math.floor(diasDuracaoEstoque)} dias`)
    console.log("---------------------------")
}

calcularQtdConsumoRacao(`Pingo`, 20, 5000)
calcularQtdConsumoRacao(`Tobby`, 5, 1000)
calcularQtdConsumoRacao(`Panda`, 15, 1000)