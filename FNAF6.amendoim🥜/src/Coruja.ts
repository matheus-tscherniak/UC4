import { KFC } from "./KFC";

export class Coruja extends KFC {
    cor:string

    constructor(noime: string, idade: number, penuda:boolean, coloracao:string) {
        super(noime, idade, penuda)
        this.cor = coloracao
    }
}