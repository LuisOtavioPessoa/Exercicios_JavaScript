{/*Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador. Descrição: Neste exercício, você vai simular um jogo de "Pedra, papel e tesoura" contra o computador. Para simplificar, vamos supor que a escolha do usuário é sempre "pedra".*/}

let escolhaUsuario = "Pedra";
let opcoes = ["Pedra", "Papel", "Tesoura"];
let i = 1
let numeroJogadas = 3;
let pontuacaoUsuario = 0;
let pontuacaoMaquina = 0;
do{
    let indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    let escolhaMaquina = opcoes[indiceAleatorio];
    switch(escolhaMaquina){
    
    case "Pedra":
        console.log(`Usuário escolheu: ${escolhaUsuario}`);
        console.log(`Máquina escolheu: ${escolhaMaquina}`);
        console.log(`Empate!`);
        console.log(`--------------`);
        i++;
    break;
    case "Papel":
        console.log(`Usuário escolheu: ${escolhaUsuario}`);
        console.log(`Máquina escolheu: ${escolhaMaquina}`);
        console.log(`Máquina Venceu!`);
        console.log(`--------------`);
        i++;
        pontuacaoMaquina++;
    break;   
    case "Tesoura":
        console.log(`Usuário escolheu: ${escolhaUsuario}`);
        console.log(`Máquina escolheu: ${escolhaMaquina}`);
        console.log(`Usuário Venceu!`);
        console.log(`--------------`);
        i++;
        pontuacaoUsuario++;
    break;
}
}while( i <= numeroJogadas);
console.log(`Pontuação do Usuário: ${pontuacaoUsuario}`);
console.log(`Pontuação da Máquina: ${pontuacaoMaquina}`);