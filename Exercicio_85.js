// Exercício 85: Crie um objeto "quadrado" que herda as propriedades do objeto "retangulo" e substitua o método para calcular a área. 
// Descrição: Neste exercício, você precisa criar um objeto que represente um quadrado. Este objeto deve herdar as propriedades do objeto retangulo criado no exercício anterior. Em seguida, substitua o método para calcular a área para que utilize apenas uma das dimensões (já que a altura e a largura de um quadrado são iguais).

const retangulo = {
    altura : 10,
    largura : 6,

    area(){
        const area = this.altura * this.largura;
        return `Area do retangulo: ${area}`;
    }
};

const quadrado = Object.create(retangulo, {
    altura: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 5
    },
    largura: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 5
    },
    area: {
        writable: true,
        configurable: true,
        enumerable: true,
        value(){
            return this.altura * this.altura
        }
    },

});

console.log(quadrado.area());




