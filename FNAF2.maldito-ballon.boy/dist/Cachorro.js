"use strict";
// Toda classe sempre começa com letra maiuscula
// a palavra "export" permite que outros arquivos impottem e usem esta classe
// a palavra "class" inicia a decclaração da classe
// depois, colocamos o nome da classe, que deve ser igual ao nome do arquivo, seguido de chaves
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    // todo o codogo da classe vai aqui dentro
    // atributos são oas coisas que um cachorro tem
    // São como variaveis, só que sem const e sem let
    nome;
    peso;
    raca;
    // Toda classe presisa de um método especial chamado "constructor".
    // É ele que recebe os valores de nome, peso, raca, etc e cria o objeto.
    constructor(meu_nome, meu_peso, minha_raca) {
        this.nome = meu_nome;
        this.peso = meu_peso;
        this.raca = minha_raca;
    }
    // Métodos são funções. Elas são as coisas que o cachorro faz
    miar() {
        console.log(`${this.nome} miau`);
    }
    comer() {
        console.log(`${this.nome} nham nham!`);
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map