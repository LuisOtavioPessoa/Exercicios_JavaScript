{/* Exercício 49: Escreva uma função que aceite três números como argumentos e retorne o maior deles. */}

function maiorNumero(n1,n2,n3){
    let maior = n1;

    if(n2 > maior){
        maior = n2;
    };

    if(n3 > maior){
        maior = n3;
    };

    return maior;
}

console.log(maiorNumero(20,15,10));

{/* OUTRO MÉTODO 

function maiorNumero(n1,n2,n3){
    return Math.max(n1,n2,n3);
}

console.log(maiorNumero(10,5,3));
*/} 