<?php
// tipo MIME necesario
// https://developer.mozilla.org/en-US/docs/Server-sent_events/Using_server-sent_events
header("Content-Type: text/event-stream\n\n"); 
$counter = rand(1, 5);
while (1) {  
  // evento ping    
  echo "event: ping\n";  
  $curDate = date(" h:i:s ",time());  
  echo 'data: {"time": "' . $curDate . '"}';  
  echo "\n\n";    
   
  // Envio de un mensaje y un evento nuevoMensaje en un intervalo aleatorio     
  $counter--;     
  if (!$counter) {    
    echo 'data: This is a message at time ' . $curDate . "\n\n"; 
    echo "event: nuevoEvento\n";
    echo 'data: nuevoEvento at time ' . $curDate . "\n\n"; 
    $counter = rand(1, 10);  
  }     
  ob_flush();  
  flush();  
  sleep(5);
}
?>
