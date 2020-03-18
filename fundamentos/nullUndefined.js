let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined  // evite atribuir undefined
console.log(produto)
console.log(!!produto.preco) // retorna o boolean 'false' pois o atributo preco está undefined

produto.preco = null
console.log(produto)
console.log(!!produto.preco) // retorna o boolean 'false' pois o atributo preco é null

delete produto.preco // deleta a propriedade 'preco' do objeto 'produto'
console.log(produto)