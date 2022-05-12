'use strict'

//programa que pida 2 numeros y que nos diga cual es el mayor el menor y si son iguales
//que si los numeros no son un numero o soon menor q 0

var numero1= parseInt(prompt("introduce el primer numero",0));
var numero2=parseInt(prompt("introduce el primer numero",0));


while (numero1<=0 ||numero2>=0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1= parseInt(prompt("introduce el primer numero",0));
    var numero2=parseInt(prompt("introduce el primer numero",0));
}

if (numero1 == numero2) {
    alert("los numeros son iguales");

}else if(numero1>numero2){
    alert("el numero mayor es "+numero1);

}else if(numero2>numero1){
    alert("el numero mator es el" +numero2)
}else{
    alert("introdce un numero correcto");
}
