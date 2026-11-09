"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Liderecnico = void 0;
class Liderecnico {
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
    programar() {
        console.log(`${this.noime} estah progamandom e aprimorando um site de cachorros bailarinos!`);
    }
}
exports.Liderecnico = Liderecnico;
