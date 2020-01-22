function temporizador(){
    contadorTiempo++;
    clearTimeout(tiempo)
    tiempo = setTimeout("temporizador()",1000)
}

async function anadir(){
    setTimeout("anadir()",3000)
	var tipo = Math.round(Math.random()*3)
	switch (tipo){
	case 0:
	bucleJuego(imgQc,155,0)
	break;
	case 1:
	bucleJuego(imgWc,306,0)
	break;
	case 2:
	bucleJuego(imgEc,488,0)
	break;
	case 3:
	bucleJuego(imgRc,636,0)
	break;
	}
	
}

async function bucleJuego(img,x,y){
    var muerto = false
    contextoNotas.clearRect(x,y-3,x+img.width,y)
	//contextoNotas.clearRect(0, 0, document.getElementById("npc").width,document.getElementById("npc").height);
	if(accion == true && presTecla == "q"){
                   if(x == 155 && y < 1000 && y>915){
                       /*puntos +=puntosNotas[i]
                       posx.splice(i,1)
                       posyNotas.splice(i,1)
                       puntosNotas.splice(i,1)
                       numeroNotas-=1*/
                       puntos+= Math.round(Math.random()*100)
                       muerto = true;
                   }
               }
               
               if(accion == true && presTecla == "w"){
                   if(x == 306 && y < 1000 && y>915){
                        /*puntos +=puntosNotas[i]
                        posx.splice(i,1)
                        posyNotas.splice(i,1)
                        puntosNotas.splice(i,1)
                        numeroNotas-=1*/
                        puntos+= Math.round(Math.random()*100)
                        muerto = true;
                     
                   }
               }
               if(accion == true && presTecla == "e"){
                   if(x == 488 && y < 1000 &&y>915){
                       /*puntos +=puntosNotas[i]
                       posx.splice(i,1)
                       posyNotas.splice(i,1)
                       puntosNotas.splice(i,1)
                       numeroNotas-=1*/
                       puntos+= Math.round(Math.random()*100)
                       muerto = true;
                   }
               }
               if(accion == true && presTecla == "r"){
                   if(x == 636 && y < 1000 && y>915){
                       /*puntos +=puntosNotas[i]
                       posx.splice(i,1)
                       posyNotas.splice(i,1)
                       puntosNotas.splice(i,1)
                       numeroNotas-=1*/
                       puntos+= Math.round(Math.random()*100)
                       muerto = true;
                   }
                   
                
               }
               if( y > 1100){
                   muerto = true
                   puntos -=25
               }
              
               
                
                
                if(puntos <= 0){
                    
                    $("#lose").fadeIn("slow")
                }
                if(contadorTiempo >= 197){
                    $("#win").fadeIn("slow")
                }
                
                document.getElementById("marcador").innerHTML = "puntuacion: "+puntos
		//contextoNotas.drawImage(img,x,y);
	y+=1;
	//setTimeout(function() { bucleJuego(img, x, y) },10) 
	 console.log(contadorTiempo)
	 if(muerto == false && contadorTiempo <= 197&& puntos>=0){
                   contextoNotas.drawImage(img,x,y);
                   setTimeout(function() { bucleJuego(img, x, y) },10) 
                   
                  
	 }
}
