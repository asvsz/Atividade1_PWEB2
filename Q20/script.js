const altura = parseFloat(prompt('Insira a sua altura (escreva em metros):'))
const peso = parseFloat(prompt('Insira o seu peso:'))

let imc = peso / (altura * altura)

document.write(`O seu IMC é: ${imc}`)