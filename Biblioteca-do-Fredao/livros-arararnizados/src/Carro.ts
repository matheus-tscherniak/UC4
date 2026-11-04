import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {

    constructor(rapidez:number) {
        super(rapidez)
        
    }

    acelerar(vrum:number):void {
        if(vrum > 0) {
            this.velocidade += vrum
        }
    }

    exibir_velocidade():void {
        console.log(`\n Passageiro: DIMINUIA ESTAH VELOCIDADE, PARECE QUE TAH EM ${this.velocidade}!`)
    }
}