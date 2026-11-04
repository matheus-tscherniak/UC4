"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeoa = void 0;
const Navio_1 = require("./Navio");
class Galeoa extends Navio_1.Navio {
    constructor(nome, durabilidade, tripulacao, vrom, caboom) {
        super(nome, durabilidade, tripulacao, vrom, caboom);
    }
    navegar() {
        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade;
        }
        console.log(` Narrador: O navio ${this.nome} avança lentamente pelo mar a uma velocidade de ${this.velocidade}!`);
    }
    atacar() {
        console.log(` Narrador: O navio ${this.nome} dispara uma poderosa salva de seus ${this.canhoes} canhoes!`);
    }
    reparar_navio() {
        this.vida += 80;
        if (this.vida > 1000) {
            this.vida = 1000;
        }
    }
}
exports.Galeoa = Galeoa;
