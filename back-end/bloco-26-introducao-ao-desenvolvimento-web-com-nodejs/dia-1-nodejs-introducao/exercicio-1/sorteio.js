const readlineSync = require('readline-sync');

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getValorAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const valorSorteado = getValorAleatorio(0, 10);

// Input do usuário para os valore necessários a calcular.
const valorChute = readlineSync.questionInt('Qual é o seu chute? [Entre 0 e 10]: ');

// Valida apenas se os dados são negativos, pois o readline-sync já não permite null.
// Caso não esteja apropriado, não realiza o cálculo.
if (valorChute < 0 || valorChute > 10) {
    console.log(`Por favor, preencha os dados corretamente!`);
    return;
}

if(valorSorteado ==  valorChute) {
    console.log('Parabéns, número correto!');
    return;
}
//else
console.log(`Opa, não foi dessa vez. O número era ${valorSorteado}.`);
