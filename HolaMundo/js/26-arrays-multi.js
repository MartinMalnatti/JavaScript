'use strict'

var categorias=["Accion","Terror","Comedia"];
var peliculas= ["La verdad duele","La vida es bella","GRan Torino"];
var lenguajes= new Array("php","js","go","JAva");
var cine = [categorias,peliculas];

//agregar un lemento al array
peliculas.push("Batman");

//eliminar el ultimo elemento del array

peliculas.pop();
//eleminiar un elemento concreto de un arrray
peliculas.slice(1,1);

//
//convertir un array en un String
var arraySTR=peliculas.join;

var cadena ="TExto1,texto2,texto3";
var cadena_array=cadena.split(", ");

//ordenar por orden alfabetico
peliculas.sort;

//darle el orden inverso
peliculas.reverse;

for (let lenguaje in lenguajes){

    document.write(lenguajes[lenguaje]);
}

//busquedas

var busqueda= lenguajes.find(function(lenguaje){
    return lenguaje == "php";
});

var busqueda= lenguajes.find(lenguaje => lenguaje=="php");
    console.log(busqueda);
//busqueda por tipo de variable

var precios =[1,2,3,4,5];
var busqueda2=precios.some(precio => precio>=20); //devuelve un valor booleano;