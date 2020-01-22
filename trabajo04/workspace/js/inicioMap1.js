function inicioMap1(){
    
    ///////////////dibujo lo inicial //////////////
    contextoEscenario.drawImage(imgEscenario,0,0);
    contextoMasc.drawImage(imgMasc,0,0);
    contextoEscenario.drawImage(imgPersonaje,0,32,32,32,posxPerMap1,posyPerMap1,32,32);
    
     
    temporizador = setTimeout("bucleMap1()",1000)
    
}