const peso = 10
const nome = 'Pipoca'

/* aqui sem função, apenas para exercitar
const porte = peso <= 10 ? 'pequeno' : 'médio'
    console.log(`O seu cachorro é de porte ${porte}`)*/


//mesmo resultado usando função de seta
const classificarDog = (nome, peso) => {
        porte = peso <= 10 ? 'pequeno' : 'médio'
        console.log(`Nome:  ${nome}`)
        console.log(`Peso: ${peso}`)
        console.log(`Porte: ${porte}`)
    }

classificarDog('Pipoca', 15)
classificarDog('Panda', 35)
classificarDog('Linguicinha', 4)