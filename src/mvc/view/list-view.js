export class ListView {
  constructor(controller) {
    this.controller = controller;
    this.containerList = document.querySelector(".container-list");
    window.addEventListener("keydown", (ev) => {
      if (ev.key === "ArrowDown") {
        controller.navigate(1);
      } else if (ev.key === "ArrowUp") {
        controller.navigate(-1);
      }
    });
    this.render();
  }
  render() {
    const data = this.controller.getData();
    const currentIndex = this.controller.getCurrentIndex();
    this.containerList.innerHTML = "";
    data.forEach((d, i) => {
      const div = document.createElement("div");
      div.classList.add("container-list-item");
      if (i === currentIndex) div.classList.add("selected");
      const img = document.createElement("img");
      img.src = d.imageURL;
      const p1 = document.createElement("p");
      p1.innerText = d.title;

      const p2 = document.createElement("p");
      p2.innerText = d.description;

      const idiv = document.createElement("div");
      idiv.classList.add("list-item-content");
      idiv.append(p1, p2);
      div.append(img, idiv);

      div.addEventListener("click", () => {
        this.controller.setCurrentItem(i);
      });
      this.containerList.append(div);
    });
  }
}
