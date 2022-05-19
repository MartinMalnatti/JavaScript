'use strict'

/* 
1- pida 6 numeros por pantalla y os meta en un array
2-mostrar el array entero en el cuerpo de la pagina y en la consola
3-ordenarlo y mostrarlo
4-invertir su orden y mostrarlo
5-mostrar cuantos elementos tiene el array
6-busqueda de un valor introducido por el usuario, y que nos diga si lo encuentra y su indice

*/

function mostrarArray(elementos,textoCustom=""){
    document.write("<h1> Contenido del array " +textoCustom+ "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,index) =>{
     
     document.write("<li>"+elemento+"</li>");
 });
    document.write("</ul>");
}


var numeros=new Array();

for (var i = 0; i <= 5; i++) {
   //numeros[i]=parseInt(prompt("introduce 6 numeros",0));
    numeros.push(parseInt(prompt("introduce 6 numeros",0)));
    
}

//solo si llena de manera convencional el array
/*  for (var i = 0; i < numeros.length; i++) {
     document.write(numeros);
     console.log(numeros[i]);
     
 } */

 //si usamos el push para llenar el array lo recorremos un forEach
 document.write("<br/>");
 numeros.forEach((numero,index) =>{
     console.log("entro al forEach");
     document.write(numero);
 });

 mostrarArray(numeros);
 //Ordenar el array y mostrarlo
 numeros.sort(function(a,b){return a-b});

mostrarArray(numeros,'Ordenado');

//invertir orden y mostrar
numeros.reverse();
mostrarArray(numeros,'revertidos');


//contar elementos

document.write("<h1> El array tiene: "+numeros.length+" elementos </h1>");

//buscar un valor solicitado por el usuario

var busqueda=parseInt(prompt("Busca un numero",0));
var posicion=numeros.findIndex(numero=>numero==busqueda);

if (posicion && posicion !=-1) {
    document.write("<h1> Encontrado </h1>");
    document.write("<h1> Posicion de la busqueda: "+posicion+"</h1><hr/>");

}else{
    document.write("<h1> No Encontrado</h1><hr/>");
}

