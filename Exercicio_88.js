// Exercício 88: Dado um array de preços de produtos, calcule o preço total após adicionar 10% de imposto a cada produto usando map(), e depois somando tudo com reduce(). 
// Descrição: Você deve criar uma função que aceite um array de números como argumento e retorne o valor total depois de calcular o imposto.

const precosProdutos = [10, 20, 30, 40];

function precosProdutosImposto(array){
    
    const valorTotal = array
        .map(preco => preco * 1.10)
        .reduce((ac, preco) => ac + preco, 0);

    return valorTotal;
}

console.log(precosProdutosImposto(precosProdutos));