{/* Escreva um programa que verifica se um ano é bissexto.
Dica: Um ano é bissexto se for divisível por 4, exceto os que são divisíveis por 100 mas não por 400.*/}

function anoBissexto (ano) {

    if( ano % 4 == 0 ) {
        if(ano % 100 == 0 && (ano % 400 != 0)){
           console.log("O ano de " + ano + " NAO e bissexto.");
           return;
        }
        console.log("O ano de " + ano + " e bissexto.");
    }else {
        console.log("O ano de " + ano + " NAO é bissexto.");
    }
}

anoBissexto(1900);
anoBissexto(2000);
anoBissexto(2023);
anoBissexto(2024);
