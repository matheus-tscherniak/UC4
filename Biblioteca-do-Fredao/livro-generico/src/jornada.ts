import { Guerreilson } from "./Guerreilson";
import { IAtacante } from "./IAtacante";
import { Magolino } from "./Magolino";

const guerreiro = new Guerreilson("Arthorto")
const mago = new Magolino("Gold Merlin")

guerreiro.atacar();
mago.lancarMagia();

function luta(personagem:IAtacante, inimigo:IAtacante):void {
    personagem.atacar()
    inimigo.atacar()
}

luta(guerreiro,mago)

mago.curar(25)