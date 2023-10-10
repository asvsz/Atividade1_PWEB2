const numAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

let tentativas = 0
let msg1 = 'Tente novamente! <br> Dica: Seu número inserido é maior!'
let msg2 = 'Tente novamente! <br> Dica: Seu número inserido é menor!'

while (true) {
  let adivinhe = parseInt(prompt('Adivinhe o número entre 1 e 10:'))
  tentativas++

  if (adivinhe == numAleatorio) {
    document.write(`Parabéns, você acertou o número! <br> Você tentou ${tentativas} vezes.`)
    break
  } else if (adivinhe < numAleatorio) {
    alert(msg2)
  } else {
    alert(msg1)
  }
  
}


