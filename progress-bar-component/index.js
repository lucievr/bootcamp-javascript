document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  const bar = new ProgressBar(2, 50);
  bar.mount(app);

  const bar2 = new ProgressBar(10, 20);
  bar2.mount(app);
});
