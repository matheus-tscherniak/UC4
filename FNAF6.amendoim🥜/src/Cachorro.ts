import { Mamifero } from "./Mamamifero";

export class Cachorro extends Mamifero {
    velocidade:number

    constructor(noime: string, idade: number, temPelos: boolean, relampago_canino:number) {
        super(noime, idade, temPelos)
        this.velocidade = relampago_canino
    }
}