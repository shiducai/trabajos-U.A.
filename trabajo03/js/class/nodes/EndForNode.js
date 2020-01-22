function EndForNode(forIndex, x, y) {
    this.forIndex = forIndex;
    this.x = x;
    this.y = y;
    this.width = 260;
    this.height = 50;
    this.action = END_FOR;
    this.img = new Image();
    this.img.src = "img/nodeEndFor.png";

    this.getActions = function() {
        return this.action;
    }

    this.draw = function() {
        NODE_CTX.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}