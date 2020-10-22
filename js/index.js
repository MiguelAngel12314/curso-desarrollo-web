var nombre = document.getElementById('nombre');
var showName = document.getElementById('minombre');
var apellido = document.getElementById('apellido');
var showApellido = document.getElementById('miapellido');
var correo = document.getElementById('correo');
var showCorreo = document.getElementById('micorreo');
var contraseña = document.getElementById('contraseña');
var showContraseña = document.getElementById('micontraseña');

function enviar(){
    showName.innerHTML=nombre.value;
    console.log(nombre.value);

    showApellido.innerHTML=apellido.value;
    console.log(apellido.value);

    showCorreo.innerHTML=correo.value;
    console.log(correo.value);

    showContraseña.innerHTML=contraseña.value;
    console.log(contraseña.value);
}

function limpiar(){
    nombre.value="";
    showName.innerHTML="";

    apellido.value="";
    showApellido.innerHTML="";

    correo.value="";
    showCorreo.innerHTML="";

    contraseña.value="";
    showContraseña.innerHTML="";
}