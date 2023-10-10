const num = parseInt(prompt('Escreva um número:'))

const msg1 = `O número ${num} não é primo`
const msg2 = `O número ${num} é primo`

let primo = false 

while(num % 2 != 0) {
  document.write(msg2)
  primo = true
  break
}

if(primo == false) {
  document.write(msg1)
}
