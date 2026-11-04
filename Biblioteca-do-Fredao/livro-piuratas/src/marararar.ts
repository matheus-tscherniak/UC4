import { Bergamotim } from "./Bergamotim";
import { Chalupada } from "./Chalupada";
import { Galeoa } from "./Galeoa";
import { Navio } from "./Navio";

const naviarada: Navio[] = [
    new Bergamotim("Bergamota", 400, 20, 22, 24),
    new Chalupada("Cha de paulada", 150, 10, 15, 12),
    new Galeoa("Simba", 1000, 50, 14.8, 80)
]

naviarada.forEach(func => {
console.log(`
${func.atacar}`)
})

naviarada.forEach(func => {
console.log(`
${func.navegar}`)
})

naviarada.forEach(func => {
console.log(`
${func.receberDano(80)}`)
})

naviarada[2].reparar_navio()

naviarada.forEach(func => {
console.log(`
${func.exibirInformacoes()}`)
})

naviarada[1].explorando_ilha()