"use strict";
/*
    1) Crie uma classe chamada Pokemon.
    O pokemon deve ter nome(string), vida(number), ataque(number), e um poder.
    O poder é uma classe que vamos criar também.

    Métodos do Pokemon:
    falar -> um método que repete o nome do pokémon algumes vezes.

    atacar -> um método todo que recebe outro pokemon e atacar ele, tirando vida dele.

    atacar_com_poder -> um método que recebe outro pokemon e atacar ele também, porém diz
    o nome do poder e usa o ataque do poder.

    2) Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number).
    Não precisa de nenhum método, exeto o constructor.

    3) Crie dois poderes e dois pokémons no cama e simule uma pequena batalha entre eles.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Podermon_1 = require("./Podermon");
const Pumketronicos_1 = require("./Pumketronicos");
const poder1 = new Podermon_1.Podermon("Sou eu bola de fogo", 80);
const poder2 = new Podermon_1.Podermon("Folha narvalhada", 90);
const pumkemon1 = new Pumketronicos_1.Pumketronicos("Charmano ", 90, 40, poder1);
const pumkemon2 = new Pumketronicos_1.Pumketronicos("Bubasalto ", 70, 60, poder2);
pumkemon1.falacao();
pumkemon1.autodefesa_fraca(pumkemon2);
pumkemon2.autodefesa_poderosa(pumkemon1);
