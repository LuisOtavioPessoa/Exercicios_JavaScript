{/*Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal. 
Descrição: Neste exercício, você deve criar um programa que converte um número binário em um número decimal. Por exemplo, o número binário 1010 convertido em decimal é 10.*/}


let numeroBinario = [1,0,1,0];
let somaResultados = 0;
let potenciacao = 1;

for(let i = 0; i < numeroBinario.length; i++ ){

    let resultado = numeroBinario[i] * (2 ** (numeroBinario.length - potenciacao));
    somaResultados += resultado;
    potenciacao++;
}

console.log(somaResultados);

{/* RESOLUÇÃO USANDO STRING */}
{/* 
    let numeroBinario = "1010";
    let somaResultados = 0;

    for (let i = 0; i < numeroBinario.length; i++) {
    let digito = Number(numeroBinario[i]);
    let potencia = numeroBinario.length - 1 - i;
    somaResultados += digito * (2 ** potencia);
    }

    console.log(somaResultados); // 10
*/}