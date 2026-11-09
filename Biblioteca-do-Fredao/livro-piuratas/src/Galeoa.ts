import { Navio } from "./Navio";

export class Galeoa extends Navio {

    constructor(nome:string, durabilidade:number = 1000, tripulacao:number = 50, vrom:number = 14.8, caboom:number = 80) {
        super(nome, 1000, 50, 14.8, 80)
    }

    navegar():string {

    if (this.velocidade > this.velocidade) {
        this.velocidade = this.velocidade
        }

        return`Narrador: O navio ${this.nome} avança lentamente pelo mar a uma velocidade de ${this.velocidade}!`
    }

    atacar():string {
        return`Narrador: O navio ${this.nome} dispara uma poderosa salva de seus ${this.canhoes} canhoes!`
    }

    reparar_navio():void {
    this.vida += 80

    if (this.vida > 1000) {
    this.vida = 1000
        }
    }

    private exibir_Informacoes():void {
        if (this.capacidade_tripulatoria >50) this.capacidade_tripulatoria = 50
        if (this.capacidade_tripulatoria <0) this.capacidade_tripulatoria = 0
    }
}