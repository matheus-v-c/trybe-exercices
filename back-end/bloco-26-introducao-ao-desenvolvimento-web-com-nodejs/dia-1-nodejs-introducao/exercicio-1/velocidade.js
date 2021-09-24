const readlineSync = require('readline-sync');

/**
 * Função que calcula a velocidade média em Km/h.
 * Recebe um valor em distäncia, em Km, e tempo, em horas.
 */
 function velocidadeMediaKmH(distanciaKm, tempoH) {
    return distanciaKm / tempoH;
}

// Input do usuário para os valore necessários a calcular.
const distanciaKm = readlineSync.questionFloat('Qual a distância percorrida, em Km? ');
const tempoH = readlineSync.questionFloat('Qual o tempo percorrido, em horas? ');

// Valida apenas se os dados são negativos, pois o readline-sync já não permite null.
// Caso não esteja apropriado, não realiza o cálculo.
if (distanciaKm <= 0 || tempoH <= 0) {
    console.log(`Por favor, preencha os dados corretamente!`);
    return;
}

const velocidadeMedia = velocidadeMediaKmH(distanciaKm, tempoH);
console.log(`A velocidade média é de ${velocidadeMedia} Km/h!`);