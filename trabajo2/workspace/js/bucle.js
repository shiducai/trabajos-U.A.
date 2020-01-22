function buclejuego(){
      
          // Toco el desfase segun el personaje se vaya a salir por la pantalla
      if(personajePosx + desfasex > 300){desfasex = desfasex - 2;}
      if(personajePosx + desfasex < 200){desfasex = desfasex + 2;}
      if(personajePosy+ desfasey > 300){desfasey = desfasey - 2;}
      if(personajePosy + desfasey < 200){desfasey = desfasey + 2;}
        

       
        
        // Antes de hacer nada, borro la pantalla
        contador ++;
        contexto.clearRect(0,0,800,800)
        //contextonpc.clearRect(0,0,800,800)
       
       
        
       // Dibujo el fondo
        //contexto.drawImage(fondo,fondox,fondoy);
         contexto.drawImage(fondo,fondox+desfasex,fondoy+desfasey);
        
        // Dibujo la imagen
        //contexto.drawImage(personaje,posicionx,posiciony);
      
      contexto.drawImage(objetoClave,75,0,75,120,objetoClavePosx+desfasex,objetoClavePosy+desfasey,38,60);
      contexto.drawImage(personaje,contador*23,0,23,30,personajePosx+desfasex,personajePosy+desfasey,20,20);
       //console.log(personajePosx)
       //console.log(personajePosy)
      
      if(contador > 1){contador = 0}
   
   for(let k = 0;k<numeroNpc;k++){
       drawImageRot(contexto,sprite,npcs[k].posx+desfasex,npcs[k].posy+desfasey,12,12,npcs[k].angulo)
       //console.log(npcs[i].posx)
       npcs[k].muevete(con);
       
       
       //impacto al jugador
       if((npcs[k].posx>personajePosx-dif_p)&&(npcs[k].posx<personajePosx+dif_p)&&(npcs[k].posy>personajePosy-dif_p)&&(npcs[k].posy<personajePosy+dif_p)){
           personajePosx = 780;
           personajePosy = 765;
           $("#lienzo").fadeOut("slow")
           $("#menuLose").fadeIn("slow") 
       }
       
       //impacto al jugador
       //if(k==0){console.log(npcs[k].posx)}
     
        
   }
   /*  if (((npcs[k].posx+desfasex - personajePosx+desfasex) <= 20) && ((npcs[k].posy+desfasey - personajePosx+desfasey) <= 20))  {
           vidas = vidas - 1;
       }
        if (vidas <= 0){
            $("#lienzo").fadeOut("slow")
            $("#menuLose").fadeIn("slow")
        }*/
   //parte de win, va aca
        
    if (((personajePosx ) >= 360)  && ((personajePosx ) <= 400)
    &&((personajePosy ) <= 380)&&((personajePosy ) >= 340) ) //compañero es ajustar(si quiere, me parecen bien asi ) un poco los valores y ya, ya sale la parte de win
    { 
      	personajePosx = 0;
      	personajePosy = 0;
      	$("#lienzo").fadeOut("slow")
        $("#menuWin").fadeIn("slow")  
            
        //console.log("win")
    }
    
    if(con>2500){con=0}
    con+=1;

      clearTimeout(temporizador);
      temporizador = setTimeout("buclejuego()",16)
}
