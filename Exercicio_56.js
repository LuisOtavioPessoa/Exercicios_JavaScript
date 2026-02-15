{/* Exercício 56: Escreva uma função que retorne o maior número em um array de números.
Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento e retorna o maior número desse array. */}

function retornarMenorNumero(arrayNumeros){
    return Math.max(...arrayNumeros);
}

console.log(retornarMenorNumero([2,9,5,10,1]));