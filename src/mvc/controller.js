import { Model } from "./model.js";
import { CanvasView } from "./view/canvas-view.js";
import { ListView } from "./view/list-view.js";

export class Controller {
  constructor() {
    this.model = new Model(this);
    this.model.currentItemIndex = 0;

    this.listView = new ListView(this);
    this.canvasView = new CanvasView(this);
  }
  getData() {
    return this.model.getData();
  }
  getCurrentItem() {
    return this.model.data[this.model.currentItemIndex];
  }
  getCurrentItem() {
    return this.model.data[this.model.currentItemIndex];
  }
  setCurrentItem(i) {
    this.model.currentItemIndex = i;
    this.listView.render();
    this.canvasView.render();
  }
  getCurrentIndex() {
    return this.model.currentItemIndex;
  }
  updateCurrentItem({ title, description }) {
    this.model.data[this.model.currentItemIndex].title = title;
    this.model.data[this.model.currentItemIndex].description = description;
    this.listView.render();
    this.canvasView.render();
  }
  navigate(val = 1) {
    this.model.currentItemIndex =
      (this.model.currentItemIndex + val + this.model.data.length) %
      this.model.data.length;
    this.listView.render();
    this.canvasView.render();
  }
}
