function NodesContainer(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "img/nodeContainer.png";
    this.nodes = new Array();
    this.nodesMin = new Array();
    this.nodesMin.push(new MinNode(25, SCREEN_HEIGHT-100, PLAY));
    this.nodesMin.push(new MinNode(110, SCREEN_HEIGHT-100, CLEAR));
    this.nodesMin.push(new MinNode(195, SCREEN_HEIGHT-100, ADVANCE));
    this.nodesMin.push(new MinNode(280, SCREEN_HEIGHT-100, TURN_LEFT));
    this.nodesMin.push(new MinNode(365, SCREEN_HEIGHT-100, TURN_RIGHT));
    this.nodesMin.push(new MinNode(450, SCREEN_HEIGHT-100, FOR));
    this.nodes.push(new InitialNode(this.x + 10, this.y + 20));

    this.addNode = function(index, node) {
        for (var i = index ; i < this.nodes.length; i++) {
            this.nodes[i].y += this.nodes[i].height;
        }
        this.nodes.splice(index, 0, node);
    }

    this.draw = function() {
        NODE_CTX.drawImage(this.image, this.x, this.y, this.width, this.height);
        NODE_CTX.drawImage(this.image, 25, SCREEN_HEIGHT-100, SCREEN_WIDTH-375, 75);
        for (var i = 0; i < this.nodesMin.length; i++) {
            this.nodesMin[i].draw();
        }
    }

    this.drawNodes = function() {
        for (var i = 0; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            node.draw();
            if (clickedNode != undefined) {
            var distance = distanceBetweenTwoPoints(clickedNode.x +25, clickedNode.y, node.x + 25, node.y + node.height);    
                if (distance < 25) {
                    NODE_CTX.drawImage(closeNode, node.x, node.y + node.height -7);
                }
            }
        }
    }

    this.getActions = function() {
        var actions = new Array();
        for (var i = 1; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            if (node instanceof ForNode) {
                var endLoop = false;
                var forIndex = i;
                while (!endLoop) {
                    i++;
                    if(this.nodes[i] instanceof EndForNode && this.nodes[i].forIndex == forIndex) {
                        endLoop = true;
                    }
                }
            } 
            actions = actions.concat(node.getActions()); 
        }
        return actions;
    }
}