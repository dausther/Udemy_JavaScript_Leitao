// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // O segundo parâmetro é undefined e retorna um NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8)  // Funciona! Pega os 2 primeiros parâmetros e ignora o restante
imprimirSoma() // Retorna um NaN -- parametros undefined

imprimirSoma(2, ' testando') // Concatena as strings
imprimirSoma('testando', ' soma de strings') // Concatena as strings

// Funcao com retorno
function soma(a, b = 1) { //se 'b' não for informado, utiliza o valor '1' por padrão
    return a + b
}

console.log(soma(2, 3)) // soma os valores passados como parametro
console.log(soma(2)) // soma o valor passado como parametro ao valor padrão de 'b'
console.log(soma()) // retorna NaN pois o parâmetro de 'a' precisa ser informado