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

eval("\r\nlet cel = document.getElementById(\"cel\");\r\nlet fer = document.getElementById(\"fer\");\r\nlet celToFer = (celValue) => {\r\n    var outResult = Number(celValue * 1.8 + 32);\r\n    fer.value = outResult.toString();\r\n};\r\nlet ferToCel = (celValue) => {\r\n    var outResult = Number((celValue - 32) * (5 / 9));\r\n    cel.value = outResult.toString();\r\n};\r\ncel.addEventListener(\"input\", (value) => {\r\n    celToFer(Number(cel.value)); //convert to number and send to compute function\r\n});\r\nfer.addEventListener(\"input\", (value) => {\r\n    ferToCel(Number(fer.value)); //convert to number and send to compute function\r\n});\r\n\n\n//# sourceURL=webpack://04-addition/./src/main.ts?");

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