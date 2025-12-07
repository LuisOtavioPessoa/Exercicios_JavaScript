{/*Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno. */}

function classificacaoNota(nota){
    if( nota >= 90){
        console.log(`Nota: ${nota}. Classificação: A`);
    }else if(nota < 90 && nota >= 70){
        console.log(`Nota: ${nota}. Classificação: B`);
    }else if(nota < 70 && nota >= 50){
        console.log(`Nota: ${nota}. Classificação: C`);
    }else{
        console.log(`Nota: ${nota}. Classificação: D`);
    }
}

classificacaoNota(90);
classificacaoNota(80);
classificacaoNota(60);
classificacaoNota(40);