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
}

export const allTasks = new createProject("all tasks");
