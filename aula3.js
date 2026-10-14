// AULA 3 - Seu código tomando decisões

let horasEstudadas = 180;
let metaHoras = 100;

console.log("Você estudou: " + horasEstudadas + "h");

if (horasEstudadas >= metaHoras) {
    console.log("PARABÉNS! Você já pode aplicar pra vagas junior!");
    console.log("Salário possível: R$2500 a R$4000");
} else {
    console.log("Quase lá! Faltam " + (metaHoras - horasEstudadas) + "h");
    console.log("Continua firme!");
}

// Desafio extra
let temPortfolio = true;

if (horasEstudadas >= metaHoras && temPortfolio) {
    console.log("Você está PRONTO pro mercado!");
} else {
    console.log("Falta portfolio, vamos criar na próxima aula!");
}