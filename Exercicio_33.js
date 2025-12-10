{/*Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci. Descrição: Neste exercício, você precisa imprimir os primeiros 10 números da sequência de Fibonacci.
Descrição: Neste exercício, você precisa imprimir os primeiros 10 números da sequência de Fibonacci. A sequência de Fibonacci é uma sequência de números onde cada número subsequente é a soma dos dois anteriores. Ela começa assim: 0, 1, 1, 2, 3, 5, 8, 13... */}

let sequenciaFibonacci = [0 , 1];
for(let i = 0; i <= 6; i++){

    let proximoNumero = sequenciaFibonacci[i] + sequenciaFibonacci[i + 1];
    sequenciaFibonacci.push(proximoNumero);
}

console.log(sequenciaFibonacci);