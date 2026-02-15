// Exercício 66: Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro. Descrição:  Neste exercício, você deve criar uma função de alta ordem que receba uma função de callback e um array como argumentos, e retorne um novo array que contenha apenas os elementos para os quais a função de callback retornou verdadeiro.


function condicaoCallback(arrayNumeros, Callback){

    const novoArray = arrayNumeros.filter(Callback);

    return novoArray;
}

function Callback(numero){
   if (numero % 2 === 0) return true;
}

console.log(condicaoCallback([1,2,3,4,5,6,7,8,9,10], Callback));
