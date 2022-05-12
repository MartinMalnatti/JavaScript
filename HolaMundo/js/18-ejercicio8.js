'use strict'

/* 
calculadora

*/

var numero1 = parseInt(prompt("Introduce un numero",0));
var numero2 = parseInt(prompt("Introduce un numero",0));

while (numero1<0 || numero2 <0 || isNaN(numero1) || isNaN(numero2)) {
    numero1=parseInt(prompt("Introduce el primer numero",0));
    numero2=parseInt(prompt("Introduce el segundo numero",0));

}

var resultado= "la suma es:" +(numero1+numero2)+" <br/>"+
                "la resta es: "+(numero1-numero2)+" <br/>"+
                "la multiplicacion es: "+(numero1*numero2)+" <br/>"+
                "la división es: "+(numero1/numero2)+" <br/>"

var resultadoCMD= "la suma es:" +(numero1+numero2)+" \n "+
                "la resta es: "+(numero1-numero2)+" \n "+
                "la multiplicacion es: "+(numero1*numero2)+" \n"+
                "la división es: "+(numero1/numero2)+" \n"

document.write(resultado);
alert(resultadoCMD);