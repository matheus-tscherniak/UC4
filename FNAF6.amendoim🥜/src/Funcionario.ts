// Classe base
export class Funcionario {
    protected noime:string

    constructor(noime) {
        this.noime = noime
    }

    calcularSalario(): number {
        return 1260
    }
}