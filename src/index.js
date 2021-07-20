import { Controller } from "./mvc/controller.js";

new Controller();
//==========================V2======================================

/*
import { trimContent } from "./utils.js";

const maxDescriptionLength = 90;
const maxTitleLength = 15;

(function () {
  const model = {
    data: [
      {
        title: "Cat",
        description:
          "I am a monster cat (Weaown Waeown). Don't come near me. I will not bite you but will roast your insecurities.",
        imageURL: "images/cat.jpeg",
      },
      {
        title: "Dog",
        description:
          "I am a cool puppy (aow aow). You can play with me or take me to a walk",
        imageURL: "images/dog.jpeg",
      },
      {
        title: "Horse",
        description:
          "I am a horse (HeHeHe). I will blow your mind and ride you to oblivion",
        imageURL: "images/horse.webp",
      },
    ],
    getData() {
      return this.data;
    },
    currentItemIndex: null,
  };

  const controller = {
    init() {
      model.currentItemIndex = 0;
      listView.init();
      canvasView.init();
    },
    getData() {
      return model.getData();
    },
    getCurrentItem() {
      return model.data[model.currentItemIndex];
    },
    setCurrentItem(i) {
      model.currentItemIndex = i;
      listView.render();
      canvasView.render();
    },
    getCurrentIndex() {
      return model.currentItemIndex;
    },
    updateCurrentItem({ title, description }) {
      model.data[model.currentItemIndex].title = title;
      model.data[model.currentItemIndex].description = description;
      listView.render();
    },
    navigate(val = 1) {
      model.currentItemIndex =
        (model.currentItemIndex + val + model.data.length) % model.data.length;
      listView.render();
      canvasView.render();
    },
  };

  const listView = {
    init() {
      this.containerList = document.querySelector(".container-list");

      window.addEventListener("keydown", (ev) => {
        if (ev.key === "ArrowDown") {
          controller.navigate(1);
        } else if (ev.key === "ArrowUp") {
          controller.navigate(-1);
        }
      });

      this.render();
    },
    render() {
      const data = controller.getData();
      const currentIndex = controller.getCurrentIndex();
      this.containerList.innerHTML = "";
      data.forEach((d, i) => {
        const div = document.createElement("div");
        div.classList.add("container-list-item");
        if (i === currentIndex) div.classList.add("selected");
        div.innerHTML = `
        <img src="${d.imageURL}"/>
        <div class="list-item-description">
        <p>${trimContent(d.title, maxTitleLength)}</p>
        <p>${trimContent(d.description, maxDescriptionLength)}</p>
        </div>
        `;
        div.addEventListener("click", () => {
          controller.setCurrentItem(i);
        });
        this.containerList.append(div);
      });
    },
  };

  const canvasView = {
    init() {
      this.containerImagePreview = document.querySelector(
        ".container-image-preview"
      );
      this.mainImage = this.containerImagePreview.querySelector("img");
      this.inputForm = document.querySelector(".edit-form");
      this.inputTitle = this.inputForm.querySelector("input");
      this.inputDescription = this.inputForm.querySelector("textarea");
      this.saveForm = this.inputForm.querySelector("button");

      this.inputForm.addEventListener("submit", (ev) => ev.preventDefault());
      this.saveForm.addEventListener("click", (ev) => {
        const title = this.inputTitle.value;
        const description = this.inputDescription.value;
        controller.updateCurrentItem({ title, description });
      });
      this.render();
    },
    render() {
      const currentItem = controller.getCurrentItem();
      this.mainImage.setAttribute("src", currentItem.imageURL);
      this.inputTitle.setAttribute("value", currentItem.title);
      this.inputDescription.innerText = currentItem.description;
    },
  };

  controller.init();
})();

*/

//==========================V1======================================

/*

import { dataList } from "./server.js";
import { trimContent } from "./utils.js";

const containerList = document.querySelector(".container-list");
const containerImagePreview = document.querySelector(
  ".container-image-preview"
);
let currentSelectedItem = 0;
let previousSelectedItem = 0;
const maxDescriptionLength = 90;
const maxTitleLength = 15;

const addListItem = ({ title, description, imageURL }) => {
  const template = `
<div class="container-list-item">
  <img src="${imageURL}"/>
  <div class="list-item-description">
    <p>${trimContent(title, maxTitleLength)}</p>
    <p>${trimContent(description, maxDescriptionLength)}</p>
</div>
`;
  const div = document.createElement("div");
  div.innerHTML = template;
  containerList.append(div);
};

dataList.forEach(addListItem);

const setImagePreview = () => {
  const { title, description, imageURL } = dataList[currentSelectedItem];
  containerImagePreview.querySelector("img").src = imageURL;
  containerImagePreview.querySelector("input").value = title;
  containerImagePreview.querySelector("textarea").value = description;

  document
    .querySelectorAll(".container-list-item")
    [previousSelectedItem].classList.remove("selected");

  document
    .querySelectorAll(".container-list-item")
    [currentSelectedItem].classList.add("selected");
  previousSelectedItem = currentSelectedItem;
};

setImagePreview(previousSelectedItem, currentSelectedItem);

document.querySelectorAll(".container-list-item").forEach((e, i) => {
  e.addEventListener("click", () => {
    currentSelectedItem = i;
    setImagePreview();
  });
});

const selectNextImage = () => {
  if (previousSelectedItem < dataList.length - 1) {
    currentSelectedItem = previousSelectedItem + 1;
    setImagePreview();
  }
};
const selectPreviousImage = () => {
  if (previousSelectedItem > 0) {
    currentSelectedItem = previousSelectedItem - 1;
    setImagePreview();
  }
};

window.addEventListener("keydown", (ev) => {
  if (ev.key === "ArrowUp") {
    selectPreviousImage();
  } else if (ev.key === "ArrowDown") {
    selectNextImage();
  }
});

containerImagePreview
  .querySelector("button")
  .addEventListener("click", (ev) => {
    ev.preventDefault();

    const newTitle = containerImagePreview.querySelector("input").value;
    const newDesc = containerImagePreview.querySelector("textarea").value;

    dataList[currentSelectedItem].title = newTitle;
    dataList[currentSelectedItem].description = newDesc;

    const listItem = containerList.querySelectorAll(".container-list-item")[
      currentSelectedItem
    ];
    listItem.querySelector("p:first-of-type").innerHTML = trimContent(
      newTitle,
      maxTitleLength
    );
    listItem.querySelector("p:last-of-type").innerHTML = trimContent(
      newDesc,
      maxDescriptionLength
    );
  });

  */
