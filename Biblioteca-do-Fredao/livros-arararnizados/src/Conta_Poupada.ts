import { Conta } from "./Conta";

export class Conta_Poupada extends Conta{

    constructor(cofrinho:number) {
        super(cofrinho)
    }

    public aplicacao_publica():void {
        this.atualizacao_protegida
    }

    public conferencia_publica():void {
        console.log(`\n Bancaria: Voceh tem ${this.saldo_protegido} em sua conta!`)
    }
}