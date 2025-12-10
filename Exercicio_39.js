{/*Usando um laço for, crie um programa que calcule o fatorial de um número.
 Descrição: Neste exercício, você precisa criar um programa que calcula o fatorial de um número. O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o número. Por exemplo, o fatorial de 5 (representado por 5!) é 1 * 2 * 3 * 4 * 5 = 120.*/}

let numero = 5;
let total = 1;

for(let i = 1; i <= numero; i++){

    total *= i; 
    //total = total * i

}

console.log(`O fatorial de ${numero} é ${total}`);
