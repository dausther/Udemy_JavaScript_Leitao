const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(6)) // não retorna erro
console.log(escola.charCodeAt(3)) // retorna o valor ASCII (unicode)
console.log(escola.indexOf('o')) // retorna a posição do caractere na string

console.log(escola.substring(1))
console.log(escola.substring(0 , 3))

console.log("Escola ".concat(escola).concat("!")) // função concat
console.log("Escola " + escola+ "!") // função concat substituida pelo sinal de '+'

console.log(escola.replace(3, 'e')) // substitui a posição 3 pela letra 'e'
/*
 * Expressão regular (Curso de Regex) 
 * substitui todos os dígitos dentro do texto pela letra 'e'
*/
console.log(escola.replace(/\d/, 'e')) 
console.log(escola.replace(/\w/, 'e')) // Regex: substitui a primeira letra pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // Regex: substitui todas as letras e dígitos pela letra 'e'

console.log('Ana,Maria,Petro'.split(',')) // gera um array com tre elementos (definiu o separador ',')
console.log('Ana,Maria,Petro'.split(/,/)) // Utiliza o Regex para o separador ','
console.log('Ana,Maria,Petro'.split(/./)) // no regex o '.' tem uma função importante (curso de Regex)