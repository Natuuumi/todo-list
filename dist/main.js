/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "tasksList": () => (/* binding */ tasksList),
/* harmony export */   "taskPage": () => (/* binding */ taskPage),
/* harmony export */   "projectButton": () => (/* binding */ projectButton),
/* harmony export */   "addDomToProject": () => (/* binding */ addDomToProject),
/* harmony export */   "addDomToTask": () => (/* binding */ addDomToTask),
/* harmony export */   "addListItem": () => (/* binding */ addListItem),
/* harmony export */   "hideProjectContent": () => (/* binding */ hideProjectContent),
/* harmony export */   "showProjectContent": () => (/* binding */ showProjectContent),
/* harmony export */   "displayProject": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const nav = document.querySelector("#nav");
const content = document.querySelector("#content");

const list = document.querySelector("#projects");
const tasksList = document.createElement("ul");
const taskPage = document.createElement("section");
const projectButton = document.querySelector("#addProject");

function addDomToProject(project) {
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
function addDomToTask(task, project) {
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

function addListItem(project) {
  content.append(project.projectContent);
  project.projectContent.append(project.title);
  project.projectContent.append(project.taskList);
  project.projectContent.append(project.addNewTaskButton);
}

function hideProjectContent(project) {
  project.projectContent.classList.add("hidden");
}
function showProjectContent(project) {
  project.projectContent.classList.remove("hidden");
}
function displayProject(project) {
  _project__WEBPACK_IMPORTED_MODULE_0__.listOfProjects.forEach((item) => {
    hideProjectContent(item);
  });
  showProjectContent(project);
}


/***/ }),

/***/ "./src/eventListener.js":
/*!******************************!*\
  !*** ./src/eventListener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectButtonEventListener": () => (/* binding */ addProjectButtonEventListener),
/* harmony export */   "projectEventListener": () => (/* binding */ projectEventListener),
/* harmony export */   "addTaskEventListener": () => (/* binding */ addTaskEventListener),
/* harmony export */   "projectDeleteButtonEventListener": () => (/* binding */ projectDeleteButtonEventListener)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




function addProjectButtonEventListener() {
  _dom__WEBPACK_IMPORTED_MODULE_0__.projectButton.addEventListener("click", function (e) {
    let name = prompt("project name");
    let newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.createProject(name);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addDomToProject)(newProject);
    projectDeleteButtonEventListener(newProject);

    projectEventListener(newProject);
    addTaskEventListener(newProject);
    _dom__WEBPACK_IMPORTED_MODULE_0__.list.append(newProject.listItem);
  });
}

function projectEventListener(project) {
  project.listItemName.addEventListener("click", function (e) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addListItem)(project);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayProject)(project);
    console.log(`clicked ${project.name}`);
  });
}

function addTaskEventListener(project) {
  project.addNewTaskButton.addEventListener("click", function (e) {
    let taskName = prompt("task name");
    let taskDescription = prompt("description");
    let newTask = new _task__WEBPACK_IMPORTED_MODULE_2__.createTask(taskName, taskDescription);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addDomToTask)(newTask, project);
    taskDeleteButtonEventListener(newTask);

    project.tasks.push(newTask);

    console.log(project.tasks);
  });
}

function projectDeleteButtonEventListener(project) {
  project.deleteButton.addEventListener("click", function (e) {
    project.listItem.remove();
    project.projectContent.remove();
    console.log(project.projectContent);
  });
}

