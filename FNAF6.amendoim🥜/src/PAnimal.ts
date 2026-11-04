// Classe base (superclasse)
export class Animal {
  noime: string;
  idade: number;

  constructor(noime: string, idade: number) {
    this.noime = noime;
    this.idade = idade;
  }

  mover(): void {
    console.log(`${this.noime} está se movendo...`);
  }

  comer():void {
    console.log(`${this.noime} estah mandando ver no prato de comida!`)
  }
}