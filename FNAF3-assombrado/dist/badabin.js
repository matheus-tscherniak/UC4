"use strict";
// import { Animatronicos } from "./Animatronicos"
Object.defineProperty(exports, "__esModule", { value: true });
const Animatronicos_1 = require("./Animatronicos");
const Intrumentos_1 = require("./Intrumentos");
// const robo:Animatronicos = new Animatronicos("Freddy", 28)
// console.log(robo.vida)
// robo.curar()
// console.log(robo.vida)
// robo.perder_vida(30)
// console.log(robo.vida)
// robo.perder_vida(10)
// robo.perder_vida(10)
// robo.perder_vida(10)
// robo.perder_vida(10)
// console.log(robo.vida)
// robo.curar()
// console.log(robo.vida)
// robo.curar()
// console.log(robo.vida)
// robo.curar()
// console.log(robo.vida)
const arma1 = new Intrumentos_1.Instrumentos("Micro fone", 50);
const arma2 = new Intrumentos_1.Instrumentos("Guitarra", 50);
const arma3 = new Intrumentos_1.Instrumentos("Gancho", 50);
const arma4 = new Intrumentos_1.Instrumentos("Odio", 50);
const bichinhoF = new Animatronicos_1.Animatronicos("Ferson", 8, arma1);
const bichinhoB = new Animatronicos_1.Animatronicos("Bobison", 7, arma2);
const bichinhoX = new Animatronicos_1.Animatronicos("Filson", 5, arma3);
const bichinhoS = new Animatronicos_1.Animatronicos("Coisa Ruim", 20, arma4);
// string é um tipo. Logo, podemos criarum array deste tipo
const noimes = ["Jop", "Revilson", "Clesilton"];
// number é um tipo. Logo, tambem podemos criar um array deste tipo
const numeros = [1, 2, 3, 7];
// Se "Animatronicos" também é um tipo, não podemos criiar um array de Animatronicos?
const animatronicos_arrayzados = [bichinhoF, bichinhoB, bichinhoX, bichinhoS];
bichinhoS.batalha_de_Animatronicos(bichinhoX);
bichinhoS.batalha_de_Animatronicos(bichinhoB);
bichinhoB.curar_outro_Animatronico(bichinhoX);
bichinhoB.curar_outro_Animatronico(bichinhoB);
bichinhoB.curar_outro_Animatronico(bichinhoX);
bichinhoB.curar_outro_Animatronico(bichinhoB);
