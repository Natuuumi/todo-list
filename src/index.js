import {
  addProjectButtonEventListener,
  projectEventListener,
  addTaskEventListener,
} from "./eventListener";
import { list, addDomToProject } from "./dom";
import { allTasks } from "./project";

addProjectButtonEventListener();
addDomToProject(allTasks);
projectEventListener(allTasks);
addTaskEventListener(allTasks);
list.append(allTasks.listItem);
