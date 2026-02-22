// Exercício 77: Crie um objeto que represente um livro, com propriedades para o título, autor e número de páginas. Em seguida, adicione um método ao objeto que imprima uma descrição do livro. 
// Descrição:  Neste exercício, você vai criar um objeto que represente um livro. O objeto deve ter propriedades para o título, autor e número de páginas. Além disso, o objeto deve ter um método que imprima uma descrição do livro.

const livro = {
    titulo: "Noites brancas",
    autor: "Fiódor Dostoiévski",
    qntPaginas: 96,

    descricao(){
        return `O livro ${this.titulo}, escrito por ${this.autor}, tem ${this.qntPaginas} páginas.`;
    }
};

console.log(livro.descricao());


