let meuTexto = 'Oi, eu sou o Wesley, tenho 27 anos, casado com a Gisele. Temos uma filha de 3 aninhos e 2 cachorros, o Sam e a Panda.'

const filtrarNumerosDoTexto = () => { let filtrarNumeros = meuTexto.match(/\d+/g)
    console.log(filtrarNumeros.map(Number))
}

filtrarNumerosDoTexto()


