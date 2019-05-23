class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    render() {
        this.element = document.createElement("div");
        this.element.className = "stage";
        return this.element;
      }
    
    mount(parent) {
        parent.appendChild(this.render());
    }
}