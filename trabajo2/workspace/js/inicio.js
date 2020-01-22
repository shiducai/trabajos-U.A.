function inicio(){
   
   
    for(let i = 0;i<numeroNpc;i++){
    posiciones(i);
    npcs[i] = new Npc(posxI,posYI,Math.random()*Math.PI*2,(Math.random())/2,limX_a,limX_b,limY_a,limY_b);
    //console.log(npcs[i].posx);
}

   
$("#lienzo").click(function(event){
      if (event.offsetX < personajePosx + desfasex){personajePosx = personajePosx - avance}
      if (event.offsetX > personajePosx + desfasex){personajePosx = personajePosx + avance}
      if (event.offsetY < personajePosy + desfasey){personajePosy = personajePosy - avance}
      if (event.offsetY > personajePosy + desfasey){personajePosy = personajePosy + avance}
      
})


// esto va en bucle, disculpe compañero, pensaba que aca, error mio
    //if (((personajePosx + desfasex) - (objetoClavePosx + desfasex)) < 39 && ((personajePosy + desfasey) - (objetoClavePosy + desfasey)) < 61 ){ $("#menuWin").fadeIn("slow")}
   /* if ((personajePosx ) >= 360  && ((personajePosx ) <= 400)
    &&((personajePosy ) <= 380)&&((personajePosy ) >= 340) ) //compañero es ajustar(si quiere, me parecen bien asi ) un poco los valores y ya, ya sale la parte de win
    { $("#menuWin").fadeIn("slow")
        //console.log("win")
    }*/
    //&& and 
    
  

//contextonpc.fillStyle ="red"


    temporizador = setTimeout("bucleJuego()",1000);
   
}