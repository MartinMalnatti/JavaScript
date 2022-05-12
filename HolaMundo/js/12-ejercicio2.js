'use strict'

/* Utilizando un bucle, mostrar la suma y la media de numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado/* */

var suma= 0;
var contador = 0;

do {
    var numero = parseInt(prompt("introduce numeros hasta que metas uno ngativo,0"));
    if(isNaN(nuemro)){
        nuemro=0;
    }else if (numero>=0) {
        suma+=numero;
        contador++;
    }
} while (suma>=0);

alert("la usma de todos los numeros" +suma);
alert ("la media de todos los numero es"+(suma/contador))