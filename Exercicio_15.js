{/*Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.*/}

function palavraPalindromo(palavra){

    const palavraRecebida = palavra.toLowerCase();
    const palavraInvertida =palavraRecebida .split('').reverse().join('');

    if( palavraRecebida  ==  palavraInvertida){
        console.log(`A palavra ${palavraRecebida } é um Palíndromo.`);
        console.log(`${palavraRecebida } invertido é ${ palavraInvertida}.`);
    }else{
        console.log(`A palavra ${palavraRecebida } não é um Palindromo.`);
        console.log(`${palavraRecebida } invertido é ${ palavraInvertida}.`);
    }
};

palavraPalindromo("Ama");