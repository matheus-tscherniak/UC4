import { Navio } from "./Navio";

export class Bergamotim extends Navio {

    constructor(nome:string, durabilidade:number, tripulacao:number, vrom:number, caboom:number) {
        super(nome, durabilidade, tripulacao, vrom, caboom)
    }

    navegar():void {

    if (this.velocidade > this.velocidade) {
        this.velocidade = this.velocidade
        }

        console.log(` Narrador: O navio ${this.nome} aproveita seus ventos favoraveis para navegar rapidamente a uma velocidade de ${this.velocidade}!`)
    }

    atacar():void {
        console.log(` Narrador: O navio ${this.nome} realiza uma sequencia rápida de disparos contra outro navio com seus ${this.canhoes} canhoes!`)
    }
}