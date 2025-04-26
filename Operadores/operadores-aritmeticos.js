/**
  + adição
  - subtração
  * multiplicação
  / divisão
  % resto
  ** exponencial
 */

  console.log(1 + 1) // 2
  console.log(10 - 7) // 3
  console.log(2 * 2) // 4
  
  console.log(11 / 2)
  console.log(11 % 2)
  
  console.log(4 ** 4)
  
  console.log(2 + 3 * 4) //  precedencia - multiplicao, adicao
  console.log((2 + 3) * 4) //  precedência - dentro do parenteses, depois o que está fora
  
  // 3 * 4 == 12
  // 12 + 2 == 14

  console.log("5" * 2)

  console.log(11 / 2) // 5.5
  console.log(parseInt(11 / 2)) // 5.5 -> 5

  // arredondamento

  console.log(Math.floor(5.8))
  console.log(Math.round(5.8))

  console.log(2.36732.toFixed(2))

  //arredondamento pra cima
  console.log(Math.ceil(5.8))