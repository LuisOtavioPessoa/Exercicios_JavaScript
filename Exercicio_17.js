{/*Escreva um programa que determina se um número é par ou ímpar. */}

function nummeroParImpar(numero){

    if( numero % 2 === 0){
        console.log(`${numero} é Par`);
    } else{
        console.log(`${numero} é Impar`);
    }
}

nummeroParImpar(3);
nummeroParImpar(5);
nummeroParImpar(10);
nummeroParImpar(69);
nummeroParImpar(100);