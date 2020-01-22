var contexto = document.getElementById("lienzo").getContext("2d");

var temporizador;
var colisionPersonaje; 
var derrota;


//personaje
var personaje = new Image();
personaje.src = "imagenes/personaje.png";


var personajePosx = 780;
var personajePosy = 765;
var avance = 6;
var vidas = 1;
var contador = 0;

//objeto condicion de victoria
var objetoClave = new Image();
objetoClave.src = "imagenes/objetoClave.png";

var objetoClavePosx = 380;
var objetoClavePosy = 360;
var objetoClaveAngulo = 0;



//desfase y fondo
var desfasex = 0;
var desfasey = 0;

var fondo = new Image();
fondo.src = "imagenes/maze.png";
var fondox = 0;
var fondoy = 0;
var velocidad = 2;

//condicones inicilaes parte Raul//
var sprite = new Image();
sprite.src = "imagenes/sprite.png";
var numeroNpc = 12;
var npcs = new Array();
var posxI=0;
var posYI=0;
var limX_b =0;
var limX_a =0;
var limY_b =0;
var limY_a =0;
var con =0;

var dif_p=7;



//condicones inicilaes parte Raul//
var temporizador;


$("#inicio").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    //setTimeout("inicio()",1000);
    inicio();
    buclejuego();
    
})
$("#instrucciones").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    $("#menuInstrucciones").fadeIn("slow")
})
$("#controles").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    $("#menuControles").fadeIn("slow")
    
})
$("#creditos").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    $("#menuCreditos").fadeIn("slow")
    
})
$(".volverMenu").click(function(){
    $("#menuInstrucciones").fadeOut("slow")
    $("#menuControles").fadeOut("slow")
    $("#menuCreditos").fadeOut("slow")
    $("#menuPrincipal").fadeIn("slow")
    
})
$("#leer").click(function(){
    $("#menuWin").fadeOut("slow")
    $("#menuLeer").fadeIn("slow")

})
$("#llevar").click(function(){
    $("#menuWin").fadeOut("slow")
    $("#menuLlevar").fadeIn("slow")

})
$("#destruir").click(function(){
    $("#menuWin").fadeOut("slow")
    $("#menuDestruir").fadeIn("slow")

})
$("#dejar").click(function(){
    $("#menuWin").fadeOut("slow")
    $("#menuDejar").fadeIn("slow")

})
$(".reiniciar").click(function(){
   location.reload();
    

})
$("#objetoClave").click(function(){
    $("#menuWin").fadeIn("slow")
})
$("#siguiente").click(function(){
    $("#menuLeer").fadeOut("slow")
    $("#menuLose").fadeIn("slow")

})