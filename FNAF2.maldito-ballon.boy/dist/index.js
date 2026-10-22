"use strict";
// // como exportamos a classe, nós agora podemos importá-la
// import { Cachorro } from "./Cachorro";
Object.defineProperty(exports, "__esModule", { value: true });
// // Para criar um objeto, criamos uma variavel que deve ser do tipo da clasee (Cachorrro)
// // depois, usamos a palavra "new" para criar um novo Cachorro
// // dentro dos parenteses, precisamos colocar todads as informacoes que o construtor pede
// const meu_Cachorro:Cachorro = new Cachorro("Hot Dog", 17.60, "salsicha")
// // agora, podemos acessasr as informações do Cachorro. Por exemplo, para ver o nome:
// console.log(meu_Cachorro.nome)
// console.log(meu_Cachorro.raca)
// // posso tambem chamar os metodos para ver o que o cachorro faz:
// meu_Cachorro.miar()
const Carroisa_1 = require("./Carroisa");
const meu_Possante = new Carroisa_1.Carroisa("Peugeot", "Triciclo a vapor", 1884);
const outro_Possante = new Carroisa_1.Carroisa("Peel Engineering", "Peel P50", 1964);
const mais_um_Possante = new Carroisa_1.Carroisa("Yugo", "hatchback compacto", 1980);
console.log("\nVerdedor de lataria: Este carro eh de otima qualidade, olhe suas informacoes!");
console.log(meu_Possante.marca);
console.log(meu_Possante.tipo);
console.log(meu_Possante.ano);
console.log("\nVendedor de lataria: E ele tem muitas funcoes, olha aih!");
meu_Possante.bibi();
meu_Possante.EU_VOU_DIRIGIR();
console.log("\nVendedor de lataria: Mas esse daqui tem um otimo motor, olha suas informacoes!");
console.log(outro_Possante.marca);
console.log(outro_Possante.tipo);
console.log(outro_Possante.ano);
console.log("\nVendedor de lataria: alem de sua velocidade ele tem muitas funcoes, olha aih!");
outro_Possante.bibi();
outro_Possante.EU_VOU_DIRIGIR();
console.log("\nVendedor de lataria: Agora o nosso mais ressente carro e de melhor qualidade, olha suas informacoes!");
console.log(mais_um_Possante.marca);
console.log(mais_um_Possante.tipo);
console.log(mais_um_Possante.ano);
console.log("\nVendedor de lataria: Ele tambem tem as mais diferentes funcoes, olha aih!");
mais_um_Possante.bibi();
mais_um_Possante.EU_VOU_DIRIGIR();
//# sourceMappingURL=index.js.map