// Exercício 93: Dado um array de números, encontre a mediana.


const arrayNumeros = [2, 4, 6, 1, 10, 12,];

function calcularMediana(array){

    array.sort((a,b) => a- b);
    
    if(array.length % 2 === 0){
        let meio = Math.floor(array.length / 2);
        let numMeio1 = array[meio - 1];
        let numMeio2 = array[meio];

        return (numMeio1 + numMeio2) / 2;
    }else{
        let numMeio = Math.floor(array.length / 2)
        return array[numMeio];
    };
}

console.log(calcularMediana(arrayNumeros));

