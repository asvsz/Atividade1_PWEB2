const nums = []

for (let i = 0; i < 5; i++){

  const num = parseFloat(prompt('Escreva um número:'))
  nums.push(num)

} 

let soma = 0
for (let i = 0; i < nums.length; i++){

  soma += nums[i]

}

let media = soma / nums.length

document.write(media)