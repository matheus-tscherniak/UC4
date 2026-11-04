"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Mamamifero_1 = require("./Mamamifero");
class Cachorro extends Mamamifero_1.Mamifero {
    velocidade;
    constructor(noime, idade, temPelos, relampago_canino) {
        super(noime, idade, temPelos);
        this.velocidade = relampago_canino;
    }
}
exports.Cachorro = Cachorro;
