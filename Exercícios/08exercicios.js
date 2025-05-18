// contar vogais 
let meuTexto = " u a    aevdafdshiueyiuyawiueaiou dssdeeea eea aeaef eadead io u "
let vogais = ['a', 'e', 'i', 'o', 'u']
let vogalEncontrada = 0

const contarVogais = () => {
    for (let i = 0; i < meuTexto.length; i++) {
        if (vogais.includes(meuTexto[i])) {
        vogalEncontrada++
        }
    }
    console.log(`Total de vogais: ${vogalEncontrada}`)
}

contarVogais()

// lista de inteiros e strings, retorne apenas inteiros 

let noRioNaoTemOutroIgual = ["Em dezembro de, ", 81, "botou os ingleses na roda", 3,"a", 0, "no Liverpool. Ficou marcado na história!"]
const novaListaInteiros = []

const converterListaParaInteiros = () => {
    noRioNaoTemOutroIgual.forEach(elemento => {
        if (Number.isInteger(elemento)) {
        novaListaInteiros.push(elemento)
        }
    })
    console.log("Lista convertida: ", novaListaInteiros)
}

converterListaParaInteiros()
