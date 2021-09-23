/**
 * Função que calcula o IMC, com base no peso (em quilos) e altura (em metros)
 * exemplo de uso, para um peso de 70kg e altura 1,70m: imcCalc(70,1.70)
 */
function imcCalc(pesoKg, alturaM) {
    console.log(pesoKg);
    console.log(alturaM);
    return pesoKg / (alturaM * alturaM);
}

module.exports = {imcCalc}