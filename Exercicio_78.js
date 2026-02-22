// Exercício 78: Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7). 
// Descrição: Neste exercício, você precisa criar um objeto que represente um cachorro. Este objeto deve ter propriedades para raça, nome e idade. Em seguida, adicione um método que converta a idade do cachorro em anos humanos (multiplique a idade do cachorro por 7).

const cachorro = {
    raca: "Dobermann",
    nome: "Posturado",
    idade: 3,

    idadeHumana(){
        return `A idade humana do cachorro ${this.nome} da raça ${this.raca} é ${this.idade * 7} anos.`;
    }
};

console.log(cachorro.idadeHumana());
