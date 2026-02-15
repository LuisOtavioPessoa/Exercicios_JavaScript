// Exercício 75: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um novo array que contém os resultados de aplicar a função de callback ao valor, na ordem inversa. Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um array de funções de callback e um valor como argumentos, e retorne um novo array que contenha os resultados de aplicar cada função de callback ao valor, na ordem inversa.

const arrayDeFuncoes = [
    funcaoSoma,
    funcaoDividir,
    funcaoDiminui
];

function funcaoSoma(numero){
    return numero + numero;
}

function funcaoDividir(numero){
    return numero / 2;
}

function funcaoDiminui(numero){
    return numero - 2;
}

function aplicarCallbackInverso(arrayFuncoes, numero){

    const arrayDeResultados = [];
    let resultado = 0;

    for(let i = 0; i < arrayFuncoes.length; i++){
        resultado = arrayFuncoes[arrayFuncoes.length - 1 - i ](numero);
        arrayDeResultados.push(resultado);
    }

    return arrayDeResultados;

}

console.log(aplicarCallbackInverso(arrayDeFuncoes, 10));