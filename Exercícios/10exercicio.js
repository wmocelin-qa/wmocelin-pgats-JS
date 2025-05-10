/*const alimentarDog = (quantidadePetiscos) => {
    for(let contadorPetiscos = 1; contadorPetiscos <= quantidadePetiscos; contadorPetiscos++ ) {
        if (contadorPetiscos < quantidadePetiscos) {
            console.log(`Ganhei ${contadorPetiscos} petisco. Quero mais!`)
        } else {
            console.log(`Agora estou satisfeito!`)
        }
    }   
}

alimentarDog(6)*/

//usando ternários
const alimentarDog = (quantidadePetiscos) => {
    for (let i = 1; i <= quantidadePetiscos; i++) {
        console.log(i < quantidadePetiscos ? `Ganhei ${i} petisco. Quero mais!` : 'Agora estou satisfeito!');
    }
}

alimentarDog(6);
