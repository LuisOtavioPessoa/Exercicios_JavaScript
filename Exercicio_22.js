{/*Exercício 22: Escreva um programa que determina o número de dias em um mês.
Descrição:  Neste exercício, você criará uma função que recebe o número de um mês e imprime o número de dias desse mês. */}

function diasDoMes(mes){

    if( mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 ||  mes == 12 ){
        console.log(`O Mês ${mes} tem 31 dias`);
    }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11 ){
        console.log(`O Mês ${mes} tem 30 dias`);
    }else{
        console.log(`O Mês ${mes} tem 28 dias ou 29 dias em ano bissexto`);
    }
}

diasDoMes(2);
diasDoMes(5);
diasDoMes(11);