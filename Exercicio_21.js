{/* Exercício 21: Escreva um programa que determina a estação do ano com base no mês. 
    Descrição: Neste exercício, você criará uma função que recebe um número de 1 a 12 (representando os meses de janeiro a dezembro) e imprimirá a estação do ano correspondente.*/}

function estacaoDoAno(mes){

    let estacoesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    let mesAtual = estacoesDoAno[mes - 1];

    if(mesAtual == 'Dezembro' || mesAtual == 'Janeiro' || mesAtual == 'Fevereiro'){
        console.log(`Mês Atual: ${mesAtual}. Estação do Ano é Verão.`);
    }else if(mesAtual == 'Março' || mesAtual == 'Abril' || mesAtual == 'Maio'){
        console.log(`Mês Atual: ${mesAtual}. Estação do Ano é Outono.`);
    }else if(mesAtual == 'Junho' || mesAtual == 'Julho' || mesAtual == 'Agosto'){
        console.log(`Mês Atual: ${mesAtual}. Estação do Ano é Inverno.`);
    }else{
        console.log(`Mês Atual: ${mesAtual}. Estação do Ano é Primavera.`);
    }
}

estacaoDoAno(1);
estacaoDoAno(3);
estacaoDoAno(7);
estacaoDoAno(11);