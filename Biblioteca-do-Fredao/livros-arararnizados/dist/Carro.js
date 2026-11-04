"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    constructor(rapidez) {
        super(rapidez);
    }
    acelerar(vrum) {
        if (vrum > 0) {
            this.velocidade += vrum;
        }
    }
    exibir_velocidade() {
        console.log(`\n Passageiro: DIMINUIA ESTAH VELOCIDADE, PARECE QUE TAH EM ${this.velocidade}!`);
    }
}
exports.Carro = Carro;
