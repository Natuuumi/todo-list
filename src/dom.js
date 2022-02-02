import { allTasks, listOfProjects } from "./project";

export const nav = document.querySelector("#nav");
export const content = document.querySelector("#content");

export const list = document.querySelector("#projects");
export const tasksList = document.createElement("ul");
export const taskPage = document.createElement("section");
export const projectButton = document.querySelector("#addProject");

export function addDomToProject(project) {
  project.listItem = document.createElement("li");
  project.listItem.textContent = project.name;
  project.projectContent = document.createElement("section");
  project.projectContent.setAttribute("class", "projectSection");
  project.title = document.createElement("h2");
  project.title.textContent = project.name;
  project.deleteButton = document.createElement("button");
  project.deleteButton.setAttribute("class", "deleteButton");
  project.addNewTaskButton = document.createElement("button");
  project.addNewTaskButton.textContent = "add Task";
  project.taskList = document.createElement("ul");
}

export function addListItem(project) {
  content.append(project.projectContent);
  project.projectContent.append(project.title);
  project.projectContent.append(project.taskList);
  project.taskList.append(project.addNewTaskButton);
}

export function hideProjectContent(project) {
  project.projectContent.setAttribute("class", "hidden");
}
export function showProjectContent(project) {
  project.projectContent.removeAttribute("class", "hidden");
}
export function displayProject(project) {
  listOfProjects.forEach((item) => {
    hideProjectContent(item);
  });
  showProjectContent(project);
}
