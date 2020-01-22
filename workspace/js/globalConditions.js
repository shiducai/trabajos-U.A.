// Variables de tamaño de la pantalla.
var SCREEN_WIDTH;
var SCREEN_HEIGHT;
var NODE_CTX;
var SCENE_CTX;
var BG_CANVAS;
var RABBIT_CTX;

// Temporizador del juego
var gameCooldown;
var endReached = false;
var level = 1;
var scene;

// Constantes para las acciones y tipos de los nodos
var PLAY = 0;
var CLEAR = 1;
var ADVANCE = 2;
var TURN_LEFT = 3;
var TURN_RIGHT = 4;
var FOR = 5;
var END_FOR = 6;

// Variable que controla el nodo pulsado
var isNodeClicked = false;
var clickedNode = undefined;
var closeNode = new Image();
closeNode.src = "img/closeNode.png"

// Estructuras de datos necesarias para el control de operaciones.
var nodesContainer;

// Variable del conejo
var bunny;

