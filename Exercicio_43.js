{/*Exercício 43: Usando um laço while, crie um programa que determine se um número é palíndromo ou não (um número é palíndromo se for igual ao seu reverso). */}
{/*Descrição: Neste exercício, você precisa criar um programa que determina se um número é um palíndromo. Um número é considerado um palíndromo se for o mesmo lido de trás para frente. Por exemplo, o número 12321 é um palíndromo.*/}

let i = 0;
let numero = "12321";
let numeroInvertido = "";

while(i < numero.length){

    let digito = Number(numero[numero.length - 1 - i]);
    numeroInvertido = numeroInvertido + digito;
    i++;
}

if(numero === numeroInvertido){
    console.log(`O número ${numero} é um Palíndromo.`);
    console.log(`${numero} invertido é ${numeroInvertido}.`);   
}else{
    console.log(`O número ${numero} NÃO é um Palindromo.`);
    console.log(`${numero} invertido é ${numeroInvertido}.`);    
};
