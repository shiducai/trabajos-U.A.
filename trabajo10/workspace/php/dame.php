<?php
  $longaniza = "";
    $mysqli = new mysqli("localhost", "usuario", "usuario", "trabajo10");
     $consulta = "
        SELECT * FROM jugadores
        ";
    $resultado = $mysqli->query($consulta);
    while ($fila = $resultado->fetch_assoc()) {
       $longaniza .= $fila['usuario']."-".$fila['posx']."-".$fila['posy']."-".$fila['nave']."|";
    }
    echo $longaniza;
    $mysqli->close();
?>