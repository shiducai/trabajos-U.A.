function Bunny (x, y) {
    LEFT = 0;
    RIGHT = 1;
    TOP = 2;
    DOWN = 3;
    this.x = x;
    this.y = y;
    this.size = 50;
    this.img = new Image();
    this.img.src = "img/rabbit.png"
    this.direction = RIGHT;
    this.actionStart = -5;
    this.actions = new Array();
    this.currentAction = undefined;
    
    this.doAction = function() {
        if (this.actions.length > 0 && this.actionStart == -5) {
            for (var i = 0; i < scene.tiles.length; i++) {
                var tile = scene.tiles[i];
                var collision = squareCollision(this.x, this.y+10, this.size, this.size, tile.x+5, tile.y+5, tile.width-10, tile.height-10);
                if (collision && tile instanceof YellowSquare) {
                    scene.switch(i);
                }
            }
            this.currentAction = this.actions[0];
            this.actions.splice(0,1);
            switch(this.currentAction) {
                case ADVANCE:
                    this.actionStart = 3;
                    break;
                case TURN_LEFT:
                case TURN_RIGHT:
                    this.actionStart = 1;
                    this.calculateDirection();
                    break;
                default:
                    // Nothing to do
                    break;
            }
        }
    }
    
    this.calculatePosX = function() {
        switch (this.direction) {
            case RIGHT:
                return this.x + this.size/3
                break;
            case LEFT:
                return this.x - this.size/3
                break;
            case TOP:
            case DOWN:
                return this.x
                break;
        }
    }
    
    this.calculatePosY = function() {
        switch (this.direction) {
            case LEFT:
            case RIGHT:
                return this.y;
                break;
            case TOP:
                return this.y - this.size/3;
                break;
            case DOWN:
                return this.y + this.size/3;
                break;
        }
    }
    
    this.calculateDirection = function () {
        switch (this.direction) {
            case LEFT:
                if (this.currentAction == TURN_LEFT) {
                    this.direction = DOWN;
                } else {
                    this.direction = TOP;
                }
                break;
            case RIGHT:
                if (this.currentAction == TURN_LEFT) {
                    this.direction = TOP;
                } else {
                    this.direction = DOWN;
                }
                break;
            case TOP:
                if (this.currentAction == TURN_LEFT) {
                    this.direction = LEFT;
                } else {
                    this.direction = RIGHT;
                }
                break;
            case DOWN:
                if (this.currentAction == TURN_LEFT) {
                    this.direction = RIGHT;
                } else {
                    this.direction = LEFT;
                }
                break;
        }
    }
    
    this.draw = function() {
        if (this.actionStart > 0) {
            switch (this.currentAction) {
                case ADVANCE:
                    this.x = this.calculatePosX();
                    this.y = this.calculatePosY();
                    if (this.actionStart == 3) {
                        switch (this.direction) {
                            case LEFT:
                                RABBIT_CTX.drawImage(this.img, 0, 32, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case RIGHT:
                                RABBIT_CTX.drawImage(this.img, 0, 64, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case TOP:
                                RABBIT_CTX.drawImage(this.img, 0, 96, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case DOWN:
                                RABBIT_CTX.drawImage(this.img, 0, 0, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                        }
                    } else if (this.actionStart == 2) {
                        switch (this.direction) {
                            case LEFT:
                                RABBIT_CTX.drawImage(this.img, 64, 32, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case RIGHT:
                                RABBIT_CTX.drawImage(this.img, 64, 64, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case TOP:
                                RABBIT_CTX.drawImage(this.img, 64, 96, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case DOWN:
                                RABBIT_CTX.drawImage(this.img, 64, 0, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                        }
                    } else if (this.actionStart == 1) {
                        switch (this.direction) {
                            case LEFT:
                                RABBIT_CTX.drawImage(this.img, 32, 32, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case RIGHT:
                                RABBIT_CTX.drawImage(this.img, 32, 64, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case TOP:
                                RABBIT_CTX.drawImage(this.img, 32, 96, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                            case DOWN:
                                RABBIT_CTX.drawImage(this.img, 32, 0, 32, 32,this.x, this.y, this.size, this.size);
                                break;
                        }
                    }
                    break;
                case TURN_LEFT:
                case TURN_RIGHT:
                    switch (this.direction) {
                        case LEFT:
                            RABBIT_CTX.drawImage(this.img, 32, 32, 32, 32,this.x, this.y, this.size, this.size);
                            break;
                        case RIGHT:
                            RABBIT_CTX.drawImage(this.img, 32, 64, 32, 32,this.x, this.y, this.size, this.size);
                            break;
                        case TOP:
                            RABBIT_CTX.drawImage(this.img, 32, 96, 32, 32,this.x, this.y, this.size, this.size);
                            break;
                        case DOWN:
                            RABBIT_CTX.drawImage(this.img, 32, 0, 32, 32,this.x, this.y, this.size, this.size);
                            break;
                    }
                    break;
            }
            this.actionStart--;
            if(this.actionStart == 0) {
                this.currentAction = undefined;
            }
        } else {
            switch (this.direction) {
                case LEFT:
                    RABBIT_CTX.drawImage(this.img, 32, 32, 32, 32,this.x, this.y, this.size, this.size);
                    break;
                case RIGHT:
                    RABBIT_CTX.drawImage(this.img, 32, 64, 32, 32,this.x, this.y, this.size, this.size);
                    break;
                case TOP:
                    RABBIT_CTX.drawImage(this.img, 32, 96, 32, 32,this.x, this.y, this.size, this.size);
                    break;
                case DOWN:
                    RABBIT_CTX.drawImage(this.img, 32, 0, 32, 32,this.x, this.y, this.size, this.size);
                    break;
            }
            if (this.actionStart > -5) {
                this.actionStart--;
                if (this.actionStart == -5) {
                    var outOfBounds = true;
                    for (var i = 0; i < scene.tiles.length; i++) {
                        var tile = scene.tiles[i];
                        var collision = squareCollision(this.x, this.y+10, this.size, this.size, tile.x+5, tile.y+5, tile.width-10, tile.height-10);
                        if (collision) {
                            outOfBounds = false;
                            if (tile instanceof YellowSquare) {
                                scene.switch(i);
                            } else if (tile instanceof RedSquare) {
                                endReached = true;
                            }
                        }
                    }
                    if (outOfBounds) {
                        resetScene();
                    }
                }
            }
        } 
    }
}