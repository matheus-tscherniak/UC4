"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bergamotim = void 0;
const Navio_1 = require("./Navio");
class Bergamotim extends Navio_1.Navio {
    constructor(nome, durabilidade = 400, tripulacao = 20, vrom = 22, caboom = 24) {
        super(nome, 400, 20, 22, 24);
    }
    navegar() {
        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade;
        }
        return `Narrador: O navio ${this.nome} aproveita seus ventos favoraveis para navegar rapidamente a uma velocidade de ${this.velocidade}!`;
    }
    atacar() {
        return `Narrador: O navio ${this.nome} realiza uma sequencia rápida de disparos contra outro navio com seus ${this.canhoes} canhoes!`;
    }
    exibir_Informacoes() {
        if (this.capacidade_tripulatoria > 20)
            this.capacidade_tripulatoria = 20;
        if (this.capacidade_tripulatoria < 0)
            this.capacidade_tripulatoria = 0;
    }
}
exports.Bergamotim = Bergamotim;
