import {
  projectButton,
  list,
  listItem,
  content,
  addDomToProject,
  addListItem,
  displayProject,
  addDomToTask,
} from "./dom";
import { createProject, allTasks, listOfProjects } from "./project";
import { createTask } from "./task";

export function addProjectButtonEventListener() {
  projectButton.addEventListener("click", function (e) {
    let name = prompt("project name");
    let newProject = new createProject(name);
    addDomToProject(newProject);
    projectDeleteButtonEventListener(newProject);

    projectEventListener(newProject);
    addTaskEventListener(newProject);
    list.append(newProject.listItem);
  });
}

export function projectEventListener(project) {
  project.listItem.addEventListener("click", listItemEventListener);
}

function listItemEventListener() {
  addListItem(project);
  displayProject(project);
  console.log(`clicked ${project.name}`);
}

export function addTaskEventListener(project) {
  project.addNewTaskButton.addEventListener("click", function (e) {
    let taskName = prompt("task name");
    let taskDescription = prompt("description");
    let newTask = new createTask(taskName, taskDescription);
    addDomToTask(newTask, project);

    project.tasks.push(newTask);

    console.log(project.tasks);
  });
}

export function projectDeleteButtonEventListener(project) {
  project.deleteButton.addEventListener("click", function (e) {
    project.listItem.removeEventListener("click", listItemEventListener);
    project.listItem.remove();

    project.projectContent.remove();

    console.log(project.projectContent);
  }),
    true;
}
