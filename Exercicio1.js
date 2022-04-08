// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
//Exiba no console o valor do desconto e o preço a pagar.

let Mercadoria = 350
let Desconto = Mercadoria * (20/100)

const valorApagar = Mercadoria - Desconto

console.log(`O valor do desconto é R$ ${Desconto}. O valor a pagar é R$ ${valorApagar}`)