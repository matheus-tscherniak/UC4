export class Navio {
    [x: string]: any
    public nome: string
    protected vida: number
    protected capacidade_tripulatoria: number
    public velocidade: number
    protected canhoes: number

    constructor(nome: string, durabilidade: number, tripulacao: number, vrom: number, caboom: number) {
        this.nome = nome
        this.vida = durabilidade
        this.capacidade_tripulatoria = tripulacao
        this.velocidade = vrom
        this.canhoes = caboom
    }

    navegar(): void {

        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade
        }

        console.log(` Narrador: O navio ${this.nome} estah a velejar ao horizonte a uma velocidade de ${this.velocidade}!`)
    }

    atacar(): void {
        console.log(` Narrador: O navio ${this.nome} estah atacando outro navio com seus ${this.canhoes} canhoes!`)
    }

    receberDano(dano: number): void {
        this.vida -= dano

        if (this.vida < 0) {
            this.vida = 0
        }
        console.log(` Narrador: Nosso navio ${this.nome} foi atacado e perdeu ${dano} em sua dura carapasa!`)
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
