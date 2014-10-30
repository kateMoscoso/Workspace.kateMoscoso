<?php
  //Se recuperan los datos del formulario
  $tipo = $_GET['tipo'];
  //Se recoge la configuración
  include("conf.php");

  // Se establece la conexión con la base de datos
  $Conex = mysql_connect($server, $user, $clave) or die ('No he podido conectar');
	// Se selecciona la base de datos sobre la que se trabaja
  mysql_select_db($bd) or die ('No existe la Base de Datos');

	$Consulta="SELECT CodE, Nombre, Sueldo, Categoria FROM Empleados WHERE CodD='$tipo'";
  $Resultado = mysql_query($Consulta, $Conex);	
	$NumFilasDevueltas = mysql_num_rows($Resultado);
	if ($NumFilasDevueltas == 0){
      $datos_json='<br/><center><b><Font color=red size=3>No hay empleados en ese departamento</font></b><br></center>';    
      }
  else {
      $datos = array();
      while ($fila = mysql_fetch_array($Resultado,MYSQL_ASSOC))
         $datos[] = $fila;    
      $datos_json = json_encode($datos);        
      }    
  //Liberación del cursor    
	mysql_free_result($Resultado);	 	           				
  // Se cierra la conexión   
  mysql_close($Conex);
  echo $datos_json;
?>
