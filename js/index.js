var nombre = document.getElementById('nombre');
var showName = document.getElementById('minombre');
function enviar() {
    showName.innerHTML = nombre.value;
    console.log(nombre.value);
}

function limpiar() {
    nombre.value ="";
    showName.innerHTML = "";
}