// Toda classe sempre começa com letra maiuscula
// a palavra "export" permite que outros arquivos impottem e usem esta classe
// a palavra "class" inicia a decclaração da classe
// depois, colocamos o nome da classe, que deve ser igual ao nome do arquivo, seguido de chaves

export class Cachorro {
    // todo o codogo da classe vai aqui dentro
    // atributos são oas coisas que um cachorro tem
    // São como variaveis, só que sem const e sem let

    nome:string
    peso:number
    raca:string

    // Toda classe presisa de um método especial chamado "constructor".
    // É ele que recebe os valores de nome, peso, raca, etc e cria o objeto.

    constructor(meu_nome:string, meu_peso:number, minha_raca:string) {
        this.nome = meu_nome 
        this.peso = meu_peso
        this.raca = minha_raca
    }

    // Métodos são funções. Elas são as coisas que o cachorro faz
    miar():void {
        console.log(`${this.nome} miau`)
    }

    comer(): void {
        console.log(`${this.nome} nham nham!`)
    }
}