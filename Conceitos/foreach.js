const listaDeAlunos = [
    'Matheus',
    'Renata',
    'Leandro',
    'Ana',
    'Lucas'
  ]
  
  listaDeAlunos.forEach(aluno => {
    console.log(aluno)
  })
  
  const listaDeAlunosENotas = [
    {
      nome: 'Matheus',
      nota: 2
    },
    {
      nome: 'Renata',
      nota: 3
    },
    {
      nome: 'Leandro',
      nota: 6.9
    },
    {
      nome: 'Ana',
      nota: 9
    },
    {
      nome: 'Lucas',
      nota: 7
    }
  ]
  
  console.log(`------------------------`)
  
  listaDeAlunosENotas.forEach(aluno => {
  
    if (aluno.nota < 7) {
      console.log(`O aluno ${aluno.nome} precisa do trabalho extra`)
    }
  
    // console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
  })