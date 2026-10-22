"use strict";
/*
1)
Criem uma classe Palhacos que tenha:
nome:string
vida:number
dinheiro:number

Coloque todos os atributos como "private"
Crie um método que mostre a vida (exemplo: mostrar_vida())
Crie um método que modifica a vida (exemplo: mudar_vida(vida:number))

2)
Crie uma classe chamada Cachorro
Coloque atributos no Cacharro
Coloque os atributos em "privete"
crie o contructor
Crrie os métodos "getters" e os "setters"
Crie 3 Cacharros no circo e chame seus métodos
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Cacharro_1 = require("./Cacharro");
// 2)
const caopeta = new Cacharro_1.Cacharro("jarisberto", 2, 13.86, "vira-lata");
// caopeta.set_noime("so")
// console.log("\n Pais: vai ser:",caopeta.get_noime())
caopeta.set_idade(13);
console.log("\n Cuidador: Mas ele tem", caopeta.get_idade(), "em bale!");
