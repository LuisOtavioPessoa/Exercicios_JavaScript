{/*Usando um laço for, imprima todos os números primos de 1 a 100. */}

let numerosPrimos = [1];

for ( let i = 2; i <= 100; i++){

    let ePrimo = true;

    for( let divisor = 2; divisor < i; divisor++){
        if( i % divisor === 0){
            ePrimo = false;
            break;
        }  
    }

    if( ePrimo ){
        numerosPrimos = [...numerosPrimos , i];
    }
}

console.log(numerosPrimos);