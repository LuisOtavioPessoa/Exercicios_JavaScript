{/*Exercício 57: Escreva uma função que retorne a soma de todos os números ímpares em um array de números.
Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento e retorna a soma de todos os números ímpares desse array. */}

function somaNumerosImpares(arrayNumeros){

    let soma = 0;

    for (let numero of arrayNumeros){
        if(numero % 2 !== 0){
            soma = soma + numero;
        }
    }

    return soma;
}

console.log(somaNumerosImpares([1,2,3,4,5,6,7,8,9,10])); //25