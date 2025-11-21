{/* Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero */}

function verificarNumero(num){
    if(num == 0){
        console.log(num + ": Número é Zero");
    }
    else if(num > 0){
        console.log(num + ": Número é Positivo");
    }else{
        console.log(num + ": Número é Negativo");
    }
}

verificarNumero(10);
verificarNumero(0);
verificarNumero(-5);