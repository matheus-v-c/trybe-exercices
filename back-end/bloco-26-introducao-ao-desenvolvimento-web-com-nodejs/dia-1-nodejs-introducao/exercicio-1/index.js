const readlineSync = require('readline-sync');

console.log('Qual o módulo deseja executar?')
console.log('1 - Cálculo de IMC')
console.log('2 - Cálculo de velocidade média?')
console.log('3 - Jogo de adivinhação?')

const numeroEscolha = readlineSync.questionInt('Escolha entre 1 - 3: ');

// Valida apenas se os dados são negativos, pois o readline-sync já não permite null.
// Caso não esteja apropriado, não realiza o cálculo.
if (numeroEscolha < 1 || numeroEscolha > 3) {
    console.log(`Por favor, preencha os dados corretamente!`);
    return;
}

switch (numeroEscolha) {
    case 1:
        console.log(`-------------`);
        require('./imc');
        break;
    case 2:
        console.log(`-------------`);
        require('./velocidade');
        break;
    case 3:
        console.log(`-------------`);
        require('./sorteio');
        break;
    default:
        console.log(`Erro. Houve algum imprevisto.`);
}