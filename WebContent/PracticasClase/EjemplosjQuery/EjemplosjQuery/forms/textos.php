<?php
 if (strlen($_REQUEST['tema']) < 1)
    echo '[]';
 else{
   $tema = strtolower(utf8_decode(($_REQUEST['tema'])));
   $palabras = file("diccio.txt");
   $resultado = array();
   foreach ($palabras as $termino)
     if (strpos($termino,$tema)=== 0)
       $resultado[] = utf8_encode($termino);
   $datosjson = json_encode($resultado);
   echo $datosjson;
   }
?>    
