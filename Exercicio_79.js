//  Exercício 79: Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual. 
//  Descrição: Neste exercício, você deve criar um objeto que represente um carro. O carro deve ter propriedades para marca, modelo, ano e velocidade atual. Em seguida, adicione os seguintes métodos ao objeto: um método que aumenta a velocidade atual, um método que diminui a velocidade atual e um método que retorna a velocidade atual.

const carro = {
    marca: "Toyota",
    modelo: "Hilux",
    ano: 2026,
    velocidadeAtual: 80,

    acelerar(){
        this.velocidadeAtual = this.velocidadeAtual + 2;
    },
    
    frear(){
        if(this.velocidadeAtual < 0){
            this.velocidadeAtual = this.velocidadeAtual = 0;
        }

        this.velocidadeAtual = this.velocidadeAtual - 2;
    },

    obterVelocidadeAtual(){
        return `${this.marca} ${this.modelo} do ano de ${this.ano} está numa velocidade atual de ${this.velocidadeAtual}`;
    }
    
}

carro.acelerar();
carro.acelerar();
carro.acelerar();
console.log(carro.obterVelocidadeAtual());

carro.frear();
console.log(carro.obterVelocidadeAtual());

