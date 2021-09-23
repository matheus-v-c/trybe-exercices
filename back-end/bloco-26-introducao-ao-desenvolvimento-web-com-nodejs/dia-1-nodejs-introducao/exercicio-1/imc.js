/**
 * Funcao que calcula o IMC, com base no peso (em quilos) e altura (em metros)
 * exemplo de uso, para um peso de 70kg e altura 1,70m: imcCalc(70,1.70)
 */
function imcCalc(pesoKg, alturaM) {
    return pesoKg / (alturaM * alturaM);
}

// Printa o imc para um peso de 70kg e altura 1,70m
console.log(imcCalc(70,1.70));