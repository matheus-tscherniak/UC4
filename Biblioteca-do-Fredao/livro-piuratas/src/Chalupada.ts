import { Navio } from "./Navio";

export class Chalupada extends Navio {

    constructor(nome:string, durabilidade:number = 150, tripulacao:number = 10, vrom:number = 15, caboom:number = 18) {
        super(nome, 150, 10, 15, 18)
    }

    navegar():string {

    if (this.velocidade > this.velocidade) {
        this.velocidade = this.velocidade
        }

        return `Narrador: O navio ${this.nome} estah utiliza sua agilidade para realizar manobras rapidas a uma velocidade de ${this.velocidade}!`
    }

    atacar():string {
        return`Narrador: O navio ${this.nome} dispara seus poucos canhoes e tenta escapar rapidamente a uma velocidade de ${this.velocidade}!`
    }

    explorando_ilha():void {
        console.log(`Narrador: A tripulacao do ${this.nome} esta explorando uma ilha em busca de tesouros!
Quantidade de tripulantes na ilha:${this.capacidade_tripulatoria}`)
    }

    private exibir_Informacoes():void {
        if (this.capacidade_tripulatoria >10) this.capacidade_tripulatoria = 10
        if (this.capacidade_tripulatoria <0) this.capacidade_tripulatoria = 0
    }

}