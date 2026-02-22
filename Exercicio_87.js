//  Exercício 87: Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os e, em seguida, filtre apenas os números que são múltiplos de 5.
//  Descrição: Você deve criar uma função que aceite dois arrays como argumento e retorne um novo array resultante da combinação dos dois, mas filtrado para conter apenas múltiplos de 5.

const arrayNumerosPares = [2,4,6,8,10,12,14];
const arrayNumerosImpares = [1,3,5,7,9,11,13,15];

function arrayMultiploCinco(arrayPares, arrayImpares) {
    
    const novoArray = [...arrayPares, ...arrayImpares];

    const numerosFiltrados = novoArray.filter(numero => numero % 5 === 0);
    
    return numerosFiltrados;
};

console.log(arrayMultiploCinco(arrayNumerosPares,arrayNumerosImpares));