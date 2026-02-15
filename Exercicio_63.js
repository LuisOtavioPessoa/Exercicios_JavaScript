{/*Exercício 63: Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número. 
Descrição: Neste exercício, você deve criar uma função que receba um número como argumento e retorne um array com todos os números primos até aquele número. */}

function numerosPrimos(numeroLimite){

    let arrayNumerosPrimos = [];
   
    for ( let i = 2; i <= numeroLimite; i++){

        let ePrimo = true;

        for(let divisor = 2; divisor < i; divisor++){
            if(i % divisor === 0){
                ePrimo = false;
                break;
            }
        }

        if( ePrimo ){
            arrayNumerosPrimos.push(i);
        }
    }

    return arrayNumerosPrimos;
};

console.log(numerosPrimos(15));