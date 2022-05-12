'use strict'
/* 
Mostrar todos los numeros divisores de un numero introducido por pantalla
*/

var numero1 = parseInt(prompt("Introduce un numero",1));

for (let index = 1; index <= numero1; index++) {
    if (numero1%index==0) {
        document.write("este numero es divisor de tu numero " +index + "<br/>")
        
    }
}
