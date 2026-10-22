"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pumketronicos = void 0;
class Pumketronicos {
    nomemon;
    vidamon;
    ataquemon;
    podermon;
    constructor(noime, vida, ataque, poderoso) {
        this.nomemon = noime;
        this.vidamon = vida;
        this.ataquemon = ataque;
        this.podermon = poderoso;
    }
    falacao() {
        console.log(`\n ${this.nomemon} estah tentando falar algo! 
            \n ${this.nomemon.repeat(3)}, nao entendi nada.`);
    }
    autodefesa_poderosa(pumkemon2) {
        pumkemon2.vidamon -= this.podermon.ataquepomon;
        console.log(`\n ${this.nomemon}usou ${this.podermon.nomepomon} e deu isso de dano ${this.podermon.ataquepomon} em ${pumkemon2.nomemon} isso foi super efetivo! Faz denovo`);
        if (pumkemon2.vidamon < 0) {
            pumkemon2.vidamon = 0;
            console.log(`${pumkemon2.nomemon} foi derrotado, e ${this.nomemon} tah assaltando o defunto, ei calma aih!`);
        }
        console.log(`\n A vida de ${this.nomemon}tem isso de vida ${this.vidamon}!
 Mas ${pumkemon2.nomemon}ainda tem ${pumkemon2.vidamon} de vida da para tirar alguma coisa dele ainda`);
    }
    autodefesa_fraca(pumkemon2) {
        pumkemon2.vidamon -= this.ataquemon;
        console.log(`\n ${this.nomemon}usou paulada e deu isso de dano ${this.ataquemon} em ${pumkemon2.nomemon} isso foi epico! Faz denovo!`);
        if (pumkemon2.vidamon < 0) {
            pumkemon2.vidamon = 0;
            console.log(`${pumkemon2.nomemon} foi derrotado, e ${this.nomemon} tah assaltando o defunto, ei calma aih!`);
        }
        console.log(`\n A vida de ${this.nomemon} tem isso de vida ${this.vidamon}!
 Mas ${pumkemon2.nomemon}ainda tem ${pumkemon2.vidamon} de vida da para tirar alguma coisa dele ainda`);
    }
}
exports.Pumketronicos = Pumketronicos;
