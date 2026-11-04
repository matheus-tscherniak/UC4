export class Persovaca {
    protected noime:string
    protected vida:number

    constructor (noime:string, saude_do_pai:number) {
        this.noime = noime
        this.vida = saude_do_pai
    }

    curar():void {
        this.vida += 10
        console.log(`\n Narrador: O ${this.noime} usou um persentual de seu poder para poder recuperar ${this.curar} de sua saude!`)
        if (this.vida > 100) {
            this.vida = 100
        }
    }
}    // continua no próximo capitulo!