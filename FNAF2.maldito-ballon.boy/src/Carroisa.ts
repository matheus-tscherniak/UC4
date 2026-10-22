/* 
    Crie a classe Carro siga as intruçõse para criar lo usando de exemplo a classe Cachorro.

    O carro deve ter:
    marca, tipo, ano

    O que o carra faz:
    - ele anda
    - ele buzina

    Depois de criar classes , crie 3 carros diferentes no "index.ts" , chame os seus atibutos em um console.log e chame seus metodos.
*/

export class Carroisa {

    marca:string
    tipo:string
    ano:number

    constructor(marca_do_possante:string, tipo_de_queijo_do_possante:string, velhice_do_possante:number) {
        this.marca = marca_do_possante
        this.tipo = tipo_de_queijo_do_possante
        this.ano = velhice_do_possante
    }

    EU_VOU_DIRIGIR():void {
        console.log("Ele pode dirigir antes de beber")
    }

    bibi():void {
        console.log(`O carro ${this.marca} faz bibi`)
    }
}