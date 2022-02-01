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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUCxFQUFFLDREQUFzQjtBQUN4QjtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmU7QUFDcUQ7O0FBRTdEO0FBQ1AsRUFBRSxnRUFBOEI7QUFDaEM7QUFDQSx5QkFBeUIsbURBQWE7QUFDdEMsSUFBSSxxREFBZTtBQUNuQjtBQUNBLElBQUksNkNBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBLElBQUksaURBQVc7QUFDZixJQUFJLG9EQUFjO0FBQ2xCLDJCQUEyQixhQUFhO0FBQ3hDLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCeUQ7QUFDRjs7QUFFaEQ7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7OztVQ2RQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0h5QjtBQUNxQjtBQUNUOztBQUVyQyw2RUFBNkI7QUFDN0IscURBQWUsQ0FBQyw4Q0FBUTtBQUN4QixvRUFBb0IsQ0FBQyw4Q0FBUTtBQUM3Qiw2Q0FBVyxDQUFDLHVEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFRhc2tzLCBsaXN0T2ZQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpO1xuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmV4cG9ydCBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbmV4cG9ydCBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5leHBvcnQgY29uc3QgdGFza1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFNlY3Rpb25cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREb21Ub1Byb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0Lmxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0Lmxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBwcm9qZWN0LnByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0U2VjdGlvblwiKTtcbiAgcHJvamVjdC50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdC50aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgcHJvamVjdC5kZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0LmRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZUJ1dHRvblwiKTtcbiAgcHJvamVjdC5hZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RJdGVtKHByb2plY3QpIHtcbiAgY29udGVudC5hcHBlbmQocHJvamVjdC5wcm9qZWN0Q29udGVudCk7XG4gIHByb2plY3QucHJvamVjdENvbnRlbnQuYXBwZW5kKHByb2plY3QudGl0bGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVByb2plY3RDb250ZW50KHByb2plY3QpIHtcbiAgcHJvamVjdC5wcm9qZWN0Q29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvamVjdENvbnRlbnQocHJvamVjdCkge1xuICBwcm9qZWN0LnByb2plY3RDb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGhpZGVQcm9qZWN0Q29udGVudChpdGVtKTtcbiAgfSk7XG4gIHNob3dQcm9qZWN0Q29udGVudChwcm9qZWN0KTtcbn1cbiIsImltcG9ydCB7XG4gIHByb2plY3RCdXR0b24sXG4gIGxpc3QsXG4gIGxpc3RJdGVtLFxuICBjb250ZW50LFxuICByZW1vdmVJdGVtLFxuICBhZGREb21Ub1Byb2plY3QsXG4gIGFkZExpc3RJdGVtLFxuICBkaXNwbGF5UHJvamVjdCxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBhbGxUYXNrcywgbGlzdE9mUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uRXZlbnRMaXN0ZW5lcigpIHtcbiAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgbmFtZSA9IHByb21wdChcInByb2plY3QgbmFtZVwiKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgIGFkZERvbVRvUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBwcm9qZWN0RXZlbnRMaXN0ZW5lcihuZXdQcm9qZWN0KTtcbiAgICBsaXN0LmFwcGVuZChuZXdQcm9qZWN0Lmxpc3RJdGVtKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RXZlbnRMaXN0ZW5lcihwcm9qZWN0KSB7XG4gIHByb2plY3QubGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgYWRkTGlzdEl0ZW0ocHJvamVjdCk7XG4gICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coYGNsaWNrZWQgJHtwcm9qZWN0Lm5hbWV9YCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QpIHt9XG4iLCJpbXBvcnQgeyBsaXN0LCBjcmVhdGVMaXN0SXRlbSwgcHJvamVjdERvbSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgcHJvamVjdEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVyXCI7XG5cbmV4cG9ydCBsZXQgbGlzdE9mUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGNsYXNzIGNyZWF0ZVByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgbGlzdE9mUHJvamVjdHMucHVzaCh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0T2ZQcm9qZWN0cyk7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFsbFRhc2tzID0gbmV3IGNyZWF0ZVByb2plY3QoXCJhbGwgdGFza3NcIik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGFkZFByb2plY3RCdXR0b25FdmVudExpc3RlbmVyLFxuICBwcm9qZWN0RXZlbnRMaXN0ZW5lcixcbn0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IHsgbGlzdCwgYWRkRG9tVG9Qcm9qZWN0IH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBhbGxUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuYWRkUHJvamVjdEJ1dHRvbkV2ZW50TGlzdGVuZXIoKTtcbmFkZERvbVRvUHJvamVjdChhbGxUYXNrcyk7XG5wcm9qZWN0RXZlbnRMaXN0ZW5lcihhbGxUYXNrcyk7XG5saXN0LmFwcGVuZChhbGxUYXNrcy5saXN0SXRlbSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=