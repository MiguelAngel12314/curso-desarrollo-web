var nombre = document.getElementById('nombres');
var ShowName = document.getElementById('minombre');
var apellido = document.getElementById('apellidos');
var ShowApellido = document.getElementById('miapellido');
var radiooptionsexo = document.getElementsByName('sexo');
var radiosex = document.getElementById('radiotiposexo');
var radioman = document.getElementById('men')
var radiowoman = document.getElementById('woman');
var checkboxsex = document.getElementById('tiposexo');
var checkboxsextipe = document.getElementById('checkboxtiposexo');
var estadoselec = document.getElementById('seleccion');
var selecedo= document.getElementById('estadovalor') ;

function enviar(){
    ShowName.innerHTML=nombre.value;
    console.log(nombre.value);
    condicional();
    radiosex.innerHTML = radiooptionsexo.value;
    console.log(apellido.value);
    ShowApellido.innerHTML = apellido.value;
    selecedo.innerHTML= estadoselec.value;
    condicionalRadio();
}

function limpiar(){
nombre.value = "";
ShowName.innerHTML="";
apellido.value ="";
ShowApellido.innerHTML ="";
}
 function condicional(){
     if(checkboxsex.checked){
         checkboxsextipe.innerHTML='Hombre';
     }else{
         checkboxsextipe.innerHTML='Mujer';
     }
 }
function condicionalRadio(){
if(men.checked){
    radiosex.innerHTML = radioman.value;
}else if (woman.checked){
    radiosex.innerHTML = radiowoman.value;
}
}