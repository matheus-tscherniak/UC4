"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta_Bancaria = void 0;
class Conta_Bancaria {
    saldo;
    constructor(dindin) {
        this.saldo = dindin;
    }
    consultar_saldo() {
        console.log(`\n Eu mesmo: Eu soh tenho ${this.saldo}, como vou durar este mes?`);
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }
}
exports.Conta_Bancaria = Conta_Bancaria;
