{/*  Exercício 16: Escreva um programa que determina o maior entre três números. Descrição: Nesse exercício, você irá criar uma função que recebe três números como argumentos e imprime o maior deles.*/}

function verificarMaiorNumero(num1, num2, num3){

    let maior = num1;

    if(num2 > maior){
        maior = num2;
    }  
    if(num3 > maior){
        maior = num3;
    }
    console.log(`Maior n°: ${maior}`)
}

verificarMaiorNumero(7,8,6);