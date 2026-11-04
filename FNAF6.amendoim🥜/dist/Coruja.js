"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coruja = void 0;
const KFC_1 = require("./KFC");
class Coruja extends KFC_1.KFC {
    cor;
    constructor(noime, idade, penuda, coloracao) {
        super(noime, idade, penuda);
        this.cor = coloracao;
    }
}
exports.Coruja = Coruja;
