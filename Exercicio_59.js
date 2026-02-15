{/* Exercício 59: Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados.
Descrição:  Neste exercício, você deve criar uma função que receba um array de números como argumento e retorne um novo array em que cada número seja duplicado. */}

function numerosDuplicados(arrayNumeros){

    const arrayDuplicado = arrayNumeros.map(function(numero){
        return numero = numero * 2;
    });
    return arrayDuplicado;
}

console.log(numerosDuplicados([1,2,3,4,5,6,7,8,9,10]));