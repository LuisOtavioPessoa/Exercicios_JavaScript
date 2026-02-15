{/*  Exercício 51: Escreva uma função que calcule o fatorial de um número. Descrição: O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o número. 
Por exemplo, o fatorial de 5 é 5*4*3*2*1 = 120. Neste exercício, você deve criar uma função que calcule o fatorial de um número. */}

function fatorial(num){
let total = 1;
    for(let i = 1; i <= num; i++){
        total = total * i;
    }
    return total;
}

console.log(fatorial(5));