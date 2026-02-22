// Exercício 90: Dado um array que contém vários elementos duplicados, crie uma função que remova todas as duplicatas e retorne um array com elementos únicos.

const arrayNumeros = [1,2,2,3,4,5,4,6,7,3,8,9];

function arrayElementosUnicos(array){

    const novoArray = [...new Set(array)];
    return novoArray;
}

console.log(arrayElementosUnicos(arrayNumeros));