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

import { Podermon } from "./Podermon";
import { Pumketronicos } from "./Pumketronicos";

const poder1:Podermon = new Podermon("Sou eu bola de fogo", 80)
const poder2:Podermon = new Podermon("Folha narvalhada", 90)

const pumkemon1:Pumketronicos = new Pumketronicos("Charmano ", 90, 40, poder1)
const pumkemon2:Pumketronicos = new Pumketronicos("Bubasalto ", 70, 60, poder2)

pumkemon1.falacao()

pumkemon1.autodefesa_fraca(pumkemon2)
pumkemon2.autodefesa_poderosa(pumkemon1)

/* 
ENCAPSULAMENTO

Encapsulamento é o metodo de proteger os dados dos nossos objetos (tanto os atributos quando os métodos) e controle como podem ser acessados ou modificados.

Exemplo: Usando encapsulamento, podemos impedir que alguém deixe a vida do pokémon negativo.

Para utilizar encapsulamento nas nossas classes, precisamos colocar certas palavras antes dos atributos e antes dos métodos. São elas

    - public (que significa "publico")
    - private (que significa "privado")
    - protected (que significa "protejido")

Chamamos estes três de modificadores de acesso. O "public" permite que o atributo ou
método seja acessado e modificado em qualquer arquivo do meu programa DIRETAMENTE.
Exemplo:

Na classe -> public vidamon:number
Na cama -> pumkemon.vidamon = -999

O "private" NÃo permite que o atributo ou método seja acessado e modificado de qualquer jeito. Para poder fazer isso, precisamos chamar os métodos da classe.
*/

