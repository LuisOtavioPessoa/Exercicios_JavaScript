// Exercício 65: Escreva uma função que aceite um array de números e uma função de callback e retorne a soma de todos os números do array após a aplicação da função de callback. Descrição:  Neste exercício, você deve criar uma função de alta ordem que receba um array de números e uma função de callback como argumentos, e retorne a soma de todos os números do array depois de aplicar a função de callback a cada número.

{/* 1° SOLUÇÃO -> INTERPRETAÇÃO MAIS LITERAL DO EXERCÍCIO */}

function somaNumerosCallback(arrayNumeros, Callback){

    let acumulador = 0;

    for(let i = 0; i < arrayNumeros.length; i++){

        let numero = arrayNumeros[i];

        let numeroTransformado = Callback(numero);

        acumulador = acumulador + numeroTransformado;
    }

    return acumulador;
}

function Callback(numero){
     return numero;
}

console.log(somaNumerosCallback([1,2,3,4,5], Callback));


{/* 2° SOLUÇÃO -> INTERPRETAÇÃO APÓS TER VISTO A SOLUÇÃO NO LIVRO */}


function somaNumerosCallback(arrayNumeros, Callback){

    const novoArray = arrayNumeros.map(Callback)
    .reduce((acumulador, valor) => acumulador + valor, 0);

    return novoArray;
}

function Callback(numero){
     return numero * 2;
}

console.log(somaNumerosCallback([1,2,3,4,5], Callback));