{/*Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade. */}

function podeDirigir(idade){

    if(idade >= 18){
        console.log(`Idade: ${idade}. Pode dirigir.`);
    }else{
        console.log(`Idade: ${idade}. Não pode dirigir.`);
    }
}

podeDirigir(18);
podeDirigir(17);
