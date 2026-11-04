"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bergamotim_1 = require("./Bergamotim");
const Chalupada_1 = require("./Chalupada");
const Galeoa_1 = require("./Galeoa");
const naviarada = [
    new Bergamotim_1.Bergamotim("Bergamota", 400, 20, 22, 24),
    new Chalupada_1.Chalupada("Cha de paulada", 150, 10, 15, 12),
    new Galeoa_1.Galeoa("Simba", 1000, 50, 14.8, 80)
];
naviarada.forEach(func => {
    console.log(`
${func.receberDano(80)}`);
});
naviarada[2].reparar_navio();
naviarada.forEach(func => {
    console.log(`
${func.exibirInformacoes()}`);
});
naviarada[1].explorando_ilha();
