AFRAME.registerComponent("fish-target", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            //id
            var id = `fish${i}`;
      
            //position variables     
            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);
      
            var position = { x: posX, y: posY, z: posZ };
      
            //call the function
            this.createFish(id, position);
          }
        } ,

        createFish: function(id, position) { 
    
            var islandEl = document.querySelector("#island");
        
            var fishEl = document.createElement("a-entity");
        
            fishEl.setAttribute("id",id);
            fishEl.setAttribute("position",position);
            fishEl.setAttribute("scale",{x:500, y:500, z:500})
            fishEl.setAttribute("gltf-model", "./assets/models/coral_fish/scene.gltf");  
            fishEl.setAttribute("animation-mixer", {})
            islandEl.appendChild(fishEl);
          }
        });
        
        