"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animatronicos = void 0;
class Animatronicos {
    nome;
    vida = 120;
    forca;
    Arma;
    constructor(fantasia, metal, instrumento) {
        this.nome = fantasia;
        this.forca = metal;
        this.Arma = instrumento;
    }
    curar() {
        if (this.vida > 120) {
            this.vida = 120;
        }
    }
    perder_vida(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    curar_outro_Animatronico(bichinhoB) {
        bichinhoB.vida += 10;
        if (bichinhoB.vida > 80) {
            bichinhoB.vida = 80;
        }
        console.log(`O animatronico ${bichinhoB.nome} foi a oficina pelo ${this.nome}!
        \n ${bichinhoB.nome}: ${bichinhoB.vida}.`);
    }
    // Criem um metodo chamado atacar que faça um personagem tirar vida do outro
    // abstract
    batalha_de_Animatronicos(bichinhoS) {
        bichinhoS.vida -= this.Arma.dano * 2;
        if (bichinhoS.vida < 0) {
            bichinhoS.vida = 0;
        }
        console.log(`O animatronico ${bichinhoS.nome} foi atacado por ${this.nome}!
        \n ${bichinhoS.nome}: ${bichinhoS.vida}.`);
    }
}
exports.Animatronicos = Animatronicos;
// 1)
// Crie uma nova classe chamada Arma
// Arma deve ter nome e ataque
// Não esqueça do constructor
// 2)
// Dentro da classe personagem, crie o atributo arma (do tipo Arma)
// chame ele no contructor de personagem também
// 3)
// Modifique o metodo "atacar" da classe Animatronicos para usar o dano da arma
