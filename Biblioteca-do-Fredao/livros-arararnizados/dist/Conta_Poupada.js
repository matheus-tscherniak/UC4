"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta_Poupada = void 0;
const Conta_1 = require("./Conta");
class Conta_Poupada extends Conta_1.Conta {
    constructor(cofrinho) {
        super(cofrinho);
    }
    aplicacao_publica() {
        this.atualizacao_protegida;
    }
    conferencia_publica() {
        console.log(`\n Bancaria: Voceh tem ${this.saldo_protegido} em sua conta!`);
    }
}
exports.Conta_Poupada = Conta_Poupada;
