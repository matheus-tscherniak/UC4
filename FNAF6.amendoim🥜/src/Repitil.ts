import { Animal } from "./PAnimal";

export class Reptil extends Animal {
    escamas:number

    constructor(noime:string, idade:number, que_arraso:number) {
        super(noime, idade)
        this.escamas = que_arraso
    }

    se_mostrar():void {
        console.log(`\n ${this.noime} estah exibindo suas gloriosas ${this.escamas} escamas`)
    }

    botarOvo(): void {
    console.log(`${this.noime} botou um ovo.`);
  }
}
