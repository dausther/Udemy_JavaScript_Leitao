console.log(7 / 0.000000001) // quanto mais se aproxima do zero, tende ao infinito

console.log(7 / 0.) // a divisão por zero não dá erro, retorna o tipo Infinity

console.log("10" / 2) // pega o conteudo da String e transforma em numero

// concatena a string '3' com 2 = 32. 
// O sinal de '+' faz sentido no mundo da stringA preferência é da string
console.log('3' + 2) // sinal de '+' concatena, pois faz sentido no mundo da string. A string ganha.
console.log('3' - 2) // sinal de '-' subtrai. 

console.log("Show!" * 2) // gera um NaN = Not a Number

console.log(0.1 + 0.7) // tem uma imprecisão com ponto flutuante CUIDADO!!!

console.log((10.345).toFixed(2))

