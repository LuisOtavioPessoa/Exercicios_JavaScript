// Exercício 92: Dado um array de objetos que têm várias propriedades, crie uma função que retorne um novo array contendo apenas os valores de uma propriedade específica.
//  Descrição: Você deve criar uma função que aceite um array de objetos e uma chave de propriedade, e retorne um novo array contendo os valores dessa propriedade.

const arrayDeObjetos = [
    { id: 1, nome: "Português", carga_horaria: 240 },
	{ id: 2, nome: "Matemática", carga_horaria: 220 },
	{ id: 3, nome: "História", carga_horaria: 160 },
	{ id: 4, nome: "Geografia", carga_horaria: 140 },
]
;

function arrayPropriedadeEspecifica(array, propriedade){

    return array.map(array => array[propriedade]);
}

console.log(arrayPropriedadeEspecifica(arrayDeObjetos, "nome"));
console.log(arrayPropriedadeEspecifica(arrayDeObjetos, "carga_horaria"));