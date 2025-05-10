let quantidadePetiscos = 5

const alimentarDog = (quantidadePetiscos) => {
    for(let contadorPetiscos = 1; contadorPetiscos <= quantidadePetiscos; contadorPetiscos++ ) {
        if (contadorPetiscos < quantidadePetiscos) {
            console.log(`Ganhei ${contadorPetiscos} petisco. Quero mais!`)
        } else {
            console.log(`Agora estou satisfeito!`)
        }
    }   
}

alimentarDog(6)
