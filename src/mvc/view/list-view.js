import { binarySearch } from "./utils.js";

export class ListView {
  constructor(controller) {
    this.controller = controller;
    this.containerList = document.querySelector(".container-list");

    //movement with arrow keys
    window.addEventListener("keydown", (ev) => {
      if (ev.key === "ArrowDown") {
        controller.navigate(1);
      } else if (ev.key === "ArrowUp") {
        controller.navigate(-1);
      }
    });
    //render list
    this.render();
    setTimeout(() => this.render(), 100);

    //event delegation for selecting item
    this.containerList.addEventListener("click", (ev) => {
      const elements = [
        ev.target,
        ev.target?.parentNode,
        ev.target?.parentNode?.parentNode,
      ];
      const item = elements.find(
        (e) => e && e.classList.contains("container-list-item")
      );
      if (item) {
        const index = parseInt(item.getAttribute("data-index"));
        if (index !== undefined) this.controller.setCurrentItem(index);
      }
    });
  }
  render() {
    console.log("[Render] list view");
    const data = this.controller.getData();
    const currentIndex = this.controller.getCurrentIndex();
    this.containerList.innerHTML = "";
    //populating list container
    data.forEach((d, i) => {
      const div = document.createElement("div"); //list container element
      div.setAttribute("data-index", i);
      div.setAttribute("draggable", true);
      div.classList.add("container-list-item");
      if (i === currentIndex) div.classList.add("selected"); //class for selected
      const img = document.createElement("img"); //thumbnail
      img.src = d.imageURL;
      const p1 = document.createElement("p"); //title
      p1.innerText = d.title;

      const d2 = document.createElement("div"); //description
      // d2.innerText = d.description;

      const idiv = document.createElement("div"); //inner div to hold title and desciption
      idiv.classList.add("list-item-content");
      idiv.append(p1, d2); //add title and desciption to idiv
      div.append(img, idiv); //add thumbnail and idiv to container

      // div.addEventListener("click", () => {
      //   //add click event listener
      //   this.controller.setCurrentItem(i);
      // });
      this.containerList.append(div);
      binarySearch(d2, 60, "100%", d.description); //set text length according to maxheight
      // requestAnimationFrame(() => {
      // });

      //adding drag listeners

      let count = 0;
      div.addEventListener("dragstart", (ev) => {
        this.draggedBox = div;
        setTimeout(() => (div.style.display = "none"), 300);
      });
      div.addEventListener("dragend", (ev) => {
        this.draggedBox = null;
        setTimeout(() => (div.style.display = "flex"), 0);
      });
      div.addEventListener("dragenter", (ev) => {
        ev.preventDefault();
        count++;
        div.classList.add("hovered");
      });
      div.addEventListener("dragleave", (ev) => {
        count--;
        if (count == 0) {
          div.classList.remove("hovered");
        }
      });
      div.addEventListener("dragover", (ev) => ev.preventDefault());
      div.addEventListener("drop", () => {
        div.classList.remove("hovered");
        div.parentNode.insertBefore(this.draggedBox, div.nextSibling);
        const newOrder = [];

        this.containerList
          .querySelectorAll(".container-list-item")
          .forEach((el) =>
            newOrder.push(parseInt(el.getAttribute("data-index")))
          );
        this.controller.updateOrder(newOrder);
      });
    });
  }
}
