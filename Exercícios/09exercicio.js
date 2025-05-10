let voltasAteCansar = 5

const contarVoltasDoguinho = (voltasAteCansar) => {
    for(let quantidadeVoltas = 1; quantidadeVoltas <= voltasAteCansar; quantidadeVoltas++ ) {
        console.log(`Completei a volta de nº ${quantidadeVoltas}`)
        if (quantidadeVoltas >= voltasAteCansar) {
            console.log(`Cansei na volta ${quantidadeVoltas}. Estou satisfeito`)
        } else {
            console.log(`Não estou satisfeito!`)
        } 
    }   
}

contarVoltasDoguinho(4)