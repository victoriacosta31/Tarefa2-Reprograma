// 4 - Escreva um programa que pergunte a quantidade de km percorridos por 
//um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmPercorrido = 325
let diasDeAluguelCarro = 13
const aluguelPorDia = 60
const valorPorKm =0.15

const preçoAPagar = (kmPercorrido*valorPorKm) + (diasDeAluguelCarro*aluguelPorDia)

console.log(`O preço a pagar é R$ ${preçoAPagar}`)