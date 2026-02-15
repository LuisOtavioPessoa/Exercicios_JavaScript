{/*Exercício 55: Escreva uma função que retorne o menor número em um array de números. 
Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento e retorna o menor número desse array. */}

function retornarMenorNumero(arrayNumeros){

    let menorNumero = Math.min(...arrayNumeros);
    return menorNumero;
    
}

console.log(retornarMenorNumero([2,9,5,10,1]));