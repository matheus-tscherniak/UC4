import { IProgramar } from "./IProgramar";
import { IRtrabalhar } from "./IRtrabalhar";

export class Desenouravedor implements IRtrabalhar, IProgramar{
    private noime:string
    public cargo:string

    constructor(noime:string, cargo:string) {
        this.noime = noime
        this.cargo = cargo
    }

    trabalhar(): void {
        console.log(`${this.noime} estah trabalhando pessado por um salario menor que o minimo!`)
    }

    programar(): void {
        console.log(`${this.noime} estah progamando um site de cachorros bailarinos!`)
    }
}