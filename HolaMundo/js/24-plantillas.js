'use strict'

var nombre = prompt("ingresa tu nombre");
var apellido= prompt("ingresa tu apellido");

var texto= "Mi nombre es: " +nombre + " <br/>mis apellidos son: "+ apellido;

//ALT+96 COMILLAS INVERTIDAS
var texto =`
        <h1> Hola que tal</h1>
        <h3> mi nombre es ${nombre}</h3>
        <h1> mis apellidos son: ${apellido}</h1>
` ;

document.write(texto);
