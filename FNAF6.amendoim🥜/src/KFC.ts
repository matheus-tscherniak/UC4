import { Animal } from "./PAnimal";

export class KFC extends Animal {
    penas:boolean

    constructor(noime: string, idade: number, penuda:boolean){
    super(noime, idade)
    this.penas = penuda
    }
}