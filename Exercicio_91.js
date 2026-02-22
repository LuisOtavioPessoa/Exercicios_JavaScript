// Exercício 91: Dado um array de strings, ordene-o em ordem decrescente com base no comprimento de cada string.

const linguagens = ['Java' , 'PHP',  'C+' ,'JavaScript' ,'Python'];

const linguagensOrdemDecrescente = [];

function arrayOrdemDecrescente(array, arrayDecrescente){

 while(array.length > 0){

    let maiorPalavra = array
    .reduce((ac, palavra) => palavra.length > ac.length ? palavra : ac, "");

    arrayDecrescente.push(maiorPalavra);

    array = array.filter(item => item !== maiorPalavra);
 }

    return arrayDecrescente;
    
};

console.log(arrayOrdemDecrescente(linguagens, linguagensOrdemDecrescente));

