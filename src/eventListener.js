import {
  projectButton,
  list,
  listItem,
  content,
  removeItem,
  addDomToProject,
  addListItem,
  displayProject,
} from "./dom";
import { createProject, allTasks, listOfProjects } from "./project";

export function addProjectButtonEventListener() {
  projectButton.addEventListener("click", function (e) {
    let name = prompt("project name");
    let newProject = new createProject(name);
    addDomToProject(newProject);
    projectEventListener(newProject);
    list.append(newProject.listItem);
  });
}

export function projectEventListener(project) {
  project.listItem.addEventListener("click", function (e) {
    addListItem(project);
    displayProject(project);
    console.log(`clicked ${project.name}`);
  });
}

function addTaskToProject(project) {}
