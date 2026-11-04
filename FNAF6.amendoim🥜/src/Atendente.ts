import { Funcionario } from "./Funcionario";

export class Atendante extends Funcionario {

    constructor(noime:string) {
        super(noime)
    }

    calcularSalario(): number {
        return 2250
    }
}