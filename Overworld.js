class Overworld {
    constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(".game-canvas");
      if (this.canvas) {
        this.ctx = this.canvas.getContext("2d");
      } else {
        console.error("Impossible de récupérer le contexte 2D du canevas.");
      }
    }  
  
    init() {
      const image = new Image();
      image.onload = () => {
        this.ctx.drawImage(image, 0, 0);
      };
      image.src = "images/map.png"}
  }