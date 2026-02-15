{/*  Exercício 62: Escreva uma função que receba um número e retorne uma string repetida aquele número de vezes. 
Descrição:  Neste exercício, você deve criar uma função que receba um número como argumento e retorne uma string que é repetida aquele número de vezes. */}

function stringRepetida(numero){

    let string = "JavaScript";
    let frase = "";

    for(let i = 1; i <= numero; i++){
        frase = frase + " " + string;
    }

    return frase;
}

console.log(stringRepetida(5));


{/* 
    ---OUTRO MÉTODO---
    
    function stringRepetida(numero){

    let string = "JavaScript ";
    let frase = string.repeat(numero);
    return frase;
}
*/}