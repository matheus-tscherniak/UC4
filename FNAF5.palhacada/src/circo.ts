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

import { Cacharro } from "./Cacharro";

// 2)

const caopeta:Cacharro = new Cacharro("jJarisberto", 2, 13.86, "vira-lata")
const hot_dog:Cacharro = new Cacharro("Suculencia", 5, 7.70, "Hot-Dog")
const linguica:Cacharro = new Cacharro("Janta de mais tarde", 1, 8.54, "Linguisa")

caopeta.set_noime("so")
console.log("\n Pais: vai ser:",caopeta.get_noime())
caopeta.set_idade(13)
console.log("\n Cuidador: Mas ele tem",caopeta.get_idade(),"em bale!")
hot_dog.set_idade(8)
console.log("\n Cuidador: Mas ele tem",hot_dog.get_idade(),"em bale!")
linguica.set_idade(5)
console.log("\n Cuidador: Mas ele tem",linguica.get_idade(),"em balee!")