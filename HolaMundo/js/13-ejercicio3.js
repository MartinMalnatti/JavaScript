'use strict' 
/*
Haacer un programa que muestre rodos los numeros entre dos numeros instroducidps por usuario 
 */

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));
 
document.write("<h1> de " +numero1+"a" +numero2+ " estan estos numeros:</h1>");
for (let index = numero1; index <= numero2; index++) {
    document.write(index+"<br/>");
    
}