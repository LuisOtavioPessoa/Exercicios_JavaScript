{/*Exercício 52: Escreva uma função que calcule o n-ésimo número de Fibonacci. 
Descrição: A sequência de Fibonacci começa com os números 0 e 1, e cada número subsequente é a soma dos dois números anteriores. Neste exercício, você deve escrever uma função que retorne o n-ésimo número da sequência de Fibonacci.*/}

function sequenciaFibonacci(numero){

    let numeroAntecessor = 0;
    let numeroSucessor = 1;
    let termo = 0;

    if(numero === 0){
        return 0;
    }

    if(numero === 1){
        return 1;
    }

    for(let i = 2; i <= numero; i++){

        termo = numeroAntecessor + numeroSucessor;

        numeroAntecessor = numeroSucessor;

        numeroSucessor = termo;

    }
    return termo;
}

console.log(sequenciaFibonacci(7));