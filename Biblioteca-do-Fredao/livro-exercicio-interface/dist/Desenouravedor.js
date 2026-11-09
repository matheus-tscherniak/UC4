"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desenouravedor = void 0;
class Desenouravedor {
    noime;
    cargo;
    constructor(noime, cargo) {
        this.noime = noime;
        this.cargo = cargo;
    }
    trabalhar() {
        console.log(`${this.noime} estah trabalhando pessado por um salario menor que o minimo!`);
    }
    programar() {
        console.log(`${this.noime} estah progamando um site de cachorros bailarinos!`);
    }
}
exports.Desenouravedor = Desenouravedor;
