'use strict'

/* 
tabla de multiplicar de un numero por pantalla
*/

var numero=parseInt(prompt("de que numero quieres la tabla",1));

document.write("<h1>Tabla del "+numero+"</h1>");

for (let index = 1; index <= 10; index++) {
    document.write(+index + " x "+numero+"= "+(index*numero)+ "<br/>")
    
}

//todas las tablas de multiplicar

for (let c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del "+c+"</h1>")
    for (let index = 1; index <= 10; index++) {
        document.write(+index + " x "+c+"= "+(index*c)+ "<br/>")
        
    }
}