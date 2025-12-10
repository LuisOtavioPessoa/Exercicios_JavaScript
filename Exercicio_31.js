{/*Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária. Descrição: Neste exercício, você vai simular um jogo onde o usuário "pensa" em um número de 1 a 100 e o programa deve adivinhar o número usando o método de busca binária. Para simplificar, vamos supor que o número pensado pelo usuário é 50.
Neste exercício, você vai simular um jogo onde o usuário "pensa" em um número de 1 a 100 e o programa deve adivinhar o número usando o método de busca binária. Para simplificar, vamos supor que o número pensado pelo usuário é 50. */}

let limiteMinimo = 1;
let limiteMaximo = 100;
let chute = Math.floor((limiteMinimo + limiteMaximo) / 2);
let numeroPensado = 50;

while( chute !== numeroPensado){
    if(chute > numeroPensado){
        limiteMaximo = chute - 1;
        chute = Math.floor((limiteMinimo + limiteMaximo) / 2);
    }if(chute < numeroPensado){
        limiteMinimo = chute + 1;
        chute = Math.floor((limiteMinimo + limiteMaximo) / 2);
    }
}
console.log(`O número pensado foi: ${chute} Acertou!`);