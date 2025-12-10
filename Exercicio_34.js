{/*Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz).
Descrição: Neste exercício, você precisa imprimir os números de 1 a 100, mas com uma condição especial. Se um número for múltiplo de 3, deve imprimir "Fizz" em vez do número. Se for múltiplo de 5, deve imprimir "Buzz". E se for múltiplo de ambos (3 e 5), deve imprimir "FizzBuzz". */}

let i = 1;

while(i <= 100){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz`);
    }else if(i % 3 === 0){
        console.log(`Fizz`);
    }else if(i % 5 === 0){
        console.log(`Buzz`);
    }else{
        console.log(`${i}`);
    }
    i++;
};