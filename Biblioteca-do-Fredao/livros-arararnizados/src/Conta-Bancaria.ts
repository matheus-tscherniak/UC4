export class Conta_Bancaria {
    private saldo:number

    constructor(dindin:number) {
        this.saldo = dindin
    }

    public consultar_saldo():void {
        console.log(`\n Eu mesmo: Eu soh tenho ${this.saldo}, como vou durar este mes?`)
    }

    depositar(valor:number):void {
        if(valor > 0) {
            this.saldo += valor
        }
    }
}