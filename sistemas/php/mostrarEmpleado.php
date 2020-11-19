<?php
//Mostrar los datos alamacenados en la tabla fuente
include "conexion.php";
$consultaSQL="Select *from empleado";
//Ejecutamos la consulta
$ejecutarConsulta=$conexion->query($consultaSQL);
/*recorre los elementos de la consulta dentro de un array 
y almacenarlos en una variable cada fila*/
?>
<script type="text/javascript">
    $(document).ready(function(){
        $("#tablaEmpleado").DataTable();
    });
</script>
<?php
echo "<table id='tablaEmpleado' class='display'>";
echo "<thead>
<th>Id</th>
<th>Clave</th>
<th>Nombre</th>
<th>Apellido Paterno</th>
<th>Apellido Materno</th>
<th>Teléfono</th>
<th>Eliminar</th>
<th>Editar</th>
</thead>";
while($fila=$ejecutarConsulta->fetch_array()) {
    //mostrar cada fila del array
    echo "<tr>";
    echo 
    "<td>".$fila[0]."</td>
    <td>".$fila[1]."</td>
    <td>".$fila[2]."</td>
    <td>".$fila[3]."</td>
    <td>".$fila[4]."</td>
    <td>".$fila[5]."</td>
    <td> <p class='btn btn-primary' onClick='eliminarEmpleado(".$fila[0].")'>Eliminar</p></td>";
    echo "<td><p class='btn btn-dark' onClick='editarEmpleado(".$fila[0].",".$fila[0].",`".$fila[2]."`,`".$fila[3]."`,`".$fila[4]."`,".$fila[0].")'>Editar</p></td>";
    echo "</tr>";
}
echo "</table>";
?>