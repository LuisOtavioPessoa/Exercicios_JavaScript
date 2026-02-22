// Exercício 82: Crie um objeto "circulo" que possui uma propriedade de raio e dois métodos que calculam a área e a circunferência. 
// Descrição:  Neste exercício, você precisa criar um objeto que represente um círculo. O círculo deve ter uma propriedade para o raio e dois métodos, um para calcular a área do círculo (pi * raio^2) e outro para calcular a circunferência do círculo (2 * pi * raio).

const pi = Math.PI;

const circulo = {
    raio : 5,

    calcularArea(){
        let area = pi * (this.raio ** 2);
        return `Área do círculo: ${area}`;
    },

    calcularCircunferencia(){
        let circunferencia = 2 * pi * this.raio;
        return `Circunferencia do círculo: ${circunferencia}`;
    }
}

console.log(circulo.calcularArea());
console.log(circulo.calcularCircunferencia());