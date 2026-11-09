import { Bergamotim } from "./Bergamotim";
import { Chalupada } from "./Chalupada";
import { Galeoa } from "./Galeoa";
import { Navio } from "./Navio";

const naviarada: Navio[] = [
    new Bergamotim("Bergamota", 400, 20, 22, 24),
    new Chalupada("Cha de paulada", 150, 10, 15, 12),
    new Galeoa("Simba", 1000, 50, 14.8, 80)
]

naviarada.forEach((Navio) => {
    console.log((Navio.exibirInformacoes))
    console.log((Navio.atacar))
    console.log((Navio.navegar))
    console.log((Navio.receberDano))
    console.log((Navio.exibirInformacoes))
})

naviarada.forEach((Navio) => {
console.log(`
${(Navio).receberDano(80)}`)
})

naviarada[2].reparar_navio()

naviarada[1].explorando_ilha()

naviarada.forEach((Navio) => {
    console.log((Navio.exibirInformacoes))
})

// so utilizar console.log quando for num lugar como esse mas nos outros é return