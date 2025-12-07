{/* Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo. Descrição:  Neste exercício, você vai criar uma função que recebe três números como argumentos: um número a ser verificado, o limite inferior e o limite superior do intervalo. A função deve imprimir se o número está dentro do intervalo ou não. */}

function verificaNumeroIntervalo(verificaNumero, limiteInferior, limiteSuperior){

    if( verificaNumero >= limiteInferior && verificaNumero <= limiteSuperior){
        console.log(`O número: ${verificaNumero} está no limite dos números ${limiteInferior} e ${limiteSuperior}`);
    }else{
        console.log(`O número: ${verificaNumero} NÃO está no limite dos números ${limiteInferior} e ${limiteSuperior}`);
    }
}

verificaNumeroIntervalo(5,1,10);