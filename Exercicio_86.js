// Exercício 86:  Crie um objeto "livro" que possui propriedades para o título, autor e número de páginas, e um método para exibir o livro na console. 
// Descrição:  Neste exercício, você precisa criar um objeto que represente um livro. O livro deve ter propriedades para o título, autor e número de páginas. Em seguida, adicione um método ao objeto que exiba o livro na console no formato "Título, escrito por Autor, com Páginas páginas".

const livro = {
    titulo: "Noites brancas",
    autor: "Fiódor Dostoiévski",
    qntPaginas: 96,

    exibirLivro(){
        console.log(`${this.titulo}, escrito por ${this.autor}, com ${this.qntPaginas} páginas.`);
    }
};

livro.exibirLivro();