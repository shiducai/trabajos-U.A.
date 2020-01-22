function ForNode(x, y) {
    this.value;
    this.x = x;
    this.y = y;
    this.width = 260;
    this.height = 50;
    this.action = FOR;
    this.img = new Image();
    this.img.src = "img/nodeForLoop.png";
    this.imgValue = new Image();
    this.imgValue.src = "img/value.png";

    this.getActions = function() {
        var actions = new Array();
        var startIndex = nodesContainer.nodes.indexOf(this);
        var endIndex = startIndex + 1;
        var foundEndIndex = false;
        while (!foundEndIndex) {
            if (nodesContainer.nodes[endIndex] instanceof EndForNode && nodesContainer.nodes[endIndex].forIndex == startIndex) {
                foundEndIndex = true;
            } else {
                endIndex++;
            }
        }
        for (var loop = 0; loop < this.value; loop++) {
            for (var i = startIndex + 1; i < endIndex; i++) {
                var node = nodesContainer.nodes[i];
                if (node instanceof ForNode) {
                    var endLoop = false;
                    var forIndex = i;
                    while (!endLoop) {
                        i++;
                        if(nodesContainer.nodes[i] instanceof EndForNode && nodesContainer.nodes[i].forIndex == forIndex) {
                            endLoop = true;
                        }
                    }
                } 
                actions = actions.concat(node.getActions());
            }
        }
        return actions;
    }

    this.draw = function() {
        NODE_CTX.drawImage(this.img, this.x, this.y, this.width, this.height);
        NODE_CTX.drawImage(this.imgValue, this.x + 218, this.y + 6, 34, 34);
    }

    this.setValue = function(value) {
        this.value = value;
        this.imgValue.src = "img/value_" + this.value + ".png"
    }
}