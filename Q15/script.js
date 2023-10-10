let num = parseFloat(prompt('Escreva um numero:'))
let tabuada
for (let i = 1; i <= 10; i++) {

  tabuada = num * i
  document.write(`${num} X ${i} = ${tabuada} <br>`)
}
