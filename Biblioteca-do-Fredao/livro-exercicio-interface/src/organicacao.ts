
import { Desenouravedor } from "./Desenouravedor"
import { Gergelinte } from "./Gergelinte"
import { Liderecnico } from "./Lider-tecnico"


const progarvore = new Desenouravedor("Jalajames", "Desenvolvedor")
const gergesol:Gergelinte = new Gergelinte("Solonildo", "Gerente")
const lediergenico:Liderecnico = new Liderecnico("Germinicolison", "Lider tecnico")

console.log("--- DESENVOLVEDOR ---")
progarvore.programar()
progarvore.trabalhar()

console.log("\n--- GERENTE ---")
gergesol.gerenciar()
gergesol.trabalhar()

console.log("\n--- LIDER TECNICO ---")
lediergenico.gerenciar()
lediergenico.programar()
lediergenico.trabalhar()