class Pacman {
  constructor(pacX, pacY) {
    this.pacX = pacX;
    this.pacY = pacY;
    this.pacMouth = "closed";
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = "pac";
    this.element.style.backgroundImage = "url(img/pacboy-active-light.png)";
    this.element.textContent = "Robert: 0";
    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  update() {
    this.element.style.left = this.pacX * TILE_SIZE + "px";
    this.element.style.top = this.pacY * TILE_SIZE + "px";

    if (this.pacMouth === "closed") {
      this.element.style.backgroundPositionX = "0px";
      this.pacMouth = "opened";
    } else {
      this.element.style.backgroundPositionX = TILE_SIZE + "px";
      this.pacMouth = "closed";
    }
  }

  move(dir) {
    switch (dir) {
      case "ArrowRight":
        this.pacX += 1;
        break;
      case "ArrowLeft":
        this.pacX -= 1;
        break;
      case "ArrowDown":
        this.pacY += 1;
        break;
      case "ArrowUp":
        this.pacY -= 1;
        break;
    }
    this.update();
  }

}