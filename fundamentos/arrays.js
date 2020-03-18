const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10  //retorna 'undefined' pois não foi atribuído valore na posição '4'
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')  //coloca valores no array
console.log(valores)

console.log(valores.pop()) //saca o último elemento do array
delete valores[0] //deleta o valor da posição '0' do array
console.log(valores)

console.log(typeof valores) //retorna o tipo do array = object

/*
 * O array pode receber dados de tipos heterogêneos
 * Você pode acessar qualquer posição do array que não retorna erro
 * Se a posição não tiver um elemento, retorna 'undefined'
 */



