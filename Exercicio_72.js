// Exercício 72: Escreva uma função que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado. Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um número, um array de funções de callback e um valor inicial como argumentos, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado.

const arrayDeFuncoes = [
    funcaoSoma,
    funcaoDobro,
    funcaoDiminui
];

function funcaoSoma(numero){
    return numero + numero;
}

function funcaoDobro(numero){
    return numero * 2;
}

function funcaoDiminui(numero){
    return numero - 2;
}

function aplicarCallbackXVezes(numero, arrayFuncoes, valorInicial){

    for(let i = 1; i <= numero; i++){
        valorInicial = arrayFuncoes[0](valorInicial);
        valorInicial = arrayFuncoes[1](valorInicial);
        valorInicial = arrayFuncoes[2](valorInicial);
    }
    
    return valorInicial;

}

console.log(aplicarCallbackXVezes(3, arrayDeFuncoes, 10));