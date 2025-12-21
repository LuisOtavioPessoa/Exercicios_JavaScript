{/*Usando um laço do-while, crie um programa que imprima a soma de duas matrizes. 
Descrição: Neste exercício, você deve criar um programa que soma duas matrizes.As matrizes são listas bidimensionais de números. A soma de duas matrizes é obtida somando os elementos correspondentes de cada matriz.*/}

const matrizA = [
  [1, 2], // Primeira linha (índice 0)
  [5, 4]  // Segunda linha (índice 1)
];

const matrizB = [
  [1, 2], // Primeira linha (índice 0)
  [5, 4]  // Segunda linha (índice 1)
];

const matrizFinal = [];

let i = 0;

do{
  let j = 0;
  matrizFinal[i] = []

  do{
    matrizFinal[i][j] = matrizA[i][j] + matrizB[i][j];
    j++
  }while(j < matrizA[i].length);

  i++
} while (i < matrizA.length);

console.log(matrizFinal);

{/* 
    i controla as linhas
    j controla as colunas
    matrizFinal[i][j] recebe a soma direta das posições correspondentes
    Usa exatamente o conceito de matriz bidimensional 
*/}