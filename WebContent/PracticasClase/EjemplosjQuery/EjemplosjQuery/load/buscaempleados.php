<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">-->
 <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">  
<?php
  //Se recuperan los datos del formulario
  $tipo = $_GET['tipo'];
  //Se recoge la configuración
  include("conf.php");

  // Se establece la conexión con la base de datos
  $Conex = mysql_connect($serevr, $user, $clave) or die ('No he podido conectar');
	// Se selecciona la base de datos sobre la que se trabaja
  mysql_select_db($bd) or die ('No existe la Base de Datos');

	$Consulta="SELECT CodE, Nombre, Sueldo, Categoria FROM Empleados WHERE CodD='$tipo'";
  $Resultado = mysql_query($Consulta, $Conex);	
	$NumFilasDevueltas = mysql_num_rows($Resultado);
	if ($NumFilasDevueltas == 0){
      echo "<br/>";  
	    echo '<center><b><Font color=red size=3>No hay empleados en ese departamento</font></b><br></center>';
      }
  else {
      echo "<table border='1'><tr><th>C&oacute;digo</th><th>Nombre</th><th>Sueldo</th><th>Categor&iacute;a</th></tr>\n";
      while ($fila = mysql_fetch_array($Resultado))
         echo "<tr><td>".$fila[CodE]."</td><td>".$fila['Nombre']."</td><td>".$fila['Sueldo']."</td><td>".$fila['Categoria']."</td></tr>\n";
      echo "</table>";   
      }    
  //Liberación del cursor    
	mysql_free_result($Resultado);	 	           				
  // Se cierra la conexión   
  mysql_close($Conex);
?>
