<?php

  //Se recuperan los datos del formulario
  
  $FCodE      = $_POST['CodEmp'];
  $FNombre    = $_POST['Nombre'];
  $FSueldo    = $_POST['Sueldo'];
  $FCategoria = $_POST['Categoria'];
  $FCodD      = $_POST['CodDpto'];

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

	if ($NumFilasDevueltas > 0){
      echo "<br><br><br><br><center><hr><br><br>";  
	    die ('<center><b><Font color=red size=5>El código facilitado ya existe</font></b><br><br><hr></center>');
      }
	else{
	    //Ahora se va a comprobar si el departamento dado existe
			// puesto que si no existe e debe dar un error (integridad referencial)
			// la técnica es la misma que antes 	  

    	$Consulta="SELECT * FROM Departamentos WHERE CodD='$FCodD'";
      $Resultado = mysql_query($Consulta, $Conex);	
	    $NumFilasDevueltas = mysql_num_rows($Resultado);

	    if ($NumFilasDevueltas == 0){
         echo "<br><br><br><br><center><hr><br><br>";
	       die ('<b><Font color=red size=5>El departamento facilitado NO existe</font></b><br><br><hr></center>');
         }
	    else{
         $Consulta ="INSERT INTO Empleados (CodE, Nombre, Sueldo, Categoria, CodD)";
         $Consulta .= " VALUES ('$FCodE', '$FNombre', $FSueldo, '$FCategoria', '$FCodD')";          
         $Resultado = mysql_query($Consulta, $Conex);
         if ($Resultado){
            echo "<br><br><br><br><center><hr><br><br>";
	          echo "<b><Font color=red size=5>Nuevo empleado añadido</font></b><br><br><hr></center>";
            }
         else{
           echo "<br><br><br><br><center><hr><br><br>";
	         die ('<b><Font color=red size=5>Error: No se ha podido insertar</font></b><br><br><hr></center>');
           }
				 }
			}	 	           				
  // Se cierra la conexión   
  mysql_close($Conex);

?>
</body>
</html>