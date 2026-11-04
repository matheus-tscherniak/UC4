"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bergamotim = void 0;
const Navio_1 = require("./Navio");
class Bergamotim extends Navio_1.Navio {
    constructor(nome, durabilidade, tripulacao, vrom, caboom) {
        super(nome, durabilidade, tripulacao, vrom, caboom);
    }
    navegar() {
        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade;
        }
        console.log(` Narrador: O navio ${this.nome} aproveita seus ventos favoraveis para navegar rapidamente a uma velocidade de ${this.velocidade}!`);
    }
    atacar() {
        console.log(` Narrador: O navio ${this.nome} realiza uma sequencia rápida de disparos contra outro navio com seus ${this.canhoes} canhoes!`);
    }
}
exports.Bergamotim = Bergamotim;
