export class Livro {
    public titulo:string

    constructor(nome_literario:string){
        this.titulo = nome_literario
    }

    public exibir_titulo() {
        console.log(`\n Autor: Leiem ${this.titulo}! Meu novo livro!`)
    }
}