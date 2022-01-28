import { list, createListItem } from "./dom";
import { projectEventListener } from "./eventListener";

export default class createProject {
  constructor(name) {
    this.name = name;
    this.listItem = document.createElement("li");
    this.projectContent = document.createElement("section");
  }
}
