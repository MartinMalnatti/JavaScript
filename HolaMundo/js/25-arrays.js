'use strict'

//arrays,arreglos,Matrices

var nombre= "Martin";
var nombres=["Martin","Juan","Pedro",52,true];

var lenguajes= new Array("php","js","go","JAva");

//imprimir una posicion

console.log(lenguajes[2]);

//longitud de un array

console.log(lenguajes.length);

//pedir un elemnto del array en una ventana
var elemento=parseInt(prompt("que elemento del array quieres?",0))
alert(nombres[elemento]);


//recorrer el array y que me muestre todas las posiociones del array
nombres.forEach(element => {

    document.write("<li>"+element+"</li>");
    
});
//busqueda que devuelva la posicion

var busqueda = lenguajes.findIndex(lenguajes=>lenguaje=="js");
