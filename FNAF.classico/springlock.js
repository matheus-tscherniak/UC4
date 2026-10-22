"use strict";
// let mi_name:string = "robison"
// let mi_velhice:Number = 31
// let mimi_desligado:boolean = true
// function somaca (a:number, b:number):number {
//     return a + b
// }
// console.log(somaca(22,88))
// let comparompas:string[] = ["Pao", "leite", "mantega", "pingun resecado"]
// let numeros:Array<number> = [0, 1, 2, 3]
// Crie um array que contem X notas
// Depois, calcule a media dsetas notas e mostre no terminal
// let array_com_faculdade_em_notas:number[] = [6, 8, 7, 4, 5 ,6 ,43 ,5 ,2 ,5, 7,3 ]
// //  ou acfen 
// let someria:number = 0
// for (let i:number = 0; i < array_com_faculdade_em_notas.length; i ++) {
//     someria += array_com_faculdade_em_notas[i]
// }
// console.log("A soma que me iritou: " + someria)
// let media = someria / array_com_faculdade_em_notas.length
// console.log("Maldita media que demorou  muito: " + media)
// Objetos em tsc
let pierson = {
    noime: "Mickal Jakson",
    idade: 110
};
// // atributos com "?" sao opcionais, ou seja eu posso ou nao colocar valor para eles
// console.log(pierson.noime)
// console.log(pierson.peson = 58)
// Crie seu lascado dois objetos representando pessoas (coloque nomes diferentes para os objetos)
// Estes objetios devem ter: nome (string), cidade (string), emprego (boolean), sendo que emprego deve ser um atributo opcional.
// Depois, faca um if que mostre duas frases diferentes:
// se a pessoa tem um emprego, mostra "Fulano da cidade tal estah trabalhando".
// Se nao, mostra "Fulano da cidade tal estah desempregado".
let auautor = {
    noime2: "The Rouck",
    cidade2: "Beverly Hills",
    emprego2: true
};
let pedreiro = {
    noime1: "O Pedra",
    cidade1: "Hayward",
    emprego1: false
};
if (auautor.emprego2 == true) {
    console.log("Fulano da cidade tal estah trabalhando");
}
else {
    console.log("Fulano da cidade tal estah desempregado");
}
if (pedreiro.emprego1 == true) {
    console.log("Fulano da cidade tal estah trabalhando");
}
else {
    console.log("Fulano da cidade tal estah desempregado");
}
