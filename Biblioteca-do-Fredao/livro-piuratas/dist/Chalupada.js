"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalupada = void 0;
const Navio_1 = require("./Navio");
class Chalupada extends Navio_1.Navio {
    constructor(nome, durabilidade = 150, tripulacao = 10, vrom = 15, caboom = 18) {
        super(nome, 150, 10, 15, 18);
    }
    navegar() {
        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade;
        }
        return `Narrador: O navio ${this.nome} estah utiliza sua agilidade para realizar manobras rapidas a uma velocidade de ${this.velocidade}!`;
    }
    atacar() {
        return `Narrador: O navio ${this.nome} dispara seus poucos canhoes e tenta escapar rapidamente a uma velocidade de ${this.velocidade}!`;
    }
    explorando_ilha() {
        console.log(`Narrador: A tripulacao do ${this.nome} esta explorando uma ilha em busca de tesouros!
Quantidade de tripulantes na ilha:${this.capacidade_tripulatoria}`);
    }
    exibir_Informacoes() {
        if (this.capacidade_tripulatoria > 10)
            this.capacidade_tripulatoria = 10;
        if (this.capacidade_tripulatoria < 0)
            this.capacidade_tripulatoria = 0;
    }
}
exports.Chalupada = Chalupada;
