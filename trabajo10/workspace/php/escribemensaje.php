<?php

      // Se conecta a la base de datos
    $mysqli = new mysqli("localhost", "usuario", "usuario", "trabajo10");
    $consulta = "
        INSERT INTO chat VALUES(NULL,'".$_POST['usuario']."','".$_POST['mensaje']."','".date('U')."')
        
        ";
    $resultado = $mysqli->query($consulta);
    
   
    
    $mysqli->close();

?>