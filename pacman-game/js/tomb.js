class Tomb {
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
    }

    render() {
        this.element = document.createElement("div");
        this.element.className = "tomb";
        this.element.style.backgroundImage = "url(img/tomb.png)";
        return this.element;
      }

    update() {
        this.element.style.left = this.posX * TILE_SIZE + "px";
        this.element.style.top = this.posY * TILE_SIZE + "px";
    }
    mount(parent) {
        parent.appendChild(this.render());
        this.update();
      }
}