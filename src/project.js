import { list, createListItem } from "./dom";
import { projectEventListener } from "./eventListener";

export let listOfProjects = [];

export class createProject {
  constructor(name) {
    listOfProjects.push(this);
    console.log(listOfProjects);
    this.tasks = [];
    this.name = name;
    this.listItem = document.createElement("li");
    this.listItem.textContent = name;
    this.projectContent = document.createElement("section");
    this.projectContent.setAttribute("class", "projectSection");
    this.title = document.createElement("h2");
    this.title.textContent = name;
    this.deleteButton = document.createElement("button");
    this.deleteButton.setAttribute("class", "deleteButton");
  }
  addTask(task) {
    this.tasks.push(task);
  }
  hide() {
    this.projectContent.setAttribute("class", "hidden");
  }
  show() {
    this.projectContent.removeAttribute("class", "hidden");
  }
}

export const allTasks = new createProject("all tasks");
