"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
const PAnimal_1 = require("./PAnimal");
// Subclasse Mamífero
class Mamifero extends PAnimal_1.Animal {
    temPelos;
    constructor(noime, idade, temPelos) {
        super(noime, idade); // chama o construtor da classe pai
        this.temPelos = temPelos;
    }
    amamentar() {
        console.log(`${this.noime} está amamentando seus fio.`);
    }
}
exports.Mamifero = Mamifero;
