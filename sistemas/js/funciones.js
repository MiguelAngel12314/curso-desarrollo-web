$(document).ready(function(){
    $("#menuAddEmpleado").click(function(event){
        $("#colFormEmpleado").show("slow");
        $("#txtClave").focus();
        $("#divInicio").hide("slow");
});
    $("#menuInicio").click(function(event){
        $("#divInicio").show("slow");
        $("#colFormEmpleado").slideUp("slow");
        $("#divMostrarEmpleados").hide("slow");
});
    $("#menuVerEmpleados").click(function(event){
        $("#divInicio").hide("slow");
        $("#colFormEmpleado").hide("slow");
        $("#divMostrarEmpleados").load("./php/mostrarEmpleado.php");
        $("#divMostrarEmpleados").show("fast");
});
//codigo del boton guaradr empleado
$("#btnGuardarEmpleado").click(function(event){
//Declaracion de las variables a usar
var clave,nombre,ap,am,telefono;
//se recogen los campos de textos
clave=$("#txtClave").val();
nombre=$("#txtNombre").val();
ap=$("#txtAp").val();
am=$("#txtAm").val();
telefono=$("#txtTelefono").val();
//Verificamos que accion texto tiene el boton
if ($("#btnGuardarEmpleado").val()=="Guardar") {
    accion="agregarEmpleado";    
}
if($("btnGuardarEmpleado").val()=="Editar"){
    accion="editarEmpleado";
}
//Enviamos los datos al servidor, es un archivo php
    $.ajax({
        url:"./php/servidor.php",
        type:"GET",
        data:{accion:accion,clave:clave,
        nombre:nombre,ap:ap,am:am,telefono:telefono},        
        success:function(respuestaPHP){	
            //se verifica la respuesta del servidor

            if (respuestaPHP=="1") {
                alertify.success("Accion ejecutado correctamente");
                limpiarCamposEmpleado();
                $("#divMostrarEmpleados").load("./php/mostrarEmpleado.php");           
                $("#divMostrarEmpleados").show("fast");              
            }
            else
            {
                alertify.error("No se registro correctamente");
            }
            
        }
    });
});
$("#btnNuevo").click(function(event){
    limpiarCamposEmpleado();
});
function limpiarCamposEmpleado(){
    $("#txtClave").val("");
    $("#txtNombre").val("");
    $("#txtAp").val("");
    $("#txtAm").val("");
    $("#txtTelefono").val("");
    $("#txtClave").focus();

    $("#btnGuardarEmpleado").removeClass();
    $('#btnGuardarEmpleado').addClass("btn btn-primary");
    $('#btnGuardarEmpleado').val("Guardar");
    $("#btnGuardarEmpleado").html("<i class='fas fa-cog fa-spin '></i> Guardar");
    $('#txtClave').prop('readonly', false);
}

});
//agregacion de funciones
function editarEmpleado (id,clave,nombre,ap,am,telefono){
    console.log(id,clave,nombre);
    alertify.confirm("¿Deseas editar el empleado con id: "+ id +" ?",function(respuesta){
    $("#colorFormEmpleado").show("show");
    $("#txtClave").val(clave);
    $("#txtClave").attr("readonly","true");
    $("#txtNombre").val(nombre);
    $("#txtAp").val(ap);
    $("#txtAm").val(am);
    $("#txtTelefono").val(telefono);
    $("#btnGuardarEmpleado").removeClass();
    $('#btnGuardarEmpleado').addClass("btn btn-warning");
    $('#btnGuardarEmpleado').val("Editar");
    $("#btnGuardarEmpleado").html("<i class='fas fa-user-edit'></i> Actualizar");
});
}
function eliminarEmpleado(id){

    alertify.confirm("¿Deseas eliminar el empleado con id: "+id+" ?",function(respuesta){
        if (respuesta)
        {
            accion="eliminarEmpleado";
            $.ajax({
                url:"./php/servidor.php",
                type:"GET",
                data:{accion:accion,id:id},
                    success:function(respuestaPHP){
                        //se verifica la respuesta del servidor
                        if (respuestaPHP=="1") {
                            alertify.success("Empleado eliminado exitosamente");
                            $("#divMostrarEmpleados").load("./php/mostrarEmpleado.php");
                        }
                        else
                        {
                            alertify.error("No se elimino correctamente");
                        }    
                }
            });
        }
    });
}