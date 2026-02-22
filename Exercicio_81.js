// Exercício 81: Crie um objeto representando uma conta bancária, que possui uma propriedade de saldo e métodos para depósito e saque. 
// Descrição:  Neste exercício, você precisa criar um objeto que represente uma conta bancária. Este objeto deve ter uma propriedade para o saldo e métodos para realizar um depósito e um saque.

const contaBancaria = {
    saldo: 100,

    deposito(valor){
        this.saldo += valor;
        return `Depositei R$${valor}`;
    },

    saque(valor){
        if(valor > this.saldo){
            return `Saldo insuficiente`;
        };

        this.saldo -= valor;
        return `Saquei R$${valor}`;
    },

    saldoAtual(){
        return `Saldo atual: ${this.saldo}`;
    }
}

console.log(contaBancaria.deposito(20));
console.log(contaBancaria.saldoAtual());

console.log(contaBancaria.saque(50));
console.log(contaBancaria.saldoAtual());
