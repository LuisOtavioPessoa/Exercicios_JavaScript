{/*Usando um laço while, crie um programa que inverta uma string.
Neste exercício, você precisa criar um programa que inverte uma string. Por exemplo, a string "Hello" invertida se torna "olleH".*/}

let string = "Hello";
let stringArray = string.split(''); // [H,e,l,l,o]

let stringArrayInvertida = [];
let stringInvertida = "";
let i = 1;

while(i <= stringArray.length){

let caracteres = '';

    caracteres = stringArray[stringArray.length - i];
    stringArrayInvertida.push(caracteres);
    i++
}

stringInvertida = stringArrayInvertida.join('');
console.log(`A string ${string} invertida é ${stringInvertida}`);