// Exercício 80: Crie um objeto que represente um estudante, com propriedades para o nome, notas de várias matérias e um método para calcular a média das notas. 
// Descrição:  Neste exercício, você deve criar um objeto que represente um estudante. O objeto estudante deve ter propriedades para o nome do estudante e as notas que ele tirou em várias matérias. Em seguida, adicione um método ao objeto que calcule a média das notas do estudante.

const estudante = {
    nome: "Luís Otávio",
    notas: [8, 7, 9, 6, 10],

    mediaNotas(){
        let somaNotas = 0;

        for(let i = 0; i < this.notas.length; i++){
            somaNotas += this.notas[i];
        }

        let media = somaNotas / (this.notas.length);

        return `O aluno(a) ${this.nome} teve sua media em ${media.toFixed(2)}.`;
    }
};

console.log(estudante.mediaNotas());