import { Pou } from "./Pou";

export class MiniPou extends Pou {

    constructor (noime:string) {
        super(noime)
    }

    // O polimorfismo é a capacidade de uma classe filha implementar um método que e
    fazer_som(): void {
        console.log(`${this.noime} estah fazendo nhac nhac de forma fofa!`)
    }
}