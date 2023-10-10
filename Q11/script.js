const num1 = parseInt(prompt('Escreva o primeiro número:'))
const num2 = parseInt(prompt('Escreva o segundo número:'))
const num3 = parseInt(prompt('Escreva o terceiro número:'))

const msg1 = `O maior número é ${num1}`
const msg2 = `O maior número é ${num2}`
const msg3 = `O maior número é ${num3}`

function maiorNumero(num1, num2, num3) {

  if (num1 > num2 && num1 > num3) { 

    alert(msg1)

  } else if (num2 > num1 && num2 > num3) {
    
    alert(msg2)

  } else {
    
    alert(msg3)

  }
}

maiorNumero(num1, num2, num3)

