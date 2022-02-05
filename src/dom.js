import { allTasks, listOfProjects } from "./project";

export const nav = document.querySelector("#nav");
export const content = document.querySelector("#content");

export const list = document.querySelector("#projects");
export const tasksList = document.createElement("ul");
export const taskPage = document.createElement("section");
export const projectButton = document.querySelector("#addProject");

export function addDomToProject(project) {
  project.listItem = document.createElement("li");
  project.listItemName = document.createElement("h3");
  project.listItemName.textContent = project.name;
  project.listItem.append(project.listItemName);
  project.projectContent = document.createElement("div");
  project.projectContent.classList.add("test");
  project.title = document.createElement("h2");
  project.title.textContent = project.name;
  project.deleteButton = document.createElement("button");
  project.deleteButton.textContent = "x";
  project.deleteButton.setAttribute("class", "deleteButton");
  project.listItem.append(project.deleteButton);
  project.addNewTaskButton = document.createElement("button");
  project.addNewTaskButton.textContent = "add Task";
  project.taskList = document.createElement("ul");
}
export function addDomToTask(task, project) {
  task.taskItem = document.createElement("li");
  task.taskItem.setAttribute("class", "taskItem");
  task.taskName = document.createElement("h1");
  task.taskName.textContent = task.name;
  task.taskdescription = document.createElement("p");
  task.taskdescription.textContent = task.description;
  task.deleteButton = document.createElement("button");
  task.deleteButton.textContent = "x";
  task.deleteButton.setAttribute("class", "deleteButton");
  task.taskItem.append(task.taskName);
  task.taskItem.append(task.taskdescription);
  task.taskItem.append(task.deleteButton);
  project.taskList.append(task.taskItem);
}

export function addListItem(project) {
  content.append(project.projectContent);
  project.projectContent.append(project.title);
  project.projectContent.append(project.taskList);
  project.projectContent.append(project.addNewTaskButton);
}

export function hideProjectContent(project) {
  project.projectContent.classList.add("hidden");
}
export function showProjectContent(project) {
  project.projectContent.classList.remove("hidden");
}
export function displayProject(project) {
  listOfProjects.forEach((item) => {
    hideProjectContent(item);
  });
  showProjectContent(project);
}
