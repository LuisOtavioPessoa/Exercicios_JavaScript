{/* Exercício 48: Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar. */}

function imparOuPar(numero){
    if(numero % 2 === 0) return `${numero} é Par.`;
    return `${numero} é Ímpar.`;
}
console.log(imparOuPar(2));
console.log(imparOuPar(9));