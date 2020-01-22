/**
 * Inicializa el canvas del escenario
 */
function initSceneCanvas(){
    $("#tileCanvas").attr("width", SCREEN_WIDTH-350);
    $("#tileCanvas").attr("height", SCREEN_HEIGHT-50);
    SCENE_CTX = document.getElementById("tileCanvas").getContext("2d");
    loadLevel();
}
/**
 *Actualiza el canvas del escenario
 */
function updateSceneCanvas() {
    SCENE_CTX.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGHT);
    scene.draw();
} 
/**
 * Inicializa el canvas del rabbit
 */
function initRabbitCanvas(){
    $("#rabbitCanvas").attr("width", SCREEN_WIDTH-350);
    $("#rabbitCanvas").attr("height", SCREEN_HEIGHT-50);
    RABBIT_CTX = document.getElementById("rabbitCanvas").getContext("2d");
    bunny = new Bunny(scene.tiles[0].x, scene.tiles[0].y - 10);
    
}
/**
 *Actualiza el canvas del conejo
 */
function updateRabbitCanvas() {
    RABBIT_CTX.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGHT);
    bunny.doAction();
    bunny.draw();
} 

/**
 * Inicializa el canvas del background
 */
function initBackgroundCanvas() {
    $("#backgroundCanvas").attr("width", SCREEN_WIDTH-350);
    $("#backgroundCanvas").attr("height", SCREEN_HEIGHT-50);
    BG_CANVAS = document.getElementById("backgroundCanvas").getContext("2d");
    var backgroundImage = new Image();
    backgroundImage.onload = function(){
        var patern = BG_CANVAS.createPattern(backgroundImage, 'repeat'); // Create a pattern with this image, and set it to "repeat".
        BG_CANVAS.fillStyle = patern;
        BG_CANVAS.fillRect(25, 25, SCREEN_WIDTH-350, SCREEN_HEIGHT-150); // context.fillRect(x, y, width, height);
    }
    backgroundImage.src = "img/praire.png";
}
/**
 * Inicializa el canvas de los nodos de programación
 */
function initNodeCanvas() {
    $("#nodeCanvas").attr("width", SCREEN_WIDTH);
    $("#nodeCanvas").attr("height", SCREEN_HEIGHT);
    NODE_CTX = document.getElementById("nodeCanvas").getContext("2d");
    nodesContainer = new NodesContainer(SCREEN_WIDTH-325, 25, 300, SCREEN_HEIGHT-50);
}
/**
 *Actualiza el canvas de los nodos de programación
 */
function updateNodeCanvas() {
    NODE_CTX.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGHT);
    nodesContainer.draw();
    nodesContainer.drawNodes();
    if (clickedNode != undefined) {
        clickedNode.draw();
    }
}

/**
 * Inicializa el canvas de los nodos de programación
 */
function initButtons() {
    $("#nodeCanvas").mousedown(function(event){
        //Controla si es una miniatura o un botón
        for(var i = 0; i < nodesContainer.nodesMin.length; i++) {
            var node = nodesContainer.nodesMin[i];
            var isCollide = squareCollision(node.x, node.y, node.width, node.height,
                                            event.offsetX, event.offsetY, 1, 1);
            if (isCollide) {
                switch(node.type) {
                    case PLAY:
                        resetScene();
                        bunny.actions = nodesContainer.getActions();
                        break;
                    case CLEAR:
                        for (var j = nodesContainer.nodes.length-1; j > 0; j--) {
                            nodesContainer.nodes.splice(j,1);
                        }
                        break;
                    case ADVANCE:
                        isNodeClicked = true;
                        clickedNode = new AdvanceNode(event.offsetX-130, event.offsetY-25);
                        break;
                    case TURN_LEFT:
                        isNodeClicked = true;
                        clickedNode = new TurnLeftNode(event.offsetX-130, event.offsetY-25);
                        break;
                    case TURN_RIGHT:
                        isNodeClicked = true;
                        clickedNode = new TurnRightNode(event.offsetX-130, event.offsetY-25);
                        break;
                    case FOR:
                        isNodeClicked = true;
                        clickedNode = new ForNode(event.offsetX-130, event.offsetY-25);
                        break;
                }
            }                                            
        }
    });

    $("#nodeCanvas").mouseup(function(event){
        if(isNodeClicked && clickedNode != undefined) {
            for (var i = 0; i < nodesContainer.nodes.length; i++) {
                var node = nodesContainer.nodes[i];
                var distance = distanceBetweenTwoPoints(clickedNode.x +25, clickedNode.y, node.x + 25, node.y + node.height);    
                if (distance < 25) {
                    clickedNode.x = node.x;
                    clickedNode.y = node.y + node.height;
                    nodesContainer.addNode(i+1, clickedNode);
                    if (clickedNode instanceof ForNode) {
                        var value = undefined;
                        do {
                            value = getForValue();
                        } while(isNaN(value) || value > 5 || value < 1);
                        clickedNode.setValue(value);
                        nodesContainer.addNode(i+2, new EndForNode(i+1, clickedNode.x, clickedNode.y + clickedNode.height)); 
                    }
                }
            }
            isNodeClicked = false;
            clickedNode = undefined;
        }
    });

    $("#nodeCanvas").mousemove(function(event){
        if(isNodeClicked && clickedNode != undefined) {
            clickedNode.x = event.offsetX-130;
            clickedNode.y = event.offsetY-25;
        }
    });
}

/**
 * Controla una collision entre imagenes por solpamiento
 */
function squareCollision(r1X, r1Y, r1Width, r1Height, r2X, r2Y, r2Width, r2Height) {
	var	isCollide =  r1X + r1Width >= r2X &&  	// Calcula las condiciones de solapamiento de dos rectangulos en un plano.
					 r1X <= r2X + r2Width &&	
					 r1Y + r1Height >= r2Y &&
					 r1Y <= r2Y + r2Height;
	return isCollide;
}

/**
 * Calcula distancia entre 2 puntos
 */
function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
}

/**
 * Recoge el número de veces que se ejecutara el bucle.
 */
function getForValue(){
    var loops = parseInt(window.prompt("How many times will the loop be executed?"," (Max. 5)"), 10);
    if (loops!=null){
        return loops;
    }
}

/**
 * Resetea el nivel
 */
function resetScene() {
    loadLevel();
    endReached = false;
    bunny = new Bunny(scene.tiles[0].x, scene.tiles[0].y - 10);
}

/**
 * Carga el nivel adecuado
 */ 
function loadLevel() {
    switch(level) {
        case 1:
            scene = new Level1();
            break;
        case 2:
            scene = new Level2();
            break;
        default:
            scene = new Level2();
            break;
    }
}