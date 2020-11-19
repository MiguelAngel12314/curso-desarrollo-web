<?php
    $server="localhost";
    $user="root";

    $password="";
    $bd="bdtessfp";
    $conexion=new mysqli($server,$user,$password,$bd) or die ("Error al conectar con la base de datos".$mysqli->erro);
?>
