"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cacharro = void 0;
class Cacharro {
    noime;
    idade;
    forca_dos_biceps;
    raca;
    constructor(noimenino, veio, patao, linhagem) {
        this.noime = noimenino;
        this.idade = veio;
        this.forca_dos_biceps = patao;
        this.raca = linhagem;
    }
    get_noime() {
        return this.noime;
    }
    set_noime(renomeado) {
        if (renomeado.length <= 2) {
            console.log(`\n Pais: nao vamos colocar o nome do cachorro de ${renomeado}`);
        }
    }
    get_idade() {
        return this.idade;
    }
    set_idade(veiozidade) {
        if (veiozidade > 10) {
            console.log("\n Cliente: Este jah passou longe da validade!");
        }
    }
    get_forca_dos_biceps() {
        return this.forca_dos_biceps;
    }
    set_forca_dos_biceps(malhacao) {
        if (malhacao > this.forca_dos_biceps) {
            console.log(`\n Treinador canino: hoje almentou ${malhacao - this.forca_dos_biceps}, estes biceps estao almentando muito!`);
        }
        else if (malhacao < this.forca_dos_biceps) {
            console.log("\n Treinador canino: tah que nem strimer, fraco, mimado e gordo! Bem gordo e suculento!");
        }
        else if (malhacao <= 0) {
            console.log(`\n Veterinario: Confirmado, seu cachorro eh uma flor delicada de tao fragil!`);
        }
    }
    get_raca() {
        return this.raca;
    }
    set_raca(skin_canina) {
        if (skin_canina <= 3) {
            console.log("\n Especialista em Hot-Dog: mais que raca eh essa, mesmo assim consigo trabalhar com isso!");
        }
    }
}
exports.Cacharro = Cacharro;
