const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector("#app");
  
  const stage = new Stage(20, 25);
  stage.mount(app);
  
  const robert = new Pacman(0, 0);
  robert.mount(stage.element);

  const wall1 = new Wall(2, 2);
  wall1.mount(stage.element);

  const wall2 = new Wall(8,3);
  wall2.mount(stage.element);

  const tomb1 = new Tomb(5,0);
  tomb1.mount(stage.element);

  const tomb2 = new Tomb(5,4);
  tomb2.mount(stage.element);

  const apple1 = new Apple(6,2);
  apple1.mount(stage.element);

  document.addEventListener("keydown", event => {
    robert.move(event.code);
  });
});








