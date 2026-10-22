export class Cacharro {
    private noime:string
    private idade:number
    private forca_dos_biceps:number
    private raca:string

    constructor(noimenino:string, veio:number, patao:number, linhagem:string) {
        this.noime = noimenino
        this.idade = veio
        this.forca_dos_biceps = patao
        this.raca = linhagem
    }

    get_noime():string {
        return this.noime
    }

    set_noime(renomeado:string):void {
        if (renomeado.length <= 2) {
            console.log(`\n Pais: nao vamos colocar o nome do cachorro de ${renomeado}`)
        }
    }

    get_idade():number {
        return this.idade
    }

    set_idade(veiozidade:number):void {
        if (veiozidade > 10) {
            console.log("\n Cliente: Este jah passou longe da validade!")
        }
    }

    get_forca_dos_biceps():number {
        return this.forca_dos_biceps
    }

    set_forca_dos_biceps(malhacao:number):void {
        if (malhacao > this.forca_dos_biceps) {
            console.log(`\n Treinador canino: hoje almentou ${malhacao - this.forca_dos_biceps}, estes biceps estao almentando muito!`)
        } else if (malhacao < this.forca_dos_biceps) {
            console.log("\n Treinador canino: tah que nem strimer, fraco, mimado e gordo! Bem gordo e suculento!")
        } else if (malhacao <= 0) {
            console.log(`\n Veterinario: Confirmado, seu cachorro eh uma flor delicada de tao fragil!`)
        }
    }

    get_raca():string {
        return this.raca
    }

    set_raca(skin_canina):void {
        if (skin_canina <= 3) {
        console.log("\n Especialista em Hot-Dog: mais que raca eh essa, mesmo assim consigo trabalhar com isso!")
        }
    }
}