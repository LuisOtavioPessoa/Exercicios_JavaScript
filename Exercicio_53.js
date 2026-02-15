{/*Exercício 53: Escreva uma função que verifique se um número é primo. 
Descrição:  Um número é primo se for maior do que 1 e tiver apenas dois divisores distintos: 1 e ele mesmo. Neste exercício, você deve escrever uma função que recebe um número e retorna true se o número for primo e false caso contrário.*/}

function verificaNumeroPrimo(numero){

    let ePrimo = true;

    if(numero === 1){
        ePrimo = false;
        return ePrimo;
    }
    
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            ePrimo = false
            return ePrimo;
        }
    }
    return true;
};

console.log(verificaNumeroPrimo(2));
console.log(verificaNumeroPrimo(5));
console.log(verificaNumeroPrimo(10));