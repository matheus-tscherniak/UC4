"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    titulo;
    constructor(nome_literario) {
        this.titulo = nome_literario;
    }
    exibir_titulo() {
        console.log(`\n Autor: Leiem ${this.titulo}! Meu novo livro!`);
    }
}
exports.Livro = Livro;
