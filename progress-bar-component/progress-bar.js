class ProgressBar {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  increment() {
    if (this.value < this.max) {
      this.value++;
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }

  render() {
    this.element = document.createElement("div");
    this.element.innerHTML = `<div id="label" class="label">
          <span id="counter">${this.value}</span>/<span id="maximum">${
      this.max
    }</span>
        </div>
        <div class="progress">
          <div id="minus" class="btn-minus"></div>
          <div class="bar">
            <div id="knob" class="knob"></div>
          </div>
          <div id="plus" class="btn-plus"></div>
        </div>`;

    const btnMinus = this.element.querySelector("#minus");
    btnMinus.addEventListener("click", () => {
      this.decrement();
      this.update();
    });

    const btnPlus = this.element.querySelector("#plus");
    btnPlus.addEventListener("click", () => {
      this.increment();
      this.update();
    });

    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  update() {
    const knob = this.element.querySelector("#knob");
    knob.style.width = (this.value * 100) / this.max + "%";
    const counter = this.element.querySelector("#counter");
    counter.textContent = this.value;
  }
}
