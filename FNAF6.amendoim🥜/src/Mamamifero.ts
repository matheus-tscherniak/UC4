import { Animal } from "./PAnimal";

// Subclasse Mamífero
export class Mamifero extends Animal {
  temPelos: boolean;

  constructor(noime: string, idade: number, temPelos: boolean) {
    super(noime, idade); // chama o construtor da classe pai
    this.temPelos = temPelos;
  }

  amamentar(): void {
    console.log(`${this.noime} está amamentando seus fio.`);
  }
}