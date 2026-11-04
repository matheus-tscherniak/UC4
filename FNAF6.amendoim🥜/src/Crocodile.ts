import { Reptil } from "./Repitil";

export class Crocodile extends Reptil {
    forca:number

    constructor(noime:string, idade:number, que_arraso:number, musculacao:number){
    super(noime, idade, que_arraso)
    this.forca = musculacao
    }

    fazer_roupa():void {
        console.log(`${this.noime} fez mais uma rouoa!`)
    }

    nadar():void {
        console.log(`${this.noime} estah nadando em suas pilhas de dinheiro!`)
    }
}