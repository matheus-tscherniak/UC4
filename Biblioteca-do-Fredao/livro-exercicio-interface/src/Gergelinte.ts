import { IGerente } from "./IGerente";
import { IRtrabalhar } from "./IRtrabalhar";

export class Gergelinte implements IRtrabalhar, IGerente{
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
}