     $(document).keydown(function (event) {
               
               
               if (event.key == "q") { 
                  if(dale == false){
                      
                  
                   accion = true;
                   presTecla="q";
                   dale = true;
                }
                   
               }
               
                if (event.key == "w") { 
                   if(dale == false){
                      
                  
                   accion = true;
                   presTecla="w";
                   dale = true;
                }
                }
                
                if (event.key == "e") {
                    if(dale == false){
                      
                  
                   accion = true;
                   presTecla="e";
                   dale = true;
                }
                }
                
                if (event.key == "r") {
                    if(dale == false){
                      
                  
                   accion = true;
                   presTecla="r";
                   dale = true;
                }
                }
  
           
            });
             $(document).keyup(function (event) {
             
                if (event.key == "q") { accion = false;presTecla="";dale = false}
                if (event.key == "w") { accion = false;presTecla="";dale = false}
                if (event.key == "e") { accion = false;presTecla="";dale = false}
                if (event.key == "r") { accion = false;presTecla="";dale = false}
            });