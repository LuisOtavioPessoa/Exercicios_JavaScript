{/* Escreva um programa que verifica a situação de um estudante de acordo com sua média final */}

function verificaMediaFinal (n1, n2, n3, n4){

    if( n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0){
        console.log("As notas não podem ser negativas.");
        return;
    }

    let media = (n1 + n2 + n3 + n4) / 4;

    if(media >= 7){
        console.log("Estudante Aprovado, com media " + media);
    }else if(media >= 5 && media <= 6.9){
        console.log("Estudante em recuperacao, com media " + media);
    }else{
        console.log("Estudante reprovado, com media " + media);
    }
}

verificaMediaFinal(4, 3, 7, 5);
