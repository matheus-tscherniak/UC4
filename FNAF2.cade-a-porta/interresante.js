// importações em Typescript são parecidas com este comando
// EStamos dizendo
// importe TUDO (por issi o asterisco) com o nome de "readlone"
// da biblioteca "readline-sync"
import * as porla from "readline-sync";
let noime = porla.question("what or name? ");
let idade = porla.questionInt("what or velhice? ");
// console.log(`Olah ${noime}! Voceh tah velho(a) com ${idade} anos.`)
function saudacao(meu_nome, minha_idade) {
    return (`Olah ${meu_nome}! voceh tem ${minha_idade} anos!`);
}
console.log(saudacao(noime, idade));
// // esta funcão tem return
// // Ela retorna uma string
// function frase():string {
//     return "Olah bicharada!"
// }
// console.log(saudacao)
// // esta funcão também tem return
// // Ela retorna um number
// function somacao():number {
//     return 3+2
// }
// // esta funcão NÃO TEM return
// // Ela retorna um void
// function venerencia():void {
//     console.log("\n Olah galerinha!")
// }
