<meta charset="UTF-8">
<?php
 
    // Se conecta a la base de datos
    $mysqli = new mysqli("localhost", "usuario", "usuario", "trabajo10");
    $consulta = "
        SELECT * FROM jugadores
        WHERE
        usuario = '".$_GET["usuario"]."'
        AND
        contrasena = '".$_GET["contrasena"]."'
        LIMIT 1
        ";
    $resultado = $mysqli->query($consulta);
    $pasas = "no";
    if ($fila = $resultado->fetch_assoc()) {
       $pasas = "si";
    }
    
    if($pasas == "si"){
        echo "ok";
    }else{
        echo "datos erroneos";
    }
    
    $mysqli->close();

?>