'use strict'

/* 
moistrar todos los numeros impares que hay entre dos numeros introduciods porn el usuario

.*/

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));


document.write("estos son los numeros impares ");
while(numero1<numero2){
    numero1++;
    if (numero1%2!=0) {
        document.write(numero1 +";")
    }
}

