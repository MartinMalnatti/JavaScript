'use strict'

/* 
Funciones
*/
 //defino la funbcion
function calculadora(numero1,numero2) {

    console.log("suma" +(numero1+numero2));
    console.log("resta "+ (numero1-numero2));
    console.log("multiplicacion "+(numero1*numero2));
    console.log("division "+(numero1/numero2));


    console.log("****************************************************")
    //return "Hola soy la calculadora";
}

//invocar o llamar a la funcion

for (let index = 0; index < 10; index++) {
    console.log(index);
    calculadora(index,8);
    
}

//funcion con parametros opcionales

function calculadora(numero1,numero2, mostrar=false) {

    if (!mostrar) {
        console.log("suma" +(numero1+numero2));
         console.log("resta "+ (numero1-numero2));
         console.log("multiplicacion "+(numero1*numero2));
        console.log("division "+(numero1/numero2));


    console.log("****************************************************")
    }

    
    //return "Hola soy la calculadora";
}