function taskDeleteButtonEventListener(task) {
  task.deleteButton.addEventListener("click", function (e) {
    task.taskItem.remove();
    console.log("clicked delete");
  });
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listOfProjects": () => (/* binding */ listOfProjects),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "allTasks": () => (/* binding */ allTasks)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListener */ "./src/eventListener.js");



let listOfProjects = [];

class createProject {
  constructor(name) {
    listOfProjects.push(this);
    console.log(listOfProjects);
    this.tasks = [];
    this.name = name;
  }
}

const allTasks = new createProject("all tasks");


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


class createTask {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  display() {}
}

function addTask(project) {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListener */ "./src/eventListener.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




(0,_eventListener__WEBPACK_IMPORTED_MODULE_0__.addProjectButtonEventListener)();
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addDomToProject)(_project__WEBPACK_IMPORTED_MODULE_2__.allTasks);
(0,_eventListener__WEBPACK_IMPORTED_MODULE_0__.projectEventListener)(_project__WEBPACK_IMPORTED_MODULE_2__.allTasks);
(0,_eventListener__WEBPACK_IMPORTED_MODULE_0__.addTaskEventListener)(_project__WEBPACK_IMPORTED_MODULE_2__.allTasks);
(0,_eventListener__WEBPACK_IMPORTED_MODULE_0__.projectDeleteButtonEventListener)(_project__WEBPACK_IMPORTED_MODULE_2__.allTasks);
_dom__WEBPACK_IMPORTED_MODULE_1__.list.append(_project__WEBPACK_IMPORTED_MODULE_2__.allTasks.listItem);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLEVBQUUsNERBQXNCO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEZTtBQUNxRDtBQUNoQzs7QUFFN0I7QUFDUCxFQUFFLGdFQUE4QjtBQUNoQztBQUNBLHlCQUF5QixtREFBYTtBQUN0QyxJQUFJLHFEQUFlO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZDQUFXO0FBQ2YsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQSxJQUFJLGlEQUFXO0FBQ2YsSUFBSSxvREFBYztBQUNsQiwyQkFBMkIsYUFBYTtBQUN4QyxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQVU7QUFDaEMsSUFBSSxrREFBWTtBQUNoQjs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R5RDtBQUNGOztBQUVoRDs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RnQjs7QUFFaEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOzs7Ozs7O1VDWlA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDRHlCO0FBQ3FCO0FBQ1Q7O0FBRXJDLDZFQUE2QjtBQUM3QixxREFBZSxDQUFDLDhDQUFRO0FBQ3hCLG9FQUFvQixDQUFDLDhDQUFRO0FBQzdCLG9FQUFvQixDQUFDLDhDQUFRO0FBQzdCLGdGQUFnQyxDQUFDLDhDQUFRO0FBQ3pDLDZDQUFXLENBQUMsdURBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsVGFza3MsIGxpc3RPZlByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XG5leHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZXhwb3J0IGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbmV4cG9ydCBjb25zdCB0YXNrUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREb21Ub1Byb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0Lmxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0Lmxpc3RJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcHJvamVjdC5saXN0SXRlbU5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3QubGlzdEl0ZW0uYXBwZW5kKHByb2plY3QubGlzdEl0ZW1OYW1lKTtcbiAgcHJvamVjdC5wcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRlc3RcIik7XG4gIHByb2plY3QudGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3QudGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3QuZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJvamVjdC5kZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgcHJvamVjdC5kZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGVCdXR0b25cIik7XG4gIHByb2plY3QubGlzdEl0ZW0uYXBwZW5kKHByb2plY3QuZGVsZXRlQnV0dG9uKTtcbiAgcHJvamVjdC5hZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJvamVjdC5hZGROZXdUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJhZGQgVGFza1wiO1xuICBwcm9qZWN0LnRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZERvbVRvVGFzayh0YXNrLCBwcm9qZWN0KSB7XG4gIHRhc2sudGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2sudGFza0l0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrSXRlbVwiKTtcbiAgdGFzay50YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGFzay50YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgdGFzay50YXNrZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFzay50YXNrZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrLmRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhc2suZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIHRhc2suZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlQnV0dG9uXCIpO1xuICB0YXNrLnRhc2tJdGVtLmFwcGVuZCh0YXNrLnRhc2tOYW1lKTtcbiAgdGFzay50YXNrSXRlbS5hcHBlbmQodGFzay50YXNrZGVzY3JpcHRpb24pO1xuICB0YXNrLnRhc2tJdGVtLmFwcGVuZCh0YXNrLmRlbGV0ZUJ1dHRvbik7XG4gIHByb2plY3QudGFza0xpc3QuYXBwZW5kKHRhc2sudGFza0l0ZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdEl0ZW0ocHJvamVjdCkge1xuICBjb250ZW50LmFwcGVuZChwcm9qZWN0LnByb2plY3RDb250ZW50KTtcbiAgcHJvamVjdC5wcm9qZWN0Q29udGVudC5hcHBlbmQocHJvamVjdC50aXRsZSk7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuYXBwZW5kKHByb2plY3QudGFza0xpc3QpO1xuICBwcm9qZWN0LnByb2plY3RDb250ZW50LmFwcGVuZChwcm9qZWN0LmFkZE5ld1Rhc2tCdXR0b24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVByb2plY3RDb250ZW50KHByb2plY3QpIHtcbiAgcHJvamVjdC5wcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9qZWN0Q29udGVudChwcm9qZWN0KSB7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gIGxpc3RPZlByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBoaWRlUHJvamVjdENvbnRlbnQoaXRlbSk7XG4gIH0pO1xuICBzaG93UHJvamVjdENvbnRlbnQocHJvamVjdCk7XG59XG4iLCJpbXBvcnQge1xuICBwcm9qZWN0QnV0dG9uLFxuICBsaXN0LFxuICBsaXN0SXRlbSxcbiAgY29udGVudCxcbiAgYWRkRG9tVG9Qcm9qZWN0LFxuICBhZGRMaXN0SXRlbSxcbiAgZGlzcGxheVByb2plY3QsXG4gIGFkZERvbVRvVGFzayxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBhbGxUYXNrcywgbGlzdE9mUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdEJ1dHRvbkV2ZW50TGlzdGVuZXIoKSB7XG4gIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IG5hbWUgPSBwcm9tcHQoXCJwcm9qZWN0IG5hbWVcIik7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICBhZGREb21Ub1Byb2plY3QobmV3UHJvamVjdCk7XG4gICAgcHJvamVjdERlbGV0ZUJ1dHRvbkV2ZW50TGlzdGVuZXIobmV3UHJvamVjdCk7XG5cbiAgICBwcm9qZWN0RXZlbnRMaXN0ZW5lcihuZXdQcm9qZWN0KTtcbiAgICBhZGRUYXNrRXZlbnRMaXN0ZW5lcihuZXdQcm9qZWN0KTtcbiAgICBsaXN0LmFwcGVuZChuZXdQcm9qZWN0Lmxpc3RJdGVtKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RXZlbnRMaXN0ZW5lcihwcm9qZWN0KSB7XG4gIHByb2plY3QubGlzdEl0ZW1OYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGFkZExpc3RJdGVtKHByb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKGBjbGlja2VkICR7cHJvamVjdC5uYW1lfWApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tFdmVudExpc3RlbmVyKHByb2plY3QpIHtcbiAgcHJvamVjdC5hZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB0YXNrTmFtZSA9IHByb21wdChcInRhc2sgbmFtZVwiKTtcbiAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gcHJvbXB0KFwiZGVzY3JpcHRpb25cIik7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgY3JlYXRlVGFzayh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgICBhZGREb21Ub1Rhc2sobmV3VGFzaywgcHJvamVjdCk7XG4gICAgdGFza0RlbGV0ZUJ1dHRvbkV2ZW50TGlzdGVuZXIobmV3VGFzayk7XG5cbiAgICBwcm9qZWN0LnRhc2tzLnB1c2gobmV3VGFzayk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tzKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RGVsZXRlQnV0dG9uRXZlbnRMaXN0ZW5lcihwcm9qZWN0KSB7XG4gIHByb2plY3QuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIHByb2plY3QubGlzdEl0ZW0ucmVtb3ZlKCk7XG4gICAgcHJvamVjdC5wcm9qZWN0Q29udGVudC5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnByb2plY3RDb250ZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWxldGVCdXR0b25FdmVudExpc3RlbmVyKHRhc2spIHtcbiAgdGFzay5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdGFzay50YXNrSXRlbS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgZGVsZXRlXCIpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGxpc3QsIGNyZWF0ZUxpc3RJdGVtLCBwcm9qZWN0RG9tIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9qZWN0RXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJcIjtcblxuZXhwb3J0IGxldCBsaXN0T2ZQcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgY2xhc3MgY3JlYXRlUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBsaXN0T2ZQcm9qZWN0cy5wdXNoKHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKGxpc3RPZlByb2plY3RzKTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWxsVGFza3MgPSBuZXcgY3JlYXRlUHJvamVjdChcImFsbCB0YXNrc1wiKTtcbiIsImltcG9ydCB7fSBmcm9tIFwiLi9kb21cIjtcblxuZXhwb3J0IGNsYXNzIGNyZWF0ZVRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuICBkaXNwbGF5KCkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdCkge31cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgYWRkUHJvamVjdEJ1dHRvbkV2ZW50TGlzdGVuZXIsXG4gIHByb2plY3RFdmVudExpc3RlbmVyLFxuICBhZGRUYXNrRXZlbnRMaXN0ZW5lcixcbiAgcHJvamVjdERlbGV0ZUJ1dHRvbkV2ZW50TGlzdGVuZXIsXG59IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCB7IGxpc3QsIGFkZERvbVRvUHJvamVjdCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgYWxsVGFza3MgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmFkZFByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKCk7XG5hZGREb21Ub1Byb2plY3QoYWxsVGFza3MpO1xucHJvamVjdEV2ZW50TGlzdGVuZXIoYWxsVGFza3MpO1xuYWRkVGFza0V2ZW50TGlzdGVuZXIoYWxsVGFza3MpO1xucHJvamVjdERlbGV0ZUJ1dHRvbkV2ZW50TGlzdGVuZXIoYWxsVGFza3MpO1xubGlzdC5hcHBlbmQoYWxsVGFza3MubGlzdEl0ZW0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9