/** Completed
 * selected bug fix
 * listen to keyboard: tab or arrow keys => arrow keys
 * caption edit on right side below image
 */
/** TODO
 * truncate caption afer 2 lines ...
 * drag and drop
 * mobile responsive
 * lazy loading
 */

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
