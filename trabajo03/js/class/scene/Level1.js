function Level1(){
    this.tiles = new Array();
    this.tiles.push(new BlueSquare(100, 200));
    this.tiles.push(new YellowSquare(150, 200));
    this.tiles.push(new YellowSquare(200, 200));
    this.tiles.push(new YellowSquare(200, 250));
    this.tiles.push(new YellowSquare(250, 250));
    this.tiles.push(new YellowSquare(300, 250));
    this.tiles.push(new YellowSquare(300, 200));
    this.tiles.push(new YellowSquare(350, 200));
    this.tiles.push(new RedSquare(350, 150));
    
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
                   
                //TODO este bloque de comentarios, esta en en las lineas 3 a 9;
                
                //   //cubo1   
                //     var CA1Map1 = new cuboAmarillo();
                    
                //         CA1Map1.cuboPosx = 150;
                //         CA1Map1.cuboPosy = 200;
                        
                //     //cubo2
                //     var CA2Map1 = new cuboAmarillo();
                //         CA2Map1.cuboPosx = 200;
                //         CA2Map1.cuboPosy = 200;
                        
                //     //cubo3
                //     var CA3Map1 = new cuboAmarillo();
                //         CA3Map1.cuboPosx = 200;
                //         CA3Map1.cuboPosy = 250;
                        
                //     //cubo4
                //     var CA4Map1 = new cuboAmarillo();
                //         CA4Map1.cuboPosx = 250;
                //         CA4Map1.cuboPosy = 250;
                        
                //     //cubo5
                //     var CA5Map1 = new cuboAmarillo();
                //         CA5Map1.cuboPosx = 300;
                //         CA5Map1.cuboPosy = 250;
                          
                //     //cubo6
                //     var CA6Map1 = new cuboAmarillo();
                //         CA6Map1.cuboPosx = 300;
                //         CA6Map1.cuboPosy = 200;
                        
                //     //cubo7
                //     var CA7Map1 = new cuboAmarillo();
                //         CA7Map1.cuboPosx = 350;
                //         CA7Map1.cuboPosy = 200;
                        
              
                        //Todo este bloque equivale a la funcion draw, lo mejor es que si en vez de 7 cuadros tienes 2 millones la funcion draw tb los pintaria.
                        
                    //   //draw camino
                    // tiles.drawImage(amarillo,CA1Map1.cuboPosx,CA1Map1.cuboPosy,CA1Map1.width,CA1Map1.heigth);
                    // tiles.drawImage(amarillo,CA2Map1.cuboPosx,CA2Map1.cuboPosy,CA2Map1.width,CA2Map1.heigth);
                    // tiles.drawImage(amarillo,CA3Map1.cuboPosx,CA3Map1.cuboPosy,CA3Map1.width,CA3Map1.heigth);
                    // tiles.drawImage(amarillo,CA4Map1.cuboPosx,CA4Map1.cuboPosy,CA4Map1.width,CA4Map1.heigth);
                    // tiles.drawImage(amarillo,CA5Map1.cuboPosx,CA5Map1.cuboPosy,CA5Map1.width,CA5Map1.heigth);
                    // tiles.drawImage(amarillo,CA6Map1.cuboPosx,CA6Map1.cuboPosy,CA6Map1.width,CA6Map1.heigth);
                    // tiles.drawImage(amarillo,CA7Map1.cuboPosx,CA7Map1.cuboPosy,CA7Map1.width,CA7Map1.heigth);

// /**    esta parte me da error
 
//                     //draw inicio  
//                     tiles.drawImage(cuboAzul,100,200,50,50);
//                       //draw final
//                     tiles.drawImage(cuboRojo,350,150,50,50); **/
                    
                    
                    //parte del cambio de color (no se las variables del persoje asi que pongo el ejemplo para sustituir mas adelante)
                    // if (perPosx + perWidth >= CA1Map1.cuboPosx && perPosx <= CA1Map1.cuboPosx + CA1Map1.width && perPosy + perHeight >= CA1Map1.cuboPosy && perPosy <= CA1Map1.cuboPosy + CA1Map1.heigth  ){
                    //     tiles.clearRect(CA1Map1.cuboPosx,CA1Map1.cuboPosy,CA1Map1.width,CA1Map1.heigth);
                    //     tiles.drawImage(cuboAzul,CA1Map1.cuboPosx,CA1Map1.cuboPosy,CA1Map1.width,CA1Map1.heigth);
                         
                    // }
                    // if (perPosx + perWidth >= CA2Map1.cuboPosx && perPosx <= CA2Map1.cuboPosx + CA2Map1.width && perPosy + perHeight >= CA2Map1.cuboPosy && perPosy <= CA2Map1.cuboPosy + CA2Map1.heigth  ){
                    //     tiles.clearRect(CA2Map1.cuboPosx,CA2Map1.cuboPosy,CA2Map1.width,CA2Map1.heigth);
                    //     tiles.drawImage(cuboAzul,CA2Map1.cuboPosx,CA2Map1.cuboPosy,CA2Map1.width,CA2Map1.heigth);
                         
                    // }
                    // if (perPosx + perWidth >= CA3Map1.cuboPosx && perPosx <= CA3Map1.cuboPosx + CA3Map1.width && perPosy + perHeight >= CA3Map1.cuboPosy && perPosy <= CA3Map1.cuboPosy + CA3Map1.heigth  ){
                    //     tiles.clearRect(CA3Map1.cuboPosx,CA3Map1.cuboPosy,CA3Map1.width,CA3Map1.heigth);
                    //     tiles.drawImage(cuboAzul,CA3Map1.cuboPosx,CA3Map1.cuboPosy,CA3Map1.width,CA3Map1.heigth);
                         
                    // }
                    // if (perPosx + perWidth >= CA4Map1.cuboPosx && perPosx <= CA4Map1.cuboPosx + CA4Map1.width && perPosy + perHeight >= CA4Map1.cuboPosy && perPosy <= CA4Map1.cuboPosy + CA4Map1.heigth  ){
                    //     tiles.clearRect(CA4Map1.cuboPosx,CA4Map1.cuboPosy,CA4Map1.width,CA4Map1.heigth);
                    //     tiles.drawImage(cuboAzul,CA4Map1.cuboPosx,CA4Map1.cuboPosy,CA4Map1.width,CA4Map1.heigth);
                         
                    // }
                    // if (perPosx + perWidth >= CA5Map1.cuboPosx && perPosx <= CA5Map1.cuboPosx + CA5Map1.width && perPosy + perHeight >= CA5Map1.cuboPosy && perPosy <= CA5Map1.cuboPosy + CA5Map1.heigth  ){
                    //     tiles.clearRect(CA5Map1.cuboPosx,CA5Map1.cuboPosy,CA5Map1.width,CA5Map1.heigth);
                    //     tiles.drawImage(cuboAzul,CA5Map1.cuboPosx,CA5Map1.cuboPosy,CA5Map1.width,CA5Map1.heigth);
                         
                    // }
                    // if (perPosx + perWidth >= CA6Map1.cuboPosx && perPosx <= CA6Map1.cuboPosx + CA6Map1.width && perPosy + perHeight >= CA6Map1.cuboPosy && perPosy <= CA6Map1.cuboPosy + CA6Map1.heigth  ){
                    //     tiles.clearRect(CA6Map1.cuboPosx,CA6Map1.cuboPosy,CA6Map1.width,CA6Map1.heigth);
                    //     tiles.drawImage(cuboAzul,CA6Map1.cuboPosx,CA6Map1.cuboPosy,CA6Map1.width,CA6Map1.heigth);
                         
                    // }
                    // if (perPosx + perWidth >= CA7Map1.cuboPosx && perPosx <= CA7Map1.cuboPosx + CA7Map1.width && perPosy + perHeight >= CA7Map1.cuboPosy && perPosy <= CA7Map1.cuboPosy + CA7Map1.heigth  ){
                    //     tiles.clearRect(CA7Map1.cuboPosx,CA7Map1.cuboPosy,CA7Map1.width,CA7Map1.heigth);
                    //     tiles.drawImage(cuboAzul,CA7Map1.cuboPosx,CA7Map1.cuboPosy,CA7Map1.width,CA7Map1.heigth);
                         
                    // }