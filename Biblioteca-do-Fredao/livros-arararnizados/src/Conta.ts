export class Conta {
    protected saldo_protegido:number

    constructor(cofre:number) {
        this.saldo_protegido = cofre
    }

    protected atualizacao_protegida(juros:number):void {
        if(juros < 0) {
            this.saldo_protegido -= juros
        }
    }
}