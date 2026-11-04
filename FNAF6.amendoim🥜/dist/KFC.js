"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KFC = void 0;
const PAnimal_1 = require("./PAnimal");
class KFC extends PAnimal_1.Animal {
    penas;
    constructor(noime, idade, penuda) {
        super(noime, idade);
        this.penas = penuda;
    }
}
exports.KFC = KFC;
