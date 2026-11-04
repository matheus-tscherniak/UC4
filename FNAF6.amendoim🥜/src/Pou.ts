export class Pou {
    protected noime:string

    constructor(noime:string) {
        this.noime = noime
    }

    fazer_som():void {
        console.log(`\n ${this.noime} estah fazendo um som!`)
    }
}