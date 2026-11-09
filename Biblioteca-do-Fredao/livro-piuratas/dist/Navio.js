"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navio = void 0;
class Navio {
    nome;
    vida;
    capacidade_tripulatoria;
    velocidade;
    canhoes;
    constructor(nome, durabilidade, tripulacao, vrom, caboom) {
        this.nome = nome;
        this.vida = durabilidade;
        this.capacidade_tripulatoria = tripulacao;
        this.velocidade = vrom;
        this.canhoes = caboom;
    }
    navegar() {
        if (this.velocidade > this.velocidade) {
            this.velocidade = this.velocidade;
        }
        return `Narrador: O navio ${this.nome} estah a velejar ao horizonte a uma velocidade de ${this.velocidade}!`;
    }
    atacar() {
        return `Narrador: O navio ${this.nome} estah atacando outro navio com seus ${this.canhoes} canhoes!`;
    }
    receberDano(dano) {
        this.vida -= dano;
        // Math éuma biblioteca do javascript que contém métodos para fazermos cálculos matemáticos
        let dano_positivo = Math.abs(dano);
        if (this.vida < 0) {
            this.vida = 0;
        }
        return `Narrador: Nosso navio ${this.nome} foi atacado e perdeu ${dano} em sua dura carapasa!`;
    }
    exibirInformacoes() {
        return ` 
---RELATORIO DO NAVIO---
Nome:${this.nome}
Durabilidade:${this.vida}
Capacidade de tripulantes:${this.capacidade_tripulatoria}
Numero de canhoes:${this.canhoes}
Velocidade atual:${this.velocidade}`;
    }
}
exports.Navio = Navio;
