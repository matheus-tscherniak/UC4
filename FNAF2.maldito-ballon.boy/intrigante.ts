import * as porla from "readline-sync"

// 11111111111111111111111111111111111

// let a:number = porla.questionInt("\n Escolha um numero: ")
// let b:number = porla.questionInt("Escolha outro numero: ")

// function somesacoria (a:number, b:number):number {
//     return a + b
// }

// console.log(somesacoria(a,b))

// 22222222222222222222222222222222222

let noime:string = porla.question("\nFuncionario: Qual o seu nome? ")
let numero_bicharado:number = porla.questionInt(`Funcionario: entendido cliente ${noime}, agora qual numero voceh escolhe de 1 a 20: `)

function descobrirBicho (noime:string, numero_bicharado:number):string {

    if (noime.length < 3 || !isNaN(Number(noime))) {
        return"\nFuncionario: Mas que nome eh esse, me fale o seu verdadeiro nome!"
    }

    if (numero_bicharado <= 0) {
    return"\nFuncionario: Esse numero nao eh possivel, agora meu Alzheimer vai atacar e vamos comecar a conversa tudo de novo!"
    } else if (numero_bicharado <= 4) {
    return`\nFuncionario: Entendido cliente ${noime} o bicho escolhido foi Avestruz, porque voceh escolheu o numero ${numero_bicharado}!`
    } else if (numero_bicharado <= 8) {
    return`\nFuncionario: Entendido cliente ${noime} o bicho escolhido foi Aguia, porque voceh escolheu o numero ${numero_bicharado}!`
    } else if (numero_bicharado <= 12) {
    return`\nFuncionario: Entendido cliente ${noime} o bicho escolhido foi Burro, porque voceh escolheu o numero ${numero_bicharado}!`
    } else if (numero_bicharado <= 16) {
    return`\nFuncionario: Entendido cliente ${noime} o bicho escolhido foi Borboleta, porque voceh escolheu o numero ${numero_bicharado}!`
    } else if (numero_bicharado <= 20) {
    return`\nFuncionario: Entendido cliente ${noime} o bicho escolhido foi Cachorro, porque voceh escolheu o numero ${numero_bicharado}!`
    } else {
    return"\nFuncionario: Esse numero nao eh possivel, agora meu Alzheimer vai atacar e vamos comecar a conversa tudo de novo!"
    }
}

console.log(descobrirBicho(noime,numero_bicharado))