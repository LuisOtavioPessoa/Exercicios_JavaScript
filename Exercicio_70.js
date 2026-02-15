// Exercício 70: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de callback ao valor. Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um array de funções de callback e um valor como argumentos, e retorne um array que contenha os resultados de aplicar cada função de callback ao valor. 

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

function aplicarCallback(arrayFuncoes, numero){

    const arrayDeResultados = [];
    let resultado = 0;

    for(let i = 0; i < arrayFuncoes.length; i++){
        resultado = arrayFuncoes[i](numero);
        arrayDeResultados.push(resultado);
    }

    return arrayDeResultados;

}

console.log(aplicarCallback(arrayDeFuncoes, 10));