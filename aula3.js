let horasAtuais = 16;
let meta = 100;

console.log(`Você estudou: ${horasAtuais}h`);
console.log(`Meta: ${meta}h`);
console.log(`Faltam: ${meta - horasAtuais}h`);

if (horasAtuais >= meta) {
    console.log("PARABÉNS! Pode aplicar pra vagas junior!");
} else {
    console.log("Quase lá! Continua firme!");
}