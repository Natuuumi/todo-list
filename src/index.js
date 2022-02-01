import {
  addProjectButtonEventListener,
  projectEventListener,
} from "./eventListener";
import { list, addDomToProject } from "./dom";
import { allTasks } from "./project";

addProjectButtonEventListener();
addDomToProject(allTasks);
projectEventListener(allTasks);
list.append(allTasks.listItem);
