{/* Exercício 60: Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.
Descrição:  Neste exercício, você deve criar uma função que receba um array de números como argumento e retorne um novo array em que cada número seja elevado ao quadrado. */}

function numerosAoQuadrado(arrayNumeros){
    
    const arrayAoQuadrado = arrayNumeros.map(function(numero){
        return numero = numero * numero;
    });
    return arrayAoQuadrado;
}

console.log(numerosAoQuadrado([1,2,3,4,5,6,7,8,9,10]));