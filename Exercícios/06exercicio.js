const nome = 'Pantera'
const peso = 45
let porte = 'M'
const tempoAtividade = 45
let mensagemAtivdade = "" 

const classificarAtividadeDog = (nome, peso, tempoAtividade) => {
    if (peso <= 10) {
        porte = 'P'
    } else if (peso <= 20) {
        porte = 'M' 
    } else if (peso <= 40) {
        porte = "G"
    } else {
        console.log("porte indefinido!")
    }
    
    if (tempoAtividade < 15) {
        mensagemAtivdade = `Atividade rápida`
    } else if (tempoAtividade >= 15 && tempoAtividade <= 30) {
        mensagemAtivdade = `Tempo Ideal`    
    } else {
        mensagemAtivdade = `Hora da diversão!`
    }

    console.log(`Nome: ${nome}`)
    console.log(`Porte: ${porte}`)
    console.log(`Tempo Atividade: ${tempoAtividade} minutos.`)
    console.log(`${mensagemAtivdade}`)
}

classificarAtividadeDog('Thor', 5, 10)
classificarAtividadeDog('Pipoca', 32, 25)
classificarAtividadeDog('Sam', 40, 32)
classificarAtividadeDog('Safira', 38, 10)