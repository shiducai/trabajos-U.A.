///////////////////mapa//////////////

var contextoEscenario = document.getElementById("escenario").getContext("2d")
var imgEscenario = new Image();imgEscenario.src="imagenes/mazmorra.png"

//////////////////mascarilla//////////////

var contextoMasc = document.getElementById("masc").getContext("2d")
var imgMasc = new Image();imgMasc.src="imagenes/mascmaz.png"

/////////////////////contexto npc////////

var contextoNpc = document.getElementById("npc").getContext("2d")

/////////////personaje////////////////
var imgPersonaje = new Image();imgPersonaje.src="imagenes/personaje.png"

var posxPerMap1 = 50;
var posyPerMap1 = 100;
var vidas = 1;
var llaves = 0;

var accion = false;
var contadorPer = 0;
var direccion ="";
var colision = "";
var myw = false;
var mys =false;
var mxi = false;
var mxd = false;

/////////alien///////////
var imgAlien = new Image();imgAlien.src = "imagenes/alien.png"

var posxAlien = 190;
var posyAlien = 750;


/////////////////llaves////////////

var imgLlave = new Image();imgLlave.src="imagenes/llave.png"
var contadorLlaves = 0;

//////llave1

var posxLlave1Map1 = 250;
var posyLlave1Map1 = 215;


//////llave2

var posxLlave2Map1 = 630;
var posyLlave2Map1 = 800;

//////llave3

var posxLlave3Map1 = 240;
var posyLlave3Map1 = 800;

//////////////////////////////////////

//////////////////puertas/////////////

var imgPuerta = new Image();imgPuerta.src="imagenes/puertas.png"
var contadorPuertas = 0;

////puerta 1///////////////

var posxPuerta1Map1 = 480;
var posyPuerta1Map1 = 320;

////puerta 2///////////////

var posxPuerta2Map1 = 450;
var posyPuerta2Map1 = 760;

////////////general/////////////

var millis = 1000/fps;
setTimeout("inicioMap1()",1000)
var temporizador;
var fps = 100;

var dx = 0;
var dy = 0;



/////////////////////lvl2//////////////////////

/////////mapa/////////////

var contextoLevel2 = document.getElementById("lvl2").getContext("2d")
var imgLevel2= new Image();imgLevel2.src="imagenes/lvl2.png"

//////////////////mascarilla//////////////

var contextoLevel2Masc = document.getElementById("lvl2masc").getContext("2d")
var imgLevel2Masc = new Image();imgLevel2Masc.src="imagenes/lvl2masc.png"

/////////////personaje////////////////

var posxPerMap2 = 770;
var posyPerMap2 = 60;



///////////////////////////////////////////////


/////////////menus///////////////
            
$("#inicio").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    inicioMap1();
    bucleMap1();
    
    
})
$("#instrucciones").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    $("#menuInstrucciones").fadeIn("slow")
})
$("#controles").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    $("#menuControles").fadeIn("slow")
    
}) 
$(".volverMenu").click(function(){
    $("#menuInstrucciones").fadeOut("slow")
    $("#menuControles").fadeOut("slow")
    $("#menuPrincipal").fadeIn("slow")
    
})
$(".reiniciar").click(function(){
   location.reload();
    

})

$(".nivel2").click(function(){
   
   $("#menuWin").fadeOut("slow")
   $("#escenario").fadeOut("slow")
   $("#lvl2").fadeIn("slow")
   bucleMap2();
   console.log("estoy dentro")
   
    

})