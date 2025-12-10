{/*Exercício 38: Usando um laço do-while, imprima a soma dos cubos dos primeiros 10 números naturais. 
Descrição:  Neste exercício, você deve calcular e imprimir a soma dos cubos dos primeiros 10 números naturais. Os números naturais são os números positivos começando em 1, então os primeiros 10 números naturais são 1, 2, 3, ..., 10, e os seus cubos são 1, 8, 27, ..., 1000.*/}

let i = 1;
let somaTotal = 0;

while(i <= 10){
    somaCubos = i ** 3;
    somaTotal += somaCubos;
    i++;
}

console.log(somaTotal);