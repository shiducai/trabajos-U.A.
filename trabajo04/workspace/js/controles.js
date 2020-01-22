     $(document).keydown(function (event) {
                if (event.key == "w") { 
                    myw = true;
                    direccion = "w";
                    contadorPer++;
                }
  
                
                if (event.key == "a") { 
                    mxi = true;
                    direccion = "a";
                    contadorPer++;
                }
                if (event.key == "d") {
                    mxd = true;
                    direccion = "d";
                    contadorPer++;
                }
                if (event.key == "s") {
                    mys = true;
                    direccion = "s";
                    contadorPer++;
                }
                if (event.key == "e") {
                    accion = true;
                }
            });
             $(document).keyup(function (event) {
                if (event.key == "w") { myw = false;contadorPer= 0}
                if (event.key == "a") { mxi = false;contadorPer = 0}
                if (event.key == "d") { mxd = false;contadorPer = 0}
                if (event.key == "s") { mys = false;contadorPer = 0}
                if (event.key == "e") { accion = false;}
            });