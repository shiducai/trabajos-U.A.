function MinNode(x, y, type) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 75;
    this.img = new Image();
    this.img.src;
    switch(type) {
        case PLAY:
            this.img.src = "img/playButton.png";
            break;
        case CLEAR:
            this.img.src = "img/clearButton.png";
            break;
        case ADVANCE:
            this.img.src = "img/nodeAdvanceMin.png";
            break;
        case TURN_LEFT:
            this.img.src = "img/nodeTurnLeftMin.png";
            break;
        case TURN_RIGHT:
            this.img.src = "img/nodeTurnRightMin.png";
            break;
        case FOR:
            this.img.src = "img/nodeForMin.png";
            break;
    }

    this.draw = function() {
        NODE_CTX.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}