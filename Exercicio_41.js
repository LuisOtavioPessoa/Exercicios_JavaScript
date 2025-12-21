{/*Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário. 
Descrição: Neste exercício, você precisa criar um programa que transforma um número decimal em um número binário. Por exemplo, o número decimal 10 transformado em binário é 1010. */}

let numeroAtual = 10;
let numeroBinario = [];

do{
    let resto = numeroAtual % 2;
    numeroBinario.push(resto);
    numeroAtual = Math.floor(numeroAtual / 2);

}while(numeroAtual > 0);

console.log(numeroBinario.reverse().join(''));