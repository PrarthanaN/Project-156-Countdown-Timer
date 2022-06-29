AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }, 
      speedOfAscent: {type: "number", default: 0}   
    },
    init: function () {
      window.addEventListener("keydown", (e) => {

        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedOfAscent = this.el.getAttribute("position");
        var diverRotation = this.data.speedOfRotation;
        var diverPosition = this.data.speedOfAscent;

        if (e.key === "ArrowRight") {
          if (diverRotation.z > -20) { 
            diverRotation.z -= 0.5; 
            this.el.setAttribute("rotation", diverRotation); 
          }
          if (diverposition.y > -2) { 
            diverRotation.y -= 0.1; 
            this.el.setAttribute("position", diverPosition); 

          }}
        if (e.key === "ArrowUp") {
          if (diverRotation.x > -10) { 
            diverRotation.x -= 0.5; 
            this.el.setAttribute("rotation", diverRotation); 
          }}

        if (e.key === "ArrowLeft") {
          if (diverRotation.z < 20) { 
            diverRotation.z += 0.5; 
            this.el.setAttribute("rotation", diverRotation); 
          }
          if (diverposition.y < 2) { 
            diverRotation.y += 0.1; 
            this.el.setAttribute("position", diverPosition); 
          }
        }

        if (e.key === "ArrowDown") {
          if (diverRotation.x < 10) { 
            diverRotation.x += 0.5; 
            this.el.setAttribute("rotation", diverRotation); 
          }}
        })
      }}
    )
  