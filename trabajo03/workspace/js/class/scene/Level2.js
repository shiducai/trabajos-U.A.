function Level2(){
    this.tiles = new Array();
    this.tiles.push(new BlueSquare(100, 200));
    this.tiles.push(new YellowSquare(150, 200));
    this.tiles.push(new YellowSquare(200, 200));
    this.tiles.push(new YellowSquare(250, 200));
    this.tiles.push(new YellowSquare(300, 200));
    this.tiles.push(new YellowSquare(350, 200));
    this.tiles.push(new YellowSquare(350, 150));
    this.tiles.push(new YellowSquare(350, 100));
    this.tiles.push(new YellowSquare(350, 50));
    this.tiles.push(new YellowSquare(300, 50));
    this.tiles.push(new YellowSquare(250, 50));
    this.tiles.push(new YellowSquare(200, 50));
    this.tiles.push(new YellowSquare(200, 100));
    this.tiles.push(new YellowSquare(200, 150));
    
    this.tiles.push(new YellowSquare(200, 250));
    this.tiles.push(new YellowSquare(200, 300));
    this.tiles.push(new YellowSquare(250, 300));
    this.tiles.push(new YellowSquare(300, 300));
    this.tiles.push(new YellowSquare(300, 350));
    this.tiles.push(new YellowSquare(350, 350));
    this.tiles.push(new YellowSquare(400, 350));
    this.tiles.push(new RedSquare(400, 300));
    
    this.draw = function() {
        for (var i = 0; i < this.tiles.length; i++) {
            var tile = this.tiles[i];
            SCENE_CTX.drawImage(tile.img, tile.x, tile.y, tile.width, tile.height);
        }
    }
    
    this.switch = function(index) {
        this.tiles.splice(index+1, 0, new StarSquare(this.tiles[index].x, this.tiles[index].y));
        this.tiles.splice(index, 1);
    }
}