import { projectButton, list, listItem, content, removeItem } from "./dom";
import { createProject, allTasks, listOfProjects } from "./project";

export function addProjectButtonEventListener() {
  projectButton.addEventListener("click", function (e) {
    let name = prompt("project name");
    let newProject = new createProject(name);
    projectEventListener(newProject);
    list.append(newProject.listItem);
  });
}

export function projectEventListener(project) {
  project.listItem.addEventListener("click", function (e) {
    listOfProjects.forEach((item) => {
      item.hide();
    });
    content.append(project.projectContent);
    project.projectContent.append(project.title);
    project.show();
    console.log(`clicked ${project.name}`);
  });
}

function addTaskButton() {}
