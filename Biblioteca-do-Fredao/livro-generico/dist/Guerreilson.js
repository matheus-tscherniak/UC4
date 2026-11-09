"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreilson = void 0;
// Eu estou dizendo que qualquer Guerreiro deve seguir as regras que a interface IAtacante manda
class Guerreilson {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    atacar() {
        console.log(`${this.nome} ataca com a espada!`);
    }
}
exports.Guerreilson = Guerreilson;
