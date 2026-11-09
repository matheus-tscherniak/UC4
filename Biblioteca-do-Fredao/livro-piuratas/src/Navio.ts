export class Navio {
    [x: string]: any
    protected nome: string
    protected vida: number
    protected capacidade_tripulatoria: number
    protected velocidade: number
    protected canhoes: number

    constructor(nome: string, durabilidade: number, tripulacao: number, vrom: number, caboom: number) {
        this.nome = nome
        this.vida = durabilidade
        this.capacidade_tripulatoria = tripulacao
        this.velocidade = vrom
        this.canhoes = caboom
    }

    navegar(): string {

        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade
        }

        return `Narrador: O navio ${this.nome} estah a velejar ao horizonte a uma velocidade de ${this.velocidade}!`
    }

    atacar(): string {
        return `Narrador: O navio ${this.nome} estah atacando outro navio com seus ${this.canhoes} canhoes!`
    }

    receberDano(dano: number): string {
        this.vida -= dano
        // Math éuma biblioteca do javascript que contém métodos para fazermos cálculos matemáticos
        let dano_positivo:number = Math.abs(dano)

        if (this.vida < 0) {
            this.vida = 0
        }
        return `Narrador: Nosso navio ${this.nome} foi atacado e perdeu ${dano} em sua dura carapasa!`
    }

    exibirInformacoes(): string {
        return ` 
---RELATORIO DO NAVIO---
Nome:${this.nome}
Durabilidade:${this.vida}
Capacidade de tripulantes:${this.capacidade_tripulatoria}
Numero de canhoes:${this.canhoes}
Velocidade atual:${this.velocidade}`
    }

}
