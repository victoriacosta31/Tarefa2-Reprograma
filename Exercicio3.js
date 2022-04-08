// 3 - Crie um algoritmo que leia o valor de um jantar, 
//calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 85
let taxaGarçom = (10/100)
let valorDaTaxa = valorJantar*taxaGarçom

const valorTotal = valorDaTaxa + valorJantar

console.log(`A taxa do Garçom é R$ ${valorDaTaxa}. O valor total do jantar é R$ ${valorTotal}`)