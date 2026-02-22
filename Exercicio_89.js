// Exercício 89: Dada uma string com várias palavras separadas por espaços, transforme-a em um array e depois retorne a palavra mais longa. Descrição: Você deve criar uma função que aceite uma string e retorne a palavra mais longa encontrada.

const linguagens = "Java PHP C+ JavaScript Python";

function palavraMaisLonga(string) {

    const arrayDeLinguagens = string.split(" ");

    const maiorPalavra = arrayDeLinguagens
        .reduce((ac, palavra) => palavra.length > ac.length ? palavra : ac, "" );

    return maiorPalavra;

}

console.log(palavraMaisLonga(linguagens));
