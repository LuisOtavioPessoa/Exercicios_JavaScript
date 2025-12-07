{/* Exercício 23: Escreva um programa que verifica as cores de um semafáro. 
Descrição:  Neste exercício, você deve criar uma função que recebe uma cor, e imprime no console o que essa cor representa, o console deve imprimir uma mensagem específica para cores que não existem em um semáforo..*/}

function verificaCorSemaforo(corSemaforo){

    switch(corSemaforo){
        case "Vermelho":
            console.log("Parada obrigatória" );
		    break;
        case "Amarelo":
            console.log("Atenção.");
            break;    
        case "Verde":
            console.log("Pode seguir.");
            break;  
        default:
            console.log(`${corSemaforo}. Cor inválida.`);
            break;
    }

};

verificaCorSemaforo("Vermelho");
verificaCorSemaforo("Amarelo");
verificaCorSemaforo("Verde");
verificaCorSemaforo("Rosa");