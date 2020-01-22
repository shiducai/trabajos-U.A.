<?php

      // Se conecta a la base de datos
    $mysqli = new mysqli("localhost", "usuario", "usuario", "trabajo10");
    $consulta = "
        SELECT * FROM jugadores
        WHERE
        juego = 'si'
        
        ";
    $resultado = $mysqli->query($consulta);
    
    while ($fila = $resultado->fetch_assoc()) {
       echo $fila['jugador']." ".$fila['posx']." ".$fila['posy']."  ".$fila['nave'];
    }
    
    
    $mysqli->close();

?>