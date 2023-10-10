let num = parseFloat(prompt('Insira um número:'))
const msgPositivo = 'O número é positivo'
const msgZero = 'O número é zero'
const msgNegativo = 'O número é negativo'

if (num > 0) {
  document.write(msgPositivo)
} else if (num == 0) {
  document.write(msgZero)
} else {
  document.write(msgNegativo)
}




