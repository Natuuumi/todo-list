import { projectButton, list, listItem, content } from "./dom";
import createProject from "./project";
export function addProjectButtonEventListener() {
  projectButton.addEventListener("click", function (e) {
    let name = prompt("project name");
    let newProject = new createProject(name);
    newProject.listItem.textContent = newProject.name;

    list.append(newProject.listItem);
  });
}
