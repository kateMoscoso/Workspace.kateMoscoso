<?php

  //Se recuperan los datos del formulario
  
  $FCodE      = $_GET['CodEmp'];

  //Se recoge la configuración
  include("conf.php");
  
  // Se establece la conexión con la base de datos
  $Conex = mysql_connect($server, $user, $clave) or die ('No he podido conectar');

	// Se selecciona la base de datos sobre la que se trabaja

  mysql_select_db($bd) or die ('No existe la Base de Datos');

	//Ahora se comprueba que el código que se pretende insertar, no existe
	//Para ello se busca antes de insertarlo. Se buscan todas las filas
	// que haya con ese código y si el número es mayor que cero, es que 
	// ya existe y no se puede introducir

	$Consulta="SELECT * FROM Empleados WHERE CodE='$FCodE'";
  $Resultado = mysql_query($Consulta, $Conex);	
	$NumFilasDevueltas = mysql_num_rows($Resultado);
 	mysql_free_result($Resultado);

  //vamos a ralentizar la respuesta para que tarde un poco (ajax)
  sleep(1);
  
	if ($NumFilasDevueltas > 0)
      $datos = "Si";  
	else
      $datos = "No";  
  // Se cierra la conexión   
  mysql_close($Conex);
  $datosjson = json_encode($datos);
  if($_GET['callback']) { 
      echo $_GET['callback']."(".$datosjson.")"; 
      } 
  else 
      echo $datosjson; 		
?>
