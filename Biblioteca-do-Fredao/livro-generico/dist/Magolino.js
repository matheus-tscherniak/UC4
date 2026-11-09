"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magolino = void 0;
class Magolino {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    lancarMagia() {
        console.log(`${this.nome} lança uma bola de fogo!`);
    }
    atacar() {
        console.log(`${this.nome} golpeia com seu cajado`);
    }
}
exports.Magolino = Magolino;
