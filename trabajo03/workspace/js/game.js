$(document).ready(function(){
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    init();
});

function init(){
    initBackgroundCanvas();
    initNodeCanvas();
    initSceneCanvas();
    initRabbitCanvas();
    initButtons();
    gameCooldown = setTimeout("gameLoop()",200);
}
function gameLoop(){
    updateSceneCanvas();
    updateNodeCanvas();
    updateRabbitCanvas();
    if (endReached) {
        level++;
        resetScene();
        for (var j = nodesContainer.nodes.length-1; j > 0; j--) {
            nodesContainer.nodes.splice(j,1);
        }
    } 
    clearTimeout(gameCooldown);
    gameCooldown = setTimeout("gameLoop()",1000/24);
}