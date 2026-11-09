import { IGerente } from "./IGerente";
import { IRtrabalhar } from "./IRtrabalhar";
import { IProgramar } from "./IProgramar";

export class Liderecnico implements IRtrabalhar, IGerente, IProgramar{
    private noime:string
    public cargo:string

    constructor(noime:string, cargo:string) {
        this.noime = noime
        this.cargo = cargo
    }

    trabalhar(): void {
        console.log(`${this.noime} estah trabalhando de boa por um salario muito maior que o minimo!`)
    }
    
    gerenciar(): void {
        console.log(`${this.noime} estah cuidando para ninguem colocar o garfo na tomada!`)
    }

    programar(): void {
        console.log(`${this.noime} estah progamandom e aprimorando um site de cachorros bailarinos!`)
    }
}