const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector("#app");
  
  const stage = new Stage(15, 6);
  stage.mount(app);
  
  const robert = new Pacman(stage, 0, 0);
  robert.mount(stage.element);


  const wall1 = new Wall(2, 2);
  wall1.mount(stage.element);

  const wall2 = new Wall(8,3);
  wall2.mount(stage.element);

  const wall3 = new Wall(10,0);
  wall3.mount(stage.element);

  const tomb1 = new Tomb(5,0);
  tomb1.mount(stage.element);

  const tomb2 = new Tomb(5,4);
  tomb2.mount(stage.element);

  const tomb3 = new Tomb(12,4);
  tomb3.mount(stage.element);

  const apple1 = new Apple(6,2);
  apple1.mount(stage.element);

  const apple2 = new Apple(9,3);
  apple2.mount(stage.element);

  const apple3 = new Apple(3,4);
  apple3.mount(stage.element);

  const apple4 = new Apple(13,2);
  apple4.mount(stage.element);

  const bomb1 = new Bomb(8,1);
  bomb1.mount(stage.element);

  const bomb2 = new Bomb(14,2);
  bomb2.mount(stage.element);

  const bomb3 = new Bomb(10,5);
  bomb3.mount(stage.element);

  document.addEventListener("keydown", event => {
    if(event.code.startsWith('Arrow')) {
      robert.move(event.code.substr(5).toLowerCase());
    }
  });
});








