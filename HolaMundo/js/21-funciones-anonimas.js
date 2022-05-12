'use strict'

//funciones anonimas
//ES una funcion que no tiene nombre


var pelicula=function (nombre) {
    return "la pelicula es : "+nombre;
}

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos) {
    var sumar=numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame (5,7,function (dato) {
    console.log("la suma es " +dato);
    
},

function(dato) {
    console.log("La suma por 2 es:" +(dato*2));
    
});

//funcion con flecha

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos) {
    var sumar=numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame (5,7, dato => {
    console.log("la suma es " +dato);
    
},
dato => {
    console.log("La suma por 2 es:" +(dato*2));
    
});
