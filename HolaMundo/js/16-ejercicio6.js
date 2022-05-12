'use strict'
/* 
un programa que nos diga si un numero es par o impar
*/

var numero1 = parseInt(prompt("Introduce un numero",0));

while (isNaN(numero1)) {
    numero1=parseInt(prompt("Introduce un numero",0));
}

if (numero1 %2 ==0) {
    alert("Es un numero par");
}else{
    alert("es impar");
}
