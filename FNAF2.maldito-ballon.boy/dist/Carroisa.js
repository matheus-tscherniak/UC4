"use strict";
/*
    Crie a classe Carro siga as intruçõse para criar lo usando de exemplo a classe Cachorro.

    O carro deve ter:
    marca, tipo, ano

    O que o carra faz:
    - ele anda
    - ele buzina

    Depois de criar classes , crie 3 carros diferentes no "index.ts" , chame os seus atibutos em um console.log e chame seus metodos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carroisa = void 0;
class Carroisa {
    marca;
    tipo;
    ano;
    constructor(marca_do_possante, tipo_de_queijo_do_possante, velhice_do_possante) {
        this.marca = marca_do_possante;
        this.tipo = tipo_de_queijo_do_possante;
        this.ano = velhice_do_possante;
    }
    EU_VOU_DIRIGIR() {
        console.log("Ele pode dirigir antes de beber");
    }
    bibi() {
        console.log(`O carro ${this.marca} faz bibi`);
    }
}
exports.Carroisa = Carroisa;
//# sourceMappingURL=Carroisa.js.map