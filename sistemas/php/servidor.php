<?php
    include "conexion.php";
    //se recibe la accion a realizar
    $accion=$_GET["accion"];
    //se evalua la accion (registrar,etc..)
    switch($accion){
        case 'agregarEmpleado':
            //se recibe los datos a insertar
            $clave=$_GET["clave"];
            $nombre=$_GET["nombre"];
            $ap=$_GET["ap"];
            $am=$_GET["am"];
            $telefono=$_GET["telefono"];
            //se define la consulta sql a realizar
            $sql="insert into empleado values(0,'$clave','$nombre','$ap','$am','$telefono')";
            //se ejecuta la consulta de la bd
            $ejecutarSQL=$conexion->query($sql) or die ("Error al insertar al empleado".$conexion->error);
            //comprobar la coneccion
            if($ejecutarSQL){
                echo "1";
            }
            else
            {
                echo "0";
            }
    break;
        case 'editarEmpleado':
            // se reciben los datos a insertar
            $clave=$_GE["clave"];
            $nombre=$_GE["nombre"];
            $ap=$_GE["ap"];
            $am=$_GE["am"];
            $telefono=$_GE["telefono"];
            //se define la consulta sql a realizar
            $sql="update empleado set nombre='$nombre', apaterno='$ap',amaterno='$am',
            telefono='$telefono' where claveEmpleado='$clave'";
            //se ejecuta la consulta en la bd
            $ejecutarSQL=$conexion->query($sql) or die ("error al insertar al empleado".
            $conexion->error);
            //comprovamos ejecucion
            if ($ejecutarSQL) {
                echo "1";
            }
            else
            {
                echo "0";
            }
    break;
        case 'eliminarEmpleado':
            //se reciben los datos al insertar
            $id=$_GET["id"];
            //se define la consulta sql a realizar
            $sql="delete from empleado where id='$id'";
            //se ejecuta la consulta en la bd
            $ejecutarSQL=$conexion->query($sql) or die ("error al insertar el empleado".
            $conexion->error);
            //comprovamos la ejecucion
            if ($ejecutarSQL) {
                echo "1";
            }
            else
            {
                echo "0";
            }
    break;
    }
?>