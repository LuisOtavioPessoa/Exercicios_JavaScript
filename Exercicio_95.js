// Exercício 95: Dado dois arrays, retorne um novo array que é a concatenação dos dois.
//Descrição: Você deve criar uma função que aceite dois arrays e retorne um novo array que é a concatenação de ambos.

const arrayFront = ["html", "css", "javascript", "react", "tailwind"];
const arrayBack = ["java", "php", "mongodb", "laravel"];

function concatenacaoArrays(array1, array2){

    const novoArray = [...array1, ...array2];
    return novoArray;

};

console.log(concatenacaoArrays(arrayFront, arrayBack))

