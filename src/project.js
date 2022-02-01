import { list, createListItem, projectDom } from "./dom";
import { projectEventListener } from "./eventListener";

export let listOfProjects = [];

export class createProject {
  constructor(name) {
    listOfProjects.push(this);
    console.log(listOfProjects);
    this.tasks = [];
    this.name = name;
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
  display() {
    listOfProjects.forEach((item) => {
      item.hide();
    });
    this.show();
  }
}

export const allTasks = new createProject("all tasks");
