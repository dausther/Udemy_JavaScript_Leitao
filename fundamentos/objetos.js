/* Um objeto é um conjunto de pares chave: valor
 * posso criar um objeto vazio depois definir os atributos conforme abaixo
 */
const prod1 = {} 
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.69
prod1['Desconto legal'] = 0.40 //evitar atributos com espaços

console.log(prod1)


/* Posso criar um objeto já com seus atributos separados por vírgulas
 * Posso ter um ojeto dentro do outro
 * Notação Literal de Objetos -- não é um JSON
 * JSON é uma notação textual de objetos utilizado para trocar dados entre sistemas
 * Muito utilizado hoje em dia.
 */
const prod2 = {  
    nome: 'Camisa Polo', 
    preco: 79.90,
    obj: {
        atributo1: 99.9,
        obj: {
            abributo1: 89.90
        }
    }
}

// Exemplo de objeto JASON:
// Os atributos de JASON são delimitados por aspas duplas
'{ "nome": "Camisa Polo", "preco": 79.90 }'

console.log(prod2)

