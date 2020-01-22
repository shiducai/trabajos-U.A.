function InitialNode(x, y) {
    this.x = x;
    this.y = y;
    this.width = 260;
    this.height = 50;
    this.img = new Image();
    this.img.src = "img/initialNode.png"
    this.childs = new Array();

    this.draw = function() {
        NODE_CTX.drawImage(this.img, this.x, this.y, this.width, this.height);
        for (var i=0; i < this.childs.length; i++) {
            var node = this.childs[i];
            node.draw();
            if (clickedNode != undefined) {
                var distance = distanceBetweenTwoPoints(clickedNode.x +25, clickedNode.y, node.x + 25, node.y + node.height);    
                if (distance < 25) {
                    NODE_CTX.drawImage(closeNode, node.x, node.y + node.height -7);
                }
            }
        }
    }
}