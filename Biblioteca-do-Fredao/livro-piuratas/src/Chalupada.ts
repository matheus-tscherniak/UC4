import { Navio } from "./Navio";

export class Chalupada extends Navio {

    constructor(nome:string, durabilidade:number, tripulacao:number, vrom:number, caboom:number) {
        super(nome, durabilidade, tripulacao, vrom, caboom)
    }

    navegar():void {

    if (this.velocidade > this.velocidade) {
        this.velocidade = this.velocidade
        }

        console.log(` Narrador: O navio ${this.nome} estah utiliza sua agilidade para realizar manobras rapidas a uma velocidade de ${this.velocidade}!`)
    }

    atacar():void {
        console.log(` Narrador: O navio ${this.nome} dispara seus poucos canhoes e tenta escapar rapidamente a uma velocidade de ${this.velocidade}!`)
    }

    explorando_ilha():void {
        console.log(` Narrador: A tripulacao do ${this.nome} esta explorando uma ilha em busca de tesouros!
Quantidade de tripulantes na ilha:${this.capacidade_tripulatoria}`)
    }

}