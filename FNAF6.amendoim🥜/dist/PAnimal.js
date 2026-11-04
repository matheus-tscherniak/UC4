"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// Classe base (superclasse)
class Animal {
    noime;
    idade;
    constructor(noime, idade) {
        this.noime = noime;
        this.idade = idade;
    }
    mover() {
        console.log(`${this.noime} está se movendo...`);
    }
    comer() {
        console.log(`${this.noime} estah mandando ver no prato de comida!`);
    }
}
exports.Animal = Animal;
