{/*Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais.
Descrição: Neste exercício, você deve calcular e imprimir a soma dos quadrados dos primeiros 10 números naturais. Os números naturais são os números positivos começando em 1, então os primeiros 10 números naturais são 1, 2, 3, ..., 10, e os seus quadrados são 1, 4, 9, ..., 100. */}

let i = 1;
let somaTotal = 0;

while( i <= 10){
    somaQuadrados = i ** 2;
    somaTotal += somaQuadrados;
    i++;
}

console.log(somaTotal);

