"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalupada = void 0;
const Navio_1 = require("./Navio");
class Chalupada extends Navio_1.Navio {
    constructor(nome, durabilidade, tripulacao, vrom, caboom) {
        super(nome, durabilidade, tripulacao, vrom, caboom);
    }
    navegar() {
        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade;
        }
        console.log(` Narrador: O navio ${this.nome} estah utiliza sua agilidade para realizar manobras rapidas a uma velocidade de ${this.velocidade}!`);
    }
    atacar() {
        console.log(` Narrador: O navio ${this.nome} dispara seus poucos canhoes e tenta escapar rapidamente a uma velocidade de ${this.velocidade}!`);
    }
    explorando_ilha() {
        console.log(` Narrador: A tripulacao do ${this.nome} esta explorando uma ilha em busca de tesouros!
Quantidade de tripulantes na ilha:${this.capacidade_tripulatoria}`);
    }
}
exports.Chalupada = Chalupada;
