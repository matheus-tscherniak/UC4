"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodile = void 0;
const Repitil_1 = require("./Repitil");
class Crocodile extends Repitil_1.Reptil {
    forca;
    constructor(noime, idade, que_arraso, musculacao) {
        super(noime, idade, que_arraso);
        this.forca = musculacao;
    }
    fazer_roupa() {
        console.log(`${this.noime} fez mais uma rouoa!`);
    }
    nadar() {
        console.log(`${this.noime} estah nadando em suas pilhas de dinheiro!`);
    }
}
exports.Crocodile = Crocodile;
