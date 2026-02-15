{/* Exercício 61: Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada de todos os números. Descrição: Neste exercício, você deve criar uma função que receba um array de números como argumento e retorne um novo array em que cada número seja a raiz quadrada do número original. */}

function numerosRaizQuadrada(arrayNumeros){

    const arrayRaizQuadrada = arrayNumeros.map(function(numero){
        return Math.sqrt(numero);
    });

    return arrayRaizQuadrada;
}

console.log(numerosRaizQuadrada([25,4,1,9,16,100]));