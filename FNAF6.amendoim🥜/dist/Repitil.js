"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reptil = void 0;
const PAnimal_1 = require("./PAnimal");
class Reptil extends PAnimal_1.Animal {
    escamas;
    constructor(noime, idade, que_arraso) {
        super(noime, idade);
        this.escamas = que_arraso;
    }
    se_mostrar() {
        console.log(`\n ${this.noime} estah exibindo suas gloriosas ${this.escamas} escamas`);
    }
    botarOvo() {
        console.log(`${this.noime} botou um ovo.`);
    }
}
exports.Reptil = Reptil;
