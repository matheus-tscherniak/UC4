"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    saldo_protegido;
    constructor(cofre) {
        this.saldo_protegido = cofre;
    }
    atualizacao_protegida(juros) {
        if (juros < 0) {
            this.saldo_protegido -= juros;
        }
    }
}
exports.Conta = Conta;
