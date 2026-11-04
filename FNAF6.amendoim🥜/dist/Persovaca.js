"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persovaca = void 0;
class Persovaca {
    noime;
    vida;
    constructor(noime, saude_do_pai) {
        this.noime = noime;
        this.vida = saude_do_pai;
    }
    curar() {
        this.vida += 10;
        console.log(`\n Narrador: O ${this.noime} usou um persentual de seu poder para poder recuperar ${this.curar} de sua saude!`);
        if (this.vida > 100) {
            this.vida = 100;
        }
    }
} // continua no próximo capitulo!
exports.Persovaca = Persovaca;
