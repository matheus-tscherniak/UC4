"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gergelinte = void 0;
class Gergelinte {
    noime;
    cargo;
    constructor(noime, cargo) {
        this.noime = noime;
        this.cargo = cargo;
    }
    trabalhar() {
        console.log(`${this.noime} estah trabalhando de boa por um salario muito maior que o minimo!`);
    }
    gerenciar() {
        console.log(`${this.noime} estah cuidando para ninguem colocar o garfo na tomada!`);
    }
}
exports.Gergelinte = Gergelinte;
