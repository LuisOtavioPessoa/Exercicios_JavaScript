{/*{/*Usando um laço for, imprima todos os números perfeitos de 1 a 100 (um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número).
Neste exercício, você deve imprimir todos os números perfeitos de 1 a 100. Um número é considerado perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número. Por exemplo, o número 6 é perfeito, porque seus divisores são 1, 2 e 3, e 1 + 2 + 3 = 6.*/}

let numerosPerfeitos = [];

for(let i = 1; i <= 100; i++){
let somaDivisores = 0;

    for(let divisor = 1; divisor < i; divisor++){
        if(i % divisor === 0){
            somaDivisores  += divisor;
        }
    }

    if(somaDivisores === i){
        numerosPerfeitos.push(i);
    }
}

console.log(numerosPerfeitos);
