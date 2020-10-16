var nombre = document.getElementById('nombre');
var showName = document.getElementById('minombre');
var apellido = document.getElementById('apellido');
var showaAellido = document.getElementById('miapellido');

function enviar(){
    showName.innerHTML=nombre.value;
    console.log(nombre.value);
    showApellido.innerHTML=apellido.value;
    console.log(apellido.value);
}

function limpiar(){
    nombre.value="";
    showName.innerHTML="";

    apellido.value="";
    showApellido.innerHTML="";
}