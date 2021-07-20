import { trimContent } from "../../utils.js";
import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from "./constants.js";

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
      div.innerHTML = `
        <img src="${d.imageURL}"/>
        <div class="list-item-description">
        <p>${trimContent(d.title, MAX_TITLE_LENGTH)}</p>
        <p>${trimContent(d.description, MAX_DESCRIPTION_LENGTH)}</p>
        </div>
        `;
      div.addEventListener("click", () => {
        this.controller.setCurrentItem(i);
      });
      this.containerList.append(div);
    });
  }
}
