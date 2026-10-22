// import { Animatronicos } from "./Animatronicos"

import { Animatronicos } from "./Animatronicos"
import { Instrumentos } from "./Intrumentos"


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

const arma1:Instrumentos = new Instrumentos("Micro fone", 50)
const arma2:Instrumentos = new Instrumentos("Guitarra", 50)
const arma3:Instrumentos = new Instrumentos("Gancho", 50)
const arma4:Instrumentos = new Instrumentos("Odio", 50)

const bichinhoF:Animatronicos = new Animatronicos("Ferson", 8, arma1)
const bichinhoX:Animatronicos = new Animatronicos("Filson", 5, arma3)
const bichinhoB:Animatronicos = new Animatronicos("Bobison", 7, arma2)
const bichinhoS:Animatronicos = new Animatronicos("Coisa Ruim", 20, arma4)

// string é um tipo. Logo, podemos criarum array deste tipo
const noimes:string[] = ["Jop", "Revilson", "Clesilton"]
// number é um tipo. Logo, tambem podemos criar um array deste tipo
const numeros:number[] = [1, 2, 3, 7]
// Se "Animatronicos" também é um tipo, não podemos criiar um array de Animatronicos?
const animatronicos_arrayzados:Animatronicos[] = [bichinhoF, bichinhoB, bichinhoX, bichinhoS]

bichinhoS.batalha_de_Animatronicos(bichinhoX)
bichinhoS.batalha_de_Animatronicos(bichinhoB)
bichinhoB.curar_outro_Animatronico(bichinhoX)
bichinhoB.curar_outro_Animatronico(bichinhoB)
bichinhoB.curar_outro_Animatronico(bichinhoX)
bichinhoB.curar_outro_Animatronico(bichinhoB)

