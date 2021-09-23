const readlineSync = require('readline-sync');
const imcFunc = require('./imc');

// Input do usuário para os valore necessários a calcular o IMC.
const peso = readlineSync.questionFloat('Qual o seu peso (em Kg)? ');
const altura = readlineSync.questionFloat('Qual a sua altura (em metros)? ');

// Valida apenas se os dados são negativos, pois o readline-sync já não permite null.
// Caso não esteja apropriado, não realiza o cálculo.
if (peso <= 0 || altura <= 0) {
    console.log(`Por favor, preencha os dados corretamente!`);
    return;
}

const imc = imcFunc.imcCalc(peso, altura);
console.log(`O seu IMC é de ${imc}!`);