'use strict'

//parametros de resto y spread.

function listadoFrutas(fruta1, fruta2,...resto_de_frutas) {

    console.log("Fruta 1 "+fruta1);
    console.log("Fruta 2 "+fruta2)
    console.log("Resto " +resto_de_frutas);
    
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera","Melon", "Coco");