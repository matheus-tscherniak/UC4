import { Navio } from "./Navio";

export class Bergamotim extends Navio {

    constructor(nome:string, durabilidade:number = 400, tripulacao:number = 20, vrom:number = 22, caboom:number = 24) {
        super(nome, 400, 20, 22, 24)
    }

    navegar():string {

    if (this.velocidade > this.velocidade) {
        this.velocidade = this.velocidade
        }

        return `Narrador: O navio ${this.nome} aproveita seus ventos favoraveis para navegar rapidamente a uma velocidade de ${this.velocidade}!`
    }

    atacar():string {
        return `Narrador: O navio ${this.nome} realiza uma sequencia rápida de disparos contra outro navio com seus ${this.canhoes} canhoes!`
    }

    private exibir_Informacoes():void {
        if (this.capacidade_tripulatoria >20) this.capacidade_tripulatoria = 20
        if (this.capacidade_tripulatoria <0) this.capacidade_tripulatoria = 0
    }
}