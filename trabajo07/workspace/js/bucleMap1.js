function bucleMap1(){   
    contextoMasc.clearRect(0,0,1024,1024);
    contextoEscenario.clearRect(0,0,1024,1024);
   
    
    contextoEscenario.drawImage(imgEscenario,0,0);
    contextoMasc.drawImage(imgMasc,0,0);
    contextoNpc.drawImage(imgAlien,posxAlien,posyAlien);
    
    /////dibujo llaves////////
    
    contextoEscenario.drawImage(imgLlave,posxLlave1Map1,posyLlave1Map1);
    contextoMasc.drawImage(imgLlave,posxLlave1Map1,posyLlave1Map1);
    
    contextoEscenario.drawImage(imgLlave,posxLlave2Map1,posyLlave2Map1);
    contextoMasc.drawImage(imgLlave,posxLlave2Map1,posyLlave2Map1);
    
    contextoEscenario.drawImage(imgLlave,posxLlave3Map1,posyLlave3Map1);
    contextoMasc.drawImage(imgLlave,posxLlave3Map1,posyLlave3Map1);
    
    
    ///donijo puertas////////
    contextoEscenario.drawImage(imgPuerta,0,0,120,112,posxPuerta1Map1,posyPuerta1Map1,95,80);
    contextoMasc.drawImage(imgPuerta,0,0,120,112,posxPuerta1Map1,posyPuerta1Map1,95,80);
    
    contextoEscenario.drawImage(imgPuerta,0,0,120,112,posxPuerta2Map1,posyPuerta2Map1,95,80);
    contextoMasc.drawImage(imgPuerta,0,0,120,112,posxPuerta2Map1,posyPuerta2Map1,95,80);
    
    
    
    
  
    
    ////////////////colisiones//////////
        
        /////abajo/////
        
                                         
            var alfaS = contextoMasc.getImageData(posxPerMap1+16,posyPerMap1+32,1,1).data[3]
                if(alfaS == 0){
                      colision ="";    
                }else{
                    mys = false;
                    colision ="s"; 
                    }
                
                
        /////arriba/////
        
        
            var alfaW = contextoMasc.getImageData(posxPerMap1+16,posyPerMap1,1,1).data[3]
                if(alfaW == 0){
                    colision ="";     
                }else{
                    myw = false;
                    colision = "w";
                    }
                
        
        /////derecha//////
        
        
            var alfaD = contextoMasc.getImageData(posxPerMap1+32,posyPerMap1+16,1,1).data[3]
                if(alfaD == 0){
                    colision = "";    
                }else{
                    mxd = false;
                    colision = "d";
                    }
            
        ////izquierda//////
            
            var alfaA = contextoMasc.getImageData(posxPerMap1,posyPerMap1+16,1,1).data[3]
                if(alfaA == 0){
                    colision = "";    
                }else{
                    mxi = false;
                    colision = "a";
                    }
                    
            if (posxPerMap1 <=5){mxi = false}
            
           /////////////////colision/accion objetos/////////////////
           ////llaves//////
           
           if(accion == true){
               if(posxPerMap1 >=posxLlave1Map1 - 15 
               && posxPerMap1 <= posxLlave1Map1 + 45
               && posyPerMap1 >= posyLlave1Map1 - 15
               && posyPerMap1 <= posyLlave1Map1 + 40){
                   
                   llaves = 1;
                   posxLlave1Map1 = -1000;
                    
                   
                   
               }
                if(posxPerMap1 >= posxLlave2Map1 - 15 
               && posxPerMap1 <= posxLlave2Map1 + 45
               && posyPerMap1 >= posyLlave2Map1 - 15
               && posyPerMap1 <= posyLlave2Map1 + 40){
                   
                   llaves = 2;
                   posxLlave2Map1 = -1000;
                    
                    
                   
               }
               
                if(posxPerMap1 >= posxLlave3Map1 - 15 
               && posxPerMap1 <= posxLlave3Map1 + 45
               && posyPerMap1 >= posyLlave3Map1 - 15
               && posyPerMap1 <= posyLlave3Map1 + 40){
                   
                    posxLlave3Map1 = -1000;
                    $("#npc").fadeIn("slow")
                  
                    vidas = 0;
                    
                   
               }
               
               if(llaves == 1){
                    if(posxPerMap1 >= posxPuerta1Map1 -30
                    && posxPerMap1 <= posxPuerta1Map1 + 80 
                    && posyPerMap1 >= posyPuerta1Map1 -50
                    && posyPerMap1 <= posyPuerta1Map1 +30){
                       
                       posxPuerta1Map1 = -1000;
                  /*    for(var i ; i < 2; i++){
                         contextoEscenario.drawImage(imgPuerta,i*120,0,120,112,posxPuerta1Map1,posyPuerta1Map1,95,80)
                         
                         if (i == 3){
                             posxPuerta1Map1 = -1000;
                         }
                      }*/
                        
                       
                    }  
                   }
                   
                   if(llaves == 2){
                   if(posxPerMap1 >= posxPuerta2Map1-30 
                    && posxPerMap1 <= posxPuerta2Map1 +80
                    && posyPerMap1 >= posyPuerta2Map1 -50
                    && posyPerMap1 <= posyPuerta2Map1 +30){
                       
                       posxPuerta2Map1 = -1000;
                    /*  for(var q ; q < 2; q++){
                         contextoEscenario.drawImage(imgPuerta,q*120,0,120,112,posxPuerta2Map1,posyPuerta2Map1,95,80)
                         
                         if (i == 3){
                             posxPuerta2Map1 = -1000;
                         }
                      }*/
                        
                       
                       
                   }
               }
           }
            
            
            
            ////////////win//////////
            if(posxPerMap1 >= 880 && posyPerMap1 >= 990){
                    myw = false;
                    mys = false;
                    mxi = false;
                    mxd = false;
                $("#menuWin").fadeIn("slow")
            }
    ///////////////////////////////////////////////////////
            ///////lose/////////
            if(vidas == 0){
                    myw = false;
                    mys = false;
                    mxi = false;
                    mxd = false;
                $("#menuLose").fadeIn("slow")
            }
    
    /////////movimiento//////////////
    
    if(myw == true){posyPerMap1 -= 3}
    if(mys == true){posyPerMap1 += 3}
    if(mxi == true){posxPerMap1 -= 3}
    if(mxd == true){posxPerMap1 += 3}
    
    /////////////////////////////////dibujo///////
                    
                    switch (direccion) {
                        case "w":
                            contextoEscenario.drawImage(imgPersonaje,contadorPer*32,96,32,32,posxPerMap1,posyPerMap1,32,32)
                            break;
                        
                        case "s":
                            contextoEscenario.drawImage(imgPersonaje,contadorPer*32,0,32,32,posxPerMap1,posyPerMap1,32,32)
                            break;
                        case "a":
                            contextoEscenario.drawImage(imgPersonaje,contadorPer*32,32,32,32,posxPerMap1,posyPerMap1,32,32)
                            break;
                            case "d":
                            contextoEscenario.drawImage(imgPersonaje,contadorPer*32,64,32,32,posxPerMap1,posyPerMap1,32,32)
                            break;
                            case "":
                            contextoEscenario.drawImage(imgPersonaje,0,64,32,32,posxPerMap1,posyPerMap1,32,32)
                            break;
                    }
                    if(contadorPer ==2){contadorPer = 0}
                    
                    
  
    console.log(llaves)
    clearTimeout(temporizador)
    temporizador = setTimeout("bucleMap1()",millis)
    
}