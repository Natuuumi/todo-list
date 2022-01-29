import {
  addProjectButtonEventListener,
  projectEventListener,
} from "./eventListener";
import { list } from "./dom";
import { allTasks } from "./project";

addProjectButtonEventListener();
projectEventListener(allTasks);
list.append(allTasks.listItem);
