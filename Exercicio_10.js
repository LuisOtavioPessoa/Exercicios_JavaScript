{/* Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7) */}

function mediaNotas(nota1, nota2){

    if(nota1 < 0 || nota2 < 0){
        console.log("Erro: Nota não pode ser negativa!");
        return; 
    }

    let media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Media do Aluno: " + media + ". Aluno Aprovado!");
    }else{
        console.log("Media do Aluno: " + media + ". Aluno Reprovado!");
    }
}

mediaNotas(7, 7);