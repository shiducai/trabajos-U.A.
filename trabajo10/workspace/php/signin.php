Ahora vamos a meter tu usuario en la base de datos

<?php
   // Se conecta a la base de datos
    $mysqli = new mysqli("localhost", "usuario", "usuario", "trabajo10");
    // Primero vamos a ver si hay un usuario con el mismo correo
     $consulta = "
        SELECT * FROM jugadores
        WHERE
        email = '".$_POST["email"]."'
        LIMIT 1
        ";
        echo $consulta;
        
    $resultado = $mysqli->query($consulta);
    $pasas = "no";
    if ($fila = $resultado->fetch_assoc()) {
       $pasas = "si";
    }
    
    if($pasas == "si"){
        // No puedes porque ya hay un usuario
        echo "Ya hay un usuario en la base de datos con ese correo";
        
    }else{
        // Ok no hay duplicado asi que vamos a insertar en la base de datos
        $consulta2 = "
        INSERT INTO jugadores
        VALUES (
        NULL,
        '".$_GET['usuario']."',
        '".$_GET['email']."',
        '".$_GET['nombre']."',
        '".$_GET['apellidos']."',
        '".$_GET['contrasena']."',
        '".$_GET['edad']."',
        '".$_GET['nave']."',
        '".$_GET['posx']."', 
        '".$_GET['posy']."',
        ''
        )
        ";
        echo $consulta2;
        $resultado2 = $mysqli->query($consulta2);
    }
    
    $mysqli->close();

?>
