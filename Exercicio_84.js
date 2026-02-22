// Exercício 84:  Crie um objeto "retangulo" que possui propriedades para altura e largura, e um método para calcular a área. 
// Descrição: Neste exercício, você precisa criar um objeto que represente um retângulo. O retângulo deve ter propriedades para a altura e a largura. Em seguida, adicione um método ao objeto que calcule a área do retângulo.

const retangulo = {
    altura : 10,
    largura : 6,

    area(){
        const area = this.altura * this.largura ;
        return `Area do retangulo: ${area}`;
    }
};

console.log(retangulo.area());