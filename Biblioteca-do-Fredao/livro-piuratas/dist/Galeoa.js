"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeoa = void 0;
const Navio_1 = require("./Navio");
class Galeoa extends Navio_1.Navio {
    constructor(nome, durabilidade = 1000, tripulacao = 50, vrom = 14.8, caboom = 80) {
        super(nome, 1000, 50, 14.8, 80);
    }
    navegar() {
        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade;
        }
        return `Narrador: O navio ${this.nome} avança lentamente pelo mar a uma velocidade de ${this.velocidade}!`;
    }
    atacar() {
        return `Narrador: O navio ${this.nome} dispara uma poderosa salva de seus ${this.canhoes} canhoes!`;
    }
    reparar_navio() {
        this.vida += 80;
        if (this.vida > 1000) {
            this.vida = 1000;
        }
    }
    exibir_Informacoes() {
        if (this.capacidade_tripulatoria > 50)
            this.capacidade_tripulatoria = 50;
        if (this.capacidade_tripulatoria < 0)
            this.capacidade_tripulatoria = 0;
    }
}
exports.Galeoa = Galeoa;
