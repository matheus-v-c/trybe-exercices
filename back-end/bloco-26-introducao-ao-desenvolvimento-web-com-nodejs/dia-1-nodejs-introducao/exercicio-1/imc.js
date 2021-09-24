const readlineSync = require('readline-sync');

/**
 * Função que calcula o IMC, com base no peso (em quilos) e altura (em metros)
 * exemplo de uso, para um peso de 70kg e altura 1,70m: imcCalc(70,1.70)
 */
function imcCalc(pesoKg, alturaM) {
    return pesoKg / (alturaM * alturaM);
}

// Input do usuário para os valore necessários a calcular o IMC.
const peso = readlineSync.questionFloat('Qual o seu peso (em Kg)? ');
const altura = readlineSync.questionFloat('Qual a sua altura (em metros)? ');

// Valida apenas se os dados são negativos, pois o readline-sync já não permite null.
// Caso não esteja apropriado, não realiza o cálculo.
if (peso <= 0 || altura <= 0) {
    console.log(`Por favor, preencha os dados corretamente!`);
    return;
}

const imc = imcCalc(peso, altura);

function ImcCategory(imc, situacao, estado) {
    this.imc = imc;
    this.situacao = situacao;
    this.estado = estado;
}

console.log(`O seu IMC é de ${imc}!`);

var magreza = new ImcCategory('Abaixo de 18,5', 'Abaixo do peso (magreza)', imc < 18.5);
var normal = new ImcCategory('Entre 18,5 e 24,9', 'Peso normal', imc >= 18.5 && imc < 25);
var sobrepeso = new ImcCategory('Entre 25,0 e 29,9', 'Acima do peso (sobrepeso)', imc >= 25 && imc < 30);
var obesidadeGrau1 = new ImcCategory('Entre 30,0 e 34,9', 'Obesidade grau I', imc >= 30 && imc < 35);
var obesidadeGrau2 = new ImcCategory('Entre 35,0 e 39,9', 'Obesidade grau II', imc >= 35 && imc < 40);
var obesidadeGrau3 = new ImcCategory('40,0 e acima', 'Obesidade graus III e IV', imc >= 40);

console.table([magreza, normal, sobrepeso, obesidadeGrau1, obesidadeGrau2, obesidadeGrau3]);