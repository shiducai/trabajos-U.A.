function bucleMap2(){   
    contextoLevel2Masc.clearRect(0,0,800,800);
    contextoLevel2.clearRect(0,0,800,800);
   
   
           /////////////////////////desfase///////////////
    
     if(posxPerMap2 + dx > 400){dx-=5}
     if(posxPerMap2 + dx < 100){dx+=5}
     if(posyPerMap2 + dy > 400){dy-=5}
     if(posyPerMap2 + dy < 100){dy+=5}
    
    ///////////////////////////////////////////////
    
    contextoLevel2.drawImage(imgLevel2,0+dx,0+dy);
    contextoLevel2Masc.drawImage(imgLevel2Masc,0+dx,0+dy);
   
    
    ////////////////colisiones//////////
        
        /////abajo/////
        
                                         
            var alfaSM2 = contextoLevel2Masc.getImageData(posxPerMap2+16+dx,posyPerMap2+32+dy,1,1).data[3]
                if(alfaSM2 == 0){
                      colision ="";    
                }else{
                    mys = false;
                    colision ="s"; 
                    }
                
                
        /////arriba/////
        
        
            var alfaWM2 = contextoLevel2Masc.getImageData(posxPerMap2+16+dx,posyPerMap2+dy,1,1).data[3]
                if(alfaWM2 == 0){
                    colision ="";     
                }else{
                    myw = false;
                    colision = "w";
                    }
                
        
        /////derecha//////
        
        
            var alfaDM2 = contextoLevel2Masc.getImageData(posxPerMap2+32+dx,posyPerMap2+16+dy,1,1).data[3]
                if(alfaDM2 == 0){
                    colision = "";    
                }else{
                    mxd = false;
                    colision = "d";
                    }
            
        ////izquierda//////
            
            var alfaAM2 = contextoLevel2Masc.getImageData(posxPerMap2+dx,posyPerMap2+16+dy,1,1).data[3]
                if(alfaAM2 == 0){
                    colision = "";    
                }else{
                    mxi = false;
                    colision = "a";
                    }
                    
           
            
      
            ////////////win//////////
            if(posxPerMap2+dx <= 200+dx && posyPerMap2+dy <= 200+dy
                && posxPerMap2+dx >= 1+dx && posyPerMap2+dy >= 1+dy){
                
                    myw = false;
                    mys = false;
                    mxi = false;
                    mxd = false;
                
                $("#menuWin2").fadeIn("slow")
            }
  
    /////////movimiento//////////////
    
    if(myw == true){posyPerMap2 -= 3}
    if(mys == true){posyPerMap2 += 3}
    if(mxi == true){posxPerMap2 -= 3}
    if(mxd == true){posxPerMap2 += 3}
    
    
    
    
    
    
    
    
    
    
 
    

    
    /////////////////////////////////dibujo///////
                    
                    switch (direccion) {
                        case "w":
                            contextoLevel2.drawImage(imgPersonaje,contadorPer*32,96,32,32,posxPerMap2+dx,posyPerMap2+dy,32,32)
                            break;
                        
                        case "s":
                            contextoLevel2.drawImage(imgPersonaje,contadorPer*32,0,32,32,posxPerMap2+dx,posyPerMap2+dy,32,32)
                            break;
                        case "a":
                            contextoLevel2.drawImage(imgPersonaje,contadorPer*32,32,32,32,posxPerMap2+dx,posyPerMap2+dy,32,32)
                            break;
                            case "d":
                            contextoLevel2.drawImage(imgPersonaje,contadorPer*32,64,32,32,posxPerMap2+dx,posyPerMap2+dy,32,32)
                            break;
                            case "":
                            contextoLevel2.drawImage(imgPersonaje,0,64,32,32,posxPerMap2+dx,posyPerMap2+dy,32,32)
                            break;
                    }
                    if(contadorPer ==2){contadorPer = 0}
                    
                    

    
   
    
    clearTimeout(temporizador)
    temporizador = setTimeout("bucleMap2()",millis)
    
}