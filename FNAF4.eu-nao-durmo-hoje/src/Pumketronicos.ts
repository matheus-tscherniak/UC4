import { Podermon } from "./Podermon"

export class Pumketronicos {
    private nomemon:string
    private vidamon:number
    private ataquemon:number
    private podermon:Podermon

    constructor(noime:string, vida:number, ataque:number, poderoso:Podermon) {
        this.nomemon = noime
        this.vidamon = vida
        this.ataquemon = ataque
        this.podermon = poderoso
    }

    falacao():void {
        console.log(`\n ${this.nomemon} estah tentando falar algo! 
            \n ${this.nomemon.repeat(3)}, nao entendi nada.`)
    }

    autodefesa_poderosa(pumkemon2:Pumketronicos):void {
        pumkemon2.vidamon -= this.podermon.ataquepomon
        console.log(`\n ${this.nomemon}usou ${this.podermon.nomepomon} e deu isso de dano ${this.podermon.ataquepomon} em ${pumkemon2.nomemon} isso foi super efetivo! Faz denovo`)
        
        this.verificado(pumkemon2)

        console.log(`\n A vida de ${this.nomemon}tem isso de vida ${this.vidamon}!
 Mas ${pumkemon2.nomemon}ainda tem ${pumkemon2.vidamon} de vida da para tirar alguma coisa dele ainda`)
    }

    autodefesa_fraca(pumkemon2:Pumketronicos):void {
        pumkemon2.vidamon -= this.ataquemon
        console.log(`\n ${this.nomemon}usou paulada e deu isso de dano ${this.ataquemon} em ${pumkemon2.nomemon} isso foi epico! Faz denovo!`)
          
        this.verificado(pumkemon2)
        
        console.log(`\n A vida de ${this.nomemon} tem isso de vida ${this.vidamon}!
 Mas ${pumkemon2.nomemon}ainda tem ${pumkemon2.vidamon} de vida, ainda da para tirar alguma coisa dele`)
    }

    verificado(pumkemon2:Pumketronicos):void{
        if (pumkemon2.vidamon < 0) {
            pumkemon2.vidamon = 0
            console.log(`${pumkemon2.nomemon} foi derrotado, e ${this.nomemon} tah assaltando o defunto, ei calma aih!`)
        }

        if (pumkemon2.vidamon > 90) {
            pumkemon2.vidamon = 90
        }
    }
}