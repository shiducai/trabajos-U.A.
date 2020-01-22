function Npc(x,y,angulo,velocidad,limxa,limxb,limya,limyb){
                this.posx = x;
                this.posy = y;
                this.angulo = angulo;
                this.velocidad = velocidad;
                this.limx_mas=limxa;
                this.limx_menos=limxb;
                this.limy_mas=limya;
                this.limy_menos=limyb;
                this.posxi = x;
                this.posyi = y;
                this.muevete = function(con){
                    if (this.posx>=this.limx_menos&&this.posx<this.limx_mas){
                        this.posx += Math.cos(this.angulo)*this.velocidad
                    }else{
                        this.posx += Math.cos(this.angulo)*this.velocidad
                        //this.posx -= Math.cos(this.angulo-0.1)*(this.velocidad)
                        //this.angulo += Math.PI/2;
                    }
                    
                    if (this.posy>=this.limy_menos&&this.posy<this.limy_mas){
                       this.posy += Math.sin(this.angulo)*this.velocidad
                    }else{
                        //this.posy -= Math.sin(this.angulo-0.1)*(this.velocidad)
                        this.posy += Math.sin(this.angulo)*this.velocidad
                        //this.angulo += Math.PI/2;
                    }
                    
                    if(con>2500){
                         this.posx=this.posxi;
                         this.posy=this.posyi; 
                    }
                    this.giraaleatorio();
                    this.colision();
                }
                this.giraaleatorio = function(){
                    this.angulo += (Math.random()-0.5)*0.09//0.1
                }
                this.colision = function(){
                    
                    
                    // 30 grados
                    var pregunta = contexto.getImageData(this.posx+desfasex+Math.cos(this.angulo+Math.PI/6)*10,this.posy+desfasey+Math.sin(this.angulo+Math.PI/6)*10,3,3)
                    if(pregunta.data[0] < 50){this.angulo -= 0.1}
                    // 60 grados
                    var pregunta = contexto.getImageData(this.posx+desfasex+Math.cos(this.angulo+Math.PI/3)*10,this.posy+desfasey+Math.sin(this.angulo+Math.PI/3)*10,3,3)
                    if(pregunta.data[0] < 50){this.angulo -= 0.3}
                     // -30 grados
                    var pregunta = contexto.getImageData(this.posx+desfasex+Math.cos(this.angulo-Math.PI/6)*10,this.posy+desfasey+Math.sin(this.angulo-Math.PI/6)*10,3,3)
                    if(pregunta.data[0] < 50){this.angulo += 0.1}
                    // -60 grados
                    var pregunta = contexto.getImageData(this.posx+desfasex+Math.cos(this.angulo-Math.PI/3)*10,this.posy+desfasey+Math.sin(this.angulo-Math.PI/3)*10,3,3)
                    if(pregunta.data[0] < 50){this.angulo += 0.3}
                    // 0 grados
                    var pregunta = contexto.getImageData(this.posx+Math.cos(this.angulo)*10,this.posy+Math.sin(this.angulo)*10,1,1)
                    if(pregunta.data[0] < 50){this.angulo +=0.6}
                    
                     //var pregunta2 = (this.posx>=this.limx_menos&&this.posx<this.limx_mas)
                    //if(pregunta2==false){this.angulo -=  0.001;}
                    //var pregunta3 = (this.posy>=this.limy_menos&&this.posy<this.limy_mas)
                    //if(pregunta3==false){this.angulo -=  0.001;}
                   
                }
            }