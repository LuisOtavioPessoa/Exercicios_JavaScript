// Exercício 69: Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado. Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um número e uma função de callback como argumentos, e execute a função de callback o número de vezes especificado.

function exercicio(numero, Callback){

    for(let i = 0; i < numero; i++){
        Callback();
    }
}

function Callback(){
    console.log('Olá, Mundo!');
}

exercicio(5, Callback);