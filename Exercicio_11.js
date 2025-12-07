{/* Escreva um programa que verifica se uma pessoa pode votar com base na idade */}

function verificaIdadeVotar(idade){

    if(idade < 0 ){
        console.log("Idade não pode ser menor que zero.")
        return;
    }

    if(idade >= 18 && idade < 70 ){
        console.log("Voto obrigatório.");
    }else if((idade >= 16 && idade < 18) || idade >= 70){
        console.log("Voto facultativo")
    }else{
        console.log("Não vota.")
    }
}

verificaIdadeVotar(-1);
verificaIdadeVotar(15);
verificaIdadeVotar(16);
verificaIdadeVotar(18);
verificaIdadeVotar(70);