// modularização: usar uma função dentro de outra (basicamente)

const exibirNomePet = (nomePet) => {
    console.log(`O nome do pet é ${nomePet}`)
}

const exibirIdadePet = (idadePet) => {
    console.log(`Idade do dog é ${idadePet}`)
}

exibirNomePet(`Joca`)
exibirIdadePet(10)

// export {} / import 

export {
    exibirNomePet
}