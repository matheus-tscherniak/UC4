"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./Cachorro");
const Coruja_1 = require("./Coruja");
const Crocodile_1 = require("./Crocodile");
const largatixa = new Crocodile_1.Crocodile("Lacoste", 17, 386, 59);
const caomilao = new Cachorro_1.Cachorro("Caovirsom", 13, true, -2);
const cojapotter = new Coruja_1.Coruja("Fralgo voador", 8, true, "leve assado");
// readonly
const zoologico = [largatixa, caomilao, cojapotter];
for (let i = 0; i < zoologico.length; i++) {
    zoologico[i].comer();
}
