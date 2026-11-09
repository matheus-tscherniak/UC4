"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guerreilson_1 = require("./Guerreilson");
const Magolino_1 = require("./Magolino");
const guerreiro = new Guerreilson_1.Guerreilson("Arthorto");
const mago = new Magolino_1.Magolino("Gold Merlin");
guerreiro.atacar();
mago.lancarMagia();
function luta(personagem, inimigo) {
    personagem.atacar();
    inimigo.atacar();
}
luta(guerreiro, mago);
