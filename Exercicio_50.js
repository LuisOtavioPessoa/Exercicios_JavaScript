{/*Exercício 50: Escreva uma função que aceite uma string como argumento e retorne a string invertida. */}

function stringInvertida(palavra){
    let strInvertida = palavra.split('').reverse().join('');
    return `${palavra} invertido(a) é ${strInvertida}`;
}

console.log(stringInvertida("amor"));