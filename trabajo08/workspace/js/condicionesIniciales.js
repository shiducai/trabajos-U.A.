///////////////////mapa y canvas//////////////


var contextoBack = document.getElementById("back").getContext("2d")
var imgEscenario = new Image();imgEscenario.src="imagenes/fondo.png"

var contextoTeclas = document.getElementById("teclas").getContext("2d")
var contextoNotas = document.getElementById("npc").getContext("2d")
var contextoHUD = document.getElementById("HUD").getContext("2d")

///////////////////////////////////////////
//////////img teclas///////////////////////


var imgQc = new Image();imgQc.src="imagenes/qc.png"

var imgWc = new Image();imgWc.src="imagenes/wc.png"

var imgEc = new Image();imgEc.src="imagenes/ec.png"

var imgRc = new Image();imgRc.src="imagenes/rc.png"

////////////////// control de teclas///////////
var presTecla = "";
var accion = true;


////////////////////////////////////////////////
///////////////notas////////////////////////////

var numeroNotas = 1;

var posxNotas = [155,306,488,636]
var notas = new Array()
var posy = 30
//var posx = new Array();
var posyNotas = new Array();
var puntosNotas = new Array();
var posx = new Array();
var probNotas = 0;
var dale = false;
/*var npc = new Array();
function notas(){
    this.posy ;
    this.posx ;
    
    this.posyNotas ;
    this.puntosNotas;
    
    
    
}
*/


////////////////////////////////////////////////
//////////general///////////////////////////////    

var puntos = 100;
var tempo;
var contadorTiempo = 0;
var tiempo;
var miaudio = new Audio("sonido/awaken.mp3");

/////////////menus///////////////
            
$("#iniciar").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    $("#back").fadeIn("slow")
    
    $("#npc").fadeIn("slow")
    miaudio.play();
    temporizador();
	anadir()
	contextoBack.drawImage(imgEscenario,0,0);
    //bucleJuego();
    
})
$("#instrucciones").click(function(){
    $("#menuPrincipal").fadeOut("slow")
    $("#menuInstrucciones").fadeIn("slow")
})

$("#volverMenu").click(function(){
    $("#menuInstrucciones").fadeOut("slow")
    $("#menuControles").fadeOut("slow")
    $("#menuPrincipal").fadeIn("slow")
    
})


$(".reiniciar").click(function(){
   location.reload();
    

})




