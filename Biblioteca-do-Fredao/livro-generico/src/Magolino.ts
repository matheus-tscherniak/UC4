import { IAtacante } from "./IAtacante";

export class Magolino implements IAtacante{
  constructor(public nome: string) {}

  lancarMagia(): void {
    console.log(`${this.nome} lança uma bola de fogo!!`);
  }

  atacar(): void {
      console.log(`${this.nome} golpeia com seu cajado!`)
  }

  curar(valor_cura:number):void {
    console.log(`${this.nome} recupera ${valor_cura} de saude!`)
  }
}