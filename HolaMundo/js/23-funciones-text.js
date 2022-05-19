'use strict'

//transformacion detextos

var numero= 444;
var texto1 = "Bienvenido al curso de JavaScript de Martin Lucero";
var texto2= "es muy buen curso"

var dat =numero.toString();
    dat = texto1.toLowerCase();
    dat=texto2.toUpperCase();
console.log(dat);


//cualquier longitud

var nombre= "MArtinL";
console.log(nombre.length);

//concatenar

var textoTotal= texto1+texto2;
console.log(textoTotal); 
var textototal2=texto1.concat(texto2);

//lugar de aparcion de esa palabra 
var busqueda= texto1.indexOf("curso")
//ultima aparicion de una palabra
var busqueda2=texto1.lastIndexOf("curso");
//se fomra un array con la palabra en el indice0 mas la frae donde se encuentra
var busqueda2=texto1.match(curso/g);

//sacar una letra en una posicion especifica
var busqueda2=texto1.charAt(25);

//me extrae texto des tal indie a otro
var busqueda2=texto1.substring(14,5);

//se fomra un array con la palabra en el indice0 mas la frae donde se encuentra
var busqueda2=texto1.match(curso/g);

//palbras que empiecen con:
var busqueda2=texto1.endsWith("Bienvenido");

//palbras que empiecen con:
var busqueda2=texto1.includes("Bienvenido");

//reemplazr palabras
var busqueda2=texto1.replace("JavaScript, Prueba");

//cortar la frase y comenzarla a partir del indice que le paso
var busqueda2=texto1.slice(14);

//separar palabras por el separador que le paso
var busqueda2=texto1.split(" ");

//quita los espacios que hay por delante y por detras 
var busqueda2=texto1.trim();




