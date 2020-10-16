var nombre = document.getElementById('nombres');
var ShowName = document.getElementById('minombre');
var apellido = document.getElementById('apellidos');
var ShowApellido = document.getElementById('miapellido');

function enviar(){
    ShowName.innerHTML=nombre.value;
    console.log(nombre.value);
    

    console.log(apellido.value);
    ShowApellido.innerHTML = apellido.value;
}

function limpiar(){
nombre.value = "";
ShowName.innerHTML="";
apellido.value ="";
ShowApellido.innerHTML ="";
}
