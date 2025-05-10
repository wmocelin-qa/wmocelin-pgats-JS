import {caes} from './12.01exercicios.js';

const entregarPetiscos = (listaCaes) => {
    listaCaes.forEach((caes) => {
        console.log(`Dando petisco para ${caes}`);
    });     
};

entregarPetiscos(caes)