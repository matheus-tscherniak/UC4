// import { Cachorro } from "./Cachorro";
// import { Coruja } from "./Coruja";
// import { Crocodile } from "./Crocodile";
// import { Animal } from "./PAnimal"

import { Atendante } from "./Atendente";
import { Funcionario } from "./Funcionario";

// const largatixa:Crocodile = new Crocodile("Lacoste", 17, 386, 59)
// const caomilao:Cachorro = new Cachorro("Caovirsom", 13, true, -2)
// const cojapotter:Coruja = new Coruja("Fralgo voador", 8, true, "leve assado")
// // readonly
// const zoologico:Animal[] = [largatixa,caomilao,cojapotter]

// for (let i = 0; i < zoologico.length; i++) {
//     zoologico[i].comer()
// }

const funcionarios: Funcionario[] = [
    new Funcionario("silvo"),
    new Atendante("gerson")
];

funcionarios.forEach(func => {
    console.log(`Salário: R$ ${func.calcularSalario()}`);
})

for (let i = 0; i < Funcionario.length; i ++) {
    console.log(`Salario: R$ ${Funcionario[i]}`)
}