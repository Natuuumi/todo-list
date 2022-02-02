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
  project.listItem.textContent = project.name;
  project.projectContent = document.createElement("section");
  project.projectContent.setAttribute("class", "projectSection");
  project.title = document.createElement("h2");
  project.title.textContent = project.name;
  project.deleteButton = document.createElement("button");
  project.deleteButton.setAttribute("class", "deleteButton");
  project.addNewTaskButton = document.createElement("button");
  project.addNewTaskButton.textContent = "add Task";
  project.taskList = document.createElement("ul");
}

function addListItem(project) {
  content.append(project.projectContent);
  project.projectContent.append(project.title);
  project.projectContent.append(project.taskList);
  project.taskList.append(project.addNewTaskButton);
}

function hideProjectContent(project) {
  project.projectContent.setAttribute("class", "hidden");
}
function showProjectContent(project) {
  project.projectContent.removeAttribute("class", "hidden");
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
/* harmony export */   "addTaskEventListener": () => (/* binding */ addTaskEventListener)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




function addProjectButtonEventListener() {
  _dom__WEBPACK_IMPORTED_MODULE_0__.projectButton.addEventListener("click", function (e) {
    let name = prompt("project name");
    let newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.createProject(name);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addDomToProject)(newProject);
    projectEventListener(newProject);
    addTaskEventListener(newProject);
    _dom__WEBPACK_IMPORTED_MODULE_0__.list.append(newProject.listItem);
  });
}

