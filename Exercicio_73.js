// Exercício 73: Escreva uma função de alta ordem que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, a cada "n" milissegundos. Descrição:  Neste exercício, você deve criar uma função de alta ordem que receba um número, um array de funções de callback e um valor inicial como argumentos, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, a cada "n" milissegundos. Isso é conhecido como programação assíncrona. 

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

function executarEmMilisegundos(callback, tempoMilisegundos, numero, arrayFuncoes, valorInicial){

    let contador = 0;

    const intervalo = setInterval(function() {
        console.log('Executou');
        callback(numero, arrayFuncoes, valorInicial);

        contador++;

        if(contador === numero){
            clearInterval(intervalo);
            console.log("Parou!");
        }

    }, tempoMilisegundos);
}

function aplicarCallbackXVezes(numero, arrayFuncoes, valorInicial){

    for(let i = 1; i <= numero; i++){
        valorInicial = arrayFuncoes[0](valorInicial);
        valorInicial = arrayFuncoes[1](valorInicial);
        valorInicial = arrayFuncoes[2](valorInicial);
    }

    console.log(valorInicial);

}

executarEmMilisegundos(aplicarCallbackXVezes, 3000, 3, arrayDeFuncoes, 10);