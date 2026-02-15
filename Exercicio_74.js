// Exercício 74: Escreva uma função de alta ordem que aceite uma função de callback e um array, e retorne um novo array que contém os resultados de aplicar a função de callback a cada elemento do array, sem alterar o array original. Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de callback e um array como argumentos, e retorne um novo array que contenha os resultados de aplicar a função de callback a cada elemento do array. A função de callback deve ser uma função pura, ou seja, não deve alterar o estado do array original. 

const arrayNumeros = [2, 3, 4];

function elementoArrayCallback(array, Callback){

    const novoArray = [];

    for(let i = 0; i < array.length; i++){
        let resultado = Callback(array[i]);
        novoArray.push(resultado);
    }
    return novoArray;
}

function Callback(numeroAtualArray){
    let resultado = 10 * numeroAtualArray;
    return resultado;
}

console.log(elementoArrayCallback(arrayNumeros,Callback));
