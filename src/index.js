import {
  addProjectButtonEventListener,
  projectEventListener,
  addTaskEventListener,
  projectDeleteButtonEventListener,
} from "./eventListener";
import { list, addDomToProject } from "./dom";
import { allTasks } from "./project";

addProjectButtonEventListener();
addDomToProject(allTasks);
projectEventListener(allTasks);
addTaskEventListener(allTasks);
projectDeleteButtonEventListener(allTasks);
list.append(allTasks.listItem);
