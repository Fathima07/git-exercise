/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\r\nconst getDiv = document.getElementById(\"to-do\");\r\nconst crtUl = document.createElement(\"ul\");\r\nconst crtInput = document.createElement(\"input\");\r\nconst crtFilter = document.getElementById(\"filter-todo\");\r\nif (!(crtFilter instanceof HTMLInputElement)) {\r\n    throw new Error(\"No input with id 'filter-todo' found!\");\r\n}\r\nif (!(getDiv instanceof HTMLDivElement)) {\r\n    throw new Error(\"No div with id 'to-do' found!\");\r\n}\r\nconst toDos = [\r\n    {\r\n        title: \"BWM\",\r\n        done: true,\r\n    },\r\n    {\r\n        title: \"Audi\",\r\n        done: true,\r\n    },\r\n    {\r\n        title: \"Benz\",\r\n        done: true,\r\n    },\r\n    {\r\n        title: \"Toyoto\",\r\n        done: false,\r\n    },\r\n];\r\nconst crtToDo = () => {\r\n    getDiv.innerHTML = \"\";\r\n    crtInput.setAttribute(\"type\", \"text\");\r\n    crtInput.innerHTML = \" \";\r\n    getDiv.appendChild(crtInput);\r\n    getDiv.appendChild(crtUl);\r\n    let crtButton = document.createElement('button');\r\n    listTodo(false);\r\n    crtButton.innerText = \"Add\";\r\n    getDiv.appendChild(crtButton);\r\n    crtButton.addEventListener(\"click\", addTodo);\r\n    crtFilter.addEventListener(\"click\", function () {\r\n        listTodo(crtFilter.checked);\r\n    });\r\n};\r\nconst addTodo = () => {\r\n    toDos.push({\r\n        'title': crtInput.value,\r\n        'done': false,\r\n    });\r\n    listTodo(false);\r\n};\r\nconst listTodo = (filter) => {\r\n    crtUl.innerHTML = '';\r\n    for (const todo of toDos.sort((a, b) => a.title.localeCompare(b.title))) {\r\n        if ((filter && !todo.done)) {\r\n            continue;\r\n        }\r\n        let crtLi = document.createElement('li');\r\n        let checkInput = document.createElement('input');\r\n        checkInput.setAttribute(\"type\", \"checkbox\");\r\n        checkInput.checked = todo.done;\r\n        crtLi.appendChild(checkInput);\r\n        checkInput.addEventListener(\"click\", function () {\r\n            if (checkInput.value) {\r\n                todo.done = checkInput.checked;\r\n                console.log(todo);\r\n            }\r\n        });\r\n        let crtSpan = document.createElement(\"span\");\r\n        crtSpan.innerHTML = \"Title:\" + todo.title;\r\n        crtLi.appendChild(crtSpan);\r\n        crtUl.appendChild(crtLi);\r\n    }\r\n};\r\ncrtToDo();\r\n/*\r\nconst addToDoList = () => {\r\n   let int = document.querySelector('crtInput')?.value;\r\n   let ulElement = document.querySelector('crtUl');\r\n   let toDosList = \" \";\r\n\r\n   for( let i=0; i<toDos.length;i++){\r\n     if(toDos[i].title == int && toDos[i].done){\r\n       toDosList += \"<li>\" + toDos[i].title + \"</li>\" + \"<br>\" + \"<li>\" + toDos[i].done + \"</li>\";\r\n     }\r\n   }\r\n    document.querySelector('ulElement').innerHTML = toDosList;\r\n\r\n  }\r\n\r\n  addToDoList();\r\n  */ \r\n\n\n//# sourceURL=webpack://feature-fix/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;