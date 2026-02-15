{/* Exercício 58: Escreva uma função que retorne a soma de todos os números pares em um array de números.
 Descrição: Neste exercício, você deve criar uma função que aceita um array de números como argumento e retorna a soma de todos os números pares desse array. */}

 function somaNumerosPares(arrayNumeros){

    const soma = arrayNumeros.reduce(function(acumulador,valorAtual){
        if(valorAtual % 2 === 0){
            acumulador = acumulador + valorAtual;
            return acumulador;
        }else{
            return acumulador;
        };
    },0);

    return soma;
 }

 console.log(somaNumerosPares([1,2,3,4,5,6,7,8,9,10]));