// Exercício 94: Dado um array de strings e um número n, retorne um novo array contendo apenas as strings que têm mais de n caracteres.

const arrayStrings = ["tecnologia", "stack", "programador", "java", "react", "dev", "logica", "php"];


function arrayNCaracteres(array, num){

    const novoArray = array.filter(string => string.length > num);
    return novoArray;

}

console.log(arrayNCaracteres(arrayStrings, 5));