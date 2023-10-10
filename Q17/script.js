let num = parseFloat(prompt('Escreva um numero:'))

function calcularFatorial(num) {
  let fatorial = 1
  for (let i = 1; i <= num; i++){
    fatorial *= i
  }
  return fatorial
}

let resultado = calcularFatorial(num)
document.write(`O fatorial do número inserido é: ${resultado}`)