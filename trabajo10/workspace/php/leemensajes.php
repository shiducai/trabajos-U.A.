<?php

      // Se conecta a la base de datos
    $mysqli = new mysqli("localhost", "usuario", "usuario", "trabajo10");
    $consulta = "
        SELECT * FROM chat ORDER BY utc ASC
        
        ";
    $resultado = $mysqli->query($consulta);
    
    while ($fila = $resultado->fetch_assoc()) {
       echo $fila['usuario'].": ".$fila['mensaje']."<br>";
    }
    
    
    $mysqli->close();

?>