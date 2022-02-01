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
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
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
const removeItem = document.getElementsByClassName("projectSection");

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
}

function addListItem(project) {
  content.append(project.projectContent);
  project.projectContent.append(project.title);
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
/* harmony export */   "projectEventListener": () => (/* binding */ projectEventListener)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



function addProjectButtonEventListener() {
  _dom__WEBPACK_IMPORTED_MODULE_0__.projectButton.addEventListener("click", function (e) {
    let name = prompt("project name");
    let newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.createProject(name);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addDomToProject)(newProject);
    projectEventListener(newProject);
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

function addTaskToProject(project) {}


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
  addTask(task) {
    this.tasks.push(task);
  }
  hide() {
    this.projectContent.setAttribute("class", "hidden");
  }
  show() {
    this.projectContent.removeAttribute("class", "hidden");
  }
  display() {
    listOfProjects.forEach((item) => {
      item.hide();
    });
    this.show();
  }
}

const allTasks = new createProject("all tasks");


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
_dom__WEBPACK_IMPORTED_MODULE_1__.list.append(_project__WEBPACK_IMPORTED_MODULE_2__.allTasks.listItem);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUCxFQUFFLDREQUFzQjtBQUN4QjtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmU7QUFDcUQ7O0FBRTdEO0FBQ1AsRUFBRSxnRUFBOEI7QUFDaEM7QUFDQSx5QkFBeUIsbURBQWE7QUFDdEMsSUFBSSxxREFBZTtBQUNuQjtBQUNBLElBQUksNkNBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBLElBQUksaURBQVc7QUFDZixJQUFJLG9EQUFjO0FBQ2xCLDJCQUEyQixhQUFhO0FBQ3hDLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCeUQ7QUFDRjs7QUFFaEQ7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVPOzs7Ozs7O1VDN0JQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0h5QjtBQUNxQjtBQUNUOztBQUVyQyw2RUFBNkI7QUFDN0IscURBQWUsQ0FBQyw4Q0FBUTtBQUN4QixvRUFBb0IsQ0FBQyw4Q0FBUTtBQUM3Qiw2Q0FBVyxDQUFDLHVEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFRhc2tzLCBsaXN0T2ZQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpO1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmV4cG9ydCBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbmV4cG9ydCBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5leHBvcnQgY29uc3QgdGFza1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFNlY3Rpb25cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREb21Ub1Byb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0Lmxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0Lmxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0LnByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0U2VjdGlvblwiKTtcbiAgcHJvamVjdC50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdC50aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdC5kZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0LmRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZUJ1dHRvblwiKTtcbiAgcHJvamVjdC5hZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RJdGVtKHByb2plY3QpIHtcbiAgY29udGVudC5hcHBlbmQocHJvamVjdC5wcm9qZWN0Q29udGVudCk7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuYXBwZW5kKHByb2plY3QudGl0bGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVByb2plY3RDb250ZW50KHByb2plY3QpIHtcbiAgcHJvamVjdC5wcm9qZWN0Q29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvamVjdENvbnRlbnQocHJvamVjdCkge1xuICBwcm9qZWN0LnByb2plY3RDb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGhpZGVQcm9qZWN0Q29udGVudChpdGVtKTtcbiAgfSk7XG4gIHNob3dQcm9qZWN0Q29udGVudChwcm9qZWN0KTtcbn1cbiIsImltcG9ydCB7XG4gIHByb2plY3RCdXR0b24sXG4gIGxpc3QsXG4gIGxpc3RJdGVtLFxuICBjb250ZW50LFxuICByZW1vdmVJdGVtLFxuICBhZGREb21Ub1Byb2plY3QsXG4gIGFkZExpc3RJdGVtLFxuICBkaXNwbGF5UHJvamVjdCxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBhbGxUYXNrcywgbGlzdE9mUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcigpIHtcbiAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgbmFtZSA9IHByb21wdChcInByb2plY3QgbmFtZVwiKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgIGFkZERvbVRvUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBwcm9qZWN0RXZlbnRMaXN0ZW5lcihuZXdQcm9qZWN0KTtcbiAgICBsaXN0LmFwcGVuZChuZXdQcm9qZWN0Lmxpc3RJdGVtKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RXZlbnRMaXN0ZW5lcihwcm9qZWN0KSB7XG4gIHByb2plY3QubGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgYWRkTGlzdEl0ZW0ocHJvamVjdCk7XG4gICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coYGNsaWNrZWQgJHtwcm9qZWN0Lm5hbWV9YCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QpIHt9XG4iLCJpbXBvcnQgeyBsaXN0LCBjcmVhdGVMaXN0SXRlbSwgcHJvamVjdERvbSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgcHJvamVjdEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVyXCI7XG5cbmV4cG9ydCBsZXQgbGlzdE9mUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGNsYXNzIGNyZWF0ZVByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgbGlzdE9mUHJvamVjdHMucHVzaCh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0T2ZQcm9qZWN0cyk7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG4gIGhpZGUoKSB7XG4gICAgdGhpcy5wcm9qZWN0Q29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgfVxuICBzaG93KCkge1xuICAgIHRoaXMucHJvamVjdENvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gIH1cbiAgZGlzcGxheSgpIHtcbiAgICBsaXN0T2ZQcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmhpZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnNob3coKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYWxsVGFza3MgPSBuZXcgY3JlYXRlUHJvamVjdChcImFsbCB0YXNrc1wiKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgYWRkUHJvamVjdEJ1dHRvbkV2ZW50TGlzdGVuZXIsXG4gIHByb2plY3RFdmVudExpc3RlbmVyLFxufSBmcm9tIFwiLi9ldmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyBsaXN0LCBhZGREb21Ub1Byb2plY3QgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5hZGRQcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcigpO1xuYWRkRG9tVG9Qcm9qZWN0KGFsbFRhc2tzKTtcbnByb2plY3RFdmVudExpc3RlbmVyKGFsbFRhc2tzKTtcbmxpc3QuYXBwZW5kKGFsbFRhc2tzLmxpc3RJdGVtKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==