{/*Exercício 35: Usando um laço for, imprima os primeiros 10 números triangulares (n*(n+1)/2). 
Neste exercício, você deve imprimir os primeiros 10 números triangulares. Um número triangular é obtido através da fórmula n*(n+1)/2, onde n é a posição do número na sequência. Por exemplo, os primeiros 5 números triangulares são 1, 3, 6, 10, 15...*/}

for(let i = 1; i <= 10; i++){

    let formula = i * (i + 1) / 2;
    console.log(formula);
}
