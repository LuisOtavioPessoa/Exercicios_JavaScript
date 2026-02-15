{/*Exercício 64: Escreva uma função que receba uma string e retorne o número de palavras na string. */}

function numeroPalavrasString(frase){

    let palavras = frase.split(" ");
    return palavras.length;
}

console.log(numeroPalavrasString("Eu amo JavaScript"));






