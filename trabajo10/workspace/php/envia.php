<?php
    $mysqli = new mysqli("localhost", "usuario", "usuario", "trabajo10");
     $consulta = "
        UPDATE jugadores SET posx = '".$_GET['posx']."', posy = '".$_GET['posy']."' WHERE usuario = '".$_GET['usuario']."'
        ";
        
    $resultado = $mysqli->query($consulta);

    $mysqli->close();
?>
