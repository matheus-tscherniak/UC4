import { Navio } from "./Navio";

export class Galeoa extends Navio {

    constructor(nome:string, durabilidade:number, tripulacao:number, vrom:number, caboom:number) {
        super(nome, durabilidade, tripulacao, vrom, caboom)
    }

    navegar():void {

    if (this.velocidade > this.velocidade) {
        this.velocidade = this.velocidade
        }

        console.log(` Narrador: O navio ${this.nome} avança lentamente pelo mar a uma velocidade de ${this.velocidade}!`)
    }

    atacar():void {
        console.log(` Narrador: O navio ${this.nome} dispara uma poderosa salva de seus ${this.canhoes} canhoes!`)
    }

    reparar_navio():void {
    this.vida += 80

    if (this.vida > 1000) {
    this.vida = 1000
    }
    }

}