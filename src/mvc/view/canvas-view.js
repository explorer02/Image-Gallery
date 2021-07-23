export class CanvasView {
  constructor(controller) {
    this.controller = controller;

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
  }
  render() {
    const currentItem = this.controller.getCurrentItem();
    this.mainImage.setAttribute("src", currentItem.imageURL);
    this.inputTitle.value = currentItem.title;
    this.inputDescription.value = currentItem.description;
  }
}
