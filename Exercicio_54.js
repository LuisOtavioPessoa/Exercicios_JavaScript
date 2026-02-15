{/* Exercício 54: Escreva uma função que ordene um array de números em ordem decrescente. 
Descrição: Neste exercício, você deve escrever uma função que receba um array de números como argumento e retorne um novo array com os números ordenados em ordem decrescente. */}

function ordeneArrayNumeros(arrayNumeros){

    let arrayOrdemDecrescente = [];

    while(arrayNumeros.length > 0){

        const maior = arrayNumeros.reduce(function(acumulador, numero){
            return numero > acumulador ? numero : acumulador;
        },arrayNumeros[0]);
        
        arrayOrdemDecrescente.push(maior);

        let indiceNumeroExcluido = arrayNumeros.indexOf(maior);

        if(indiceNumeroExcluido !== -1){
            arrayNumeros.splice(indiceNumeroExcluido,1)
        }
    }

    return arrayOrdemDecrescente;

}

console.log(ordeneArrayNumeros([2,5,7,3,8,12,20,10,2]))

// ---RESOLUÇÃO DO LIVRO---

// function ordenarDecrescente (array) {     
//    return  array.sort((a, b) => b - a); 
//  } 
// console .log(ordenarDecrescente([ 5 , 2 , 1 , 3 , 4 ])); // Saída: [5, 4, 3, 2, 1]