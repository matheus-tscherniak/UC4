import { IAtacante } from "./IAtacante";

// Eu estou dizendo que qualquer Guerreiro deve seguir as regras que a interface IAtacante manda
export class Guerreilson implements IAtacante {
  constructor(public nome: string) {}

  atacar(): void {
    console.log(`${this.nome} ataca com a espada!`);
  }
}