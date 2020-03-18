const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Template String = funcionalidade nova a partir do ECMAScript 2015
const template = `
    Olá
    ${nome}!` // tem que usar a crase. Suporta quebra de linha e espaços

console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()  // funcao arroy que converte o texto para UPPERCASE
console.log(`Ei... ${up('cuidado')}!`) // vai chamar a função up e interpolar o parãmetro com letra maíscula
