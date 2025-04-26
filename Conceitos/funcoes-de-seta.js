// função de seta / flecha

const exibirNomeDog = (nome) => {
  console.log(nome)
}

const exibirPorteDog = (porte = 'ND') => {
  console.log(porte)
}

const obterNomeDoDogFormatado = (nome) => {
  return nome.toUpperCase()
}

const obterObjetoDog = () => {
  return {
    nome: 'Bailey Maria',
    peso: 11.5,
    dogIrmao: {
      nome: 'Billy'
    },
    adotado: true
  }
}

// arrow function sem bloco + return 'automático'
const dobrar = (numero) => numero * 2

const listarObjetosDog = () => {
  return [
    {
      nome: 'Bailey Maria',
      peso: 11.5
    },
    {
      nome: 'Bailey Maria',
      peso: 11.5
    }
  ]
}

const listarNomesDeDogs = () => {
  const nomes = [
    'Pituca',
    'Marea',
    'Anderson'
  ]
  
  console.log(`Passou pela função listarNomesDeDogs`)
  return nomes
}

// Chamadas corretas das funções
exibirNomeDog("Pipoca")
exibirPorteDog()
console.log(obterNomeDoDogFormatado("Bailey Maria"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())

console.log(`--------`)
