{/* Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa. */}

function calculadoraIMC (peso, altura){

    if(peso < 0 || altura < 0){
        console.log("Peso e (ou) Altura não pode ser negativo.");
        return;
    }

    let imc = (peso / (altura * altura)).toFixed(2);

    if(imc < 18.5){
        console.log("IMC:" + imc + " Abaixo do Peso.");
    } else if( imc >= 18.5 && imc < 25){
        console.log("IMC:" + imc + " Normal.");
    } else if( imc >= 25 && imc < 30){
        console.log("IMC:" + imc + " Sobrepeso.");
    }else{
        console.log("IMC:" + imc + " Obesidade.")
    }
}

calculadoraIMC(60, 1.70);
calculadoraIMC(80, 1.70);
calculadoraIMC(90, 1.70);