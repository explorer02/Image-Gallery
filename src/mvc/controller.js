import { Model } from "./model.js";
import { CanvasView } from "./view/canvas-view.js";
import { ListView } from "./view/list-view.js";

export class Controller {
  constructor() {
    this.model = new Model(this);
    this.model.currentItemIndex = 0;
    this.orderedData = this.model.getData();

    this.listView = new ListView(this);
    this.canvasView = new CanvasView(this);
  }
  getData() {
    return this.orderedData;
  }
  getCurrentItem() {
    return this.orderedData[this.model.currentItemIndex];
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
    this.orderedData[this.model.currentItemIndex].title = title;
    this.orderedData[this.model.currentItemIndex].description = description;
    this.listView.render();
    this.canvasView.render();
  }
  navigate(val = 1) {
    this.model.currentItemIndex =
      (this.model.currentItemIndex + val + this.orderedData.length) %
      this.orderedData.length;
    this.listView.render();
    this.canvasView.render();
  }
  updateOrder(newOrder) {
    this.orderedData = newOrder.map((e) => this.orderedData[e]);
    this.model.currentItemIndex = 0;
    this.listView.render();
    this.canvasView.render();
  }
}
