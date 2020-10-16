var nombre = document.getElementById('nombre');
var Showname = document.getElementById('minombre');
var apellido = document.getElementById('apellido');
var Showapellido = document.getElementById('miapellido');

function enviar(){
    Showname.innerHTML=nombre.value;
    console.log(nombre.value);
    Showapellido.innerHTML=apellido.value;
    console.log(apellido.value);
}

function limpiar(){
    nombre.value="";
    Showname.innerHTML="";

    apellido.value="";
    Showapellido.innerHTML="";
}