function projectEventListener(project) {
  project.listItem.addEventListener("click", function (e) {
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
    project.tasks.push(newTask);

    console.log(project.tasks);
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
_dom__WEBPACK_IMPORTED_MODULE_1__.list.append(_project__WEBPACK_IMPORTED_MODULE_2__.allTasks.listItem);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLEVBQUUsNERBQXNCO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ3FEO0FBQ2hDOztBQUU3QjtBQUNQLEVBQUUsZ0VBQThCO0FBQ2hDO0FBQ0EseUJBQXlCLG1EQUFhO0FBQ3RDLElBQUkscURBQWU7QUFDbkI7QUFDQTtBQUNBLElBQUksNkNBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBLElBQUksaURBQVc7QUFDZixJQUFJLG9EQUFjO0FBQ2xCLDJCQUEyQixhQUFhO0FBQ3hDLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBVTtBQUNoQzs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDeUQ7QUFDRjs7QUFFaEQ7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkZ0I7O0FBRWhCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7OztVQ1pQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0Z5QjtBQUNxQjtBQUNUOztBQUVyQyw2RUFBNkI7QUFDN0IscURBQWUsQ0FBQyw4Q0FBUTtBQUN4QixvRUFBb0IsQ0FBQyw4Q0FBUTtBQUM3QixvRUFBb0IsQ0FBQyw4Q0FBUTtBQUM3Qiw2Q0FBVyxDQUFDLHVEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFRhc2tzLCBsaXN0T2ZQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpO1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmV4cG9ydCBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbmV4cG9ydCBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5leHBvcnQgY29uc3QgdGFza1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRG9tVG9Qcm9qZWN0KHByb2plY3QpIHtcbiAgcHJvamVjdC5saXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdC5saXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdC5wcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBwcm9qZWN0LnByb2plY3RDb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdFNlY3Rpb25cIik7XG4gIHByb2plY3QudGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3QudGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHByb2plY3QuZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJvamVjdC5kZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGVCdXR0b25cIik7XG4gIHByb2plY3QuYWRkTmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3QuYWRkTmV3VGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiYWRkIFRhc2tcIjtcbiAgcHJvamVjdC50YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RJdGVtKHByb2plY3QpIHtcbiAgY29udGVudC5hcHBlbmQocHJvamVjdC5wcm9qZWN0Q29udGVudCk7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuYXBwZW5kKHByb2plY3QudGl0bGUpO1xuICBwcm9qZWN0LnByb2plY3RDb250ZW50LmFwcGVuZChwcm9qZWN0LnRhc2tMaXN0KTtcbiAgcHJvamVjdC50YXNrTGlzdC5hcHBlbmQocHJvamVjdC5hZGROZXdUYXNrQnV0dG9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQcm9qZWN0Q29udGVudChwcm9qZWN0KSB7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2plY3RDb250ZW50KHByb2plY3QpIHtcbiAgcHJvamVjdC5wcm9qZWN0Q29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KSB7XG4gIGxpc3RPZlByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBoaWRlUHJvamVjdENvbnRlbnQoaXRlbSk7XG4gIH0pO1xuICBzaG93UHJvamVjdENvbnRlbnQocHJvamVjdCk7XG59XG4iLCJpbXBvcnQge1xuICBwcm9qZWN0QnV0dG9uLFxuICBsaXN0LFxuICBsaXN0SXRlbSxcbiAgY29udGVudCxcbiAgYWRkRG9tVG9Qcm9qZWN0LFxuICBhZGRMaXN0SXRlbSxcbiAgZGlzcGxheVByb2plY3QsXG59IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgYWxsVGFza3MsIGxpc3RPZlByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RCdXR0b25FdmVudExpc3RlbmVyKCkge1xuICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCBuYW1lID0gcHJvbXB0KFwicHJvamVjdCBuYW1lXCIpO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgYWRkRG9tVG9Qcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIHByb2plY3RFdmVudExpc3RlbmVyKG5ld1Byb2plY3QpO1xuICAgIGFkZFRhc2tFdmVudExpc3RlbmVyKG5ld1Byb2plY3QpO1xuICAgIGxpc3QuYXBwZW5kKG5ld1Byb2plY3QubGlzdEl0ZW0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFdmVudExpc3RlbmVyKHByb2plY3QpIHtcbiAgcHJvamVjdC5saXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBhZGRMaXN0SXRlbShwcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhgY2xpY2tlZCAke3Byb2plY3QubmFtZX1gKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrRXZlbnRMaXN0ZW5lcihwcm9qZWN0KSB7XG4gIHByb2plY3QuYWRkTmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgdGFza05hbWUgPSBwcm9tcHQoXCJ0YXNrIG5hbWVcIik7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGxldCBuZXdUYXNrID0gbmV3IGNyZWF0ZVRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrcyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgbGlzdCwgY3JlYXRlTGlzdEl0ZW0sIHByb2plY3REb20gfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IHByb2plY3RFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lclwiO1xuXG5leHBvcnQgbGV0IGxpc3RPZlByb2plY3RzID0gW107XG5cbmV4cG9ydCBjbGFzcyBjcmVhdGVQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIGxpc3RPZlByb2plY3RzLnB1c2godGhpcyk7XG4gICAgY29uc29sZS5sb2cobGlzdE9mUHJvamVjdHMpO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhbGxUYXNrcyA9IG5ldyBjcmVhdGVQcm9qZWN0KFwiYWxsIHRhc2tzXCIpO1xuIiwiaW1wb3J0IHt9IGZyb20gXCIuL2RvbVwiO1xuXG5leHBvcnQgY2xhc3MgY3JlYXRlVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG4gIGRpc3BsYXkoKSB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayhwcm9qZWN0KSB7fVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBhZGRQcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcixcbiAgcHJvamVjdEV2ZW50TGlzdGVuZXIsXG4gIGFkZFRhc2tFdmVudExpc3RlbmVyLFxufSBmcm9tIFwiLi9ldmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyBsaXN0LCBhZGREb21Ub1Byb2plY3QgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5hZGRQcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcigpO1xuYWRkRG9tVG9Qcm9qZWN0KGFsbFRhc2tzKTtcbnByb2plY3RFdmVudExpc3RlbmVyKGFsbFRhc2tzKTtcbmFkZFRhc2tFdmVudExpc3RlbmVyKGFsbFRhc2tzKTtcbmxpc3QuYXBwZW5kKGFsbFRhc2tzLmxpc3RJdGVtKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==