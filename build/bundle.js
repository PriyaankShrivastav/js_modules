/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_big_jpg__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_big_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_big_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_small_jpg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_small_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_small_jpg__);



var image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';
document.body.appendChild(image); // Webpack by itself only knows javascript, so when we want it to pack any other type of resources like 
// .css or .scss or .ts, webpack needs help in order to compile and bundle those non-javascript types of 
// resources.

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sum = function sum(a, b) {
  return a + b;
}; // this will get available for other modules present in our project.


/* harmony default export */ __webpack_exports__["a"] = (sum);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_viewer__ = __webpack_require__(0);
// it will look for the sum file in our current directory and will import whatever
// being exported from the sum file.

 // here we have simply imported the file since it was not exporting anything.
// importing the file simply will get the file executed and whatever there in file(image_viewer) will get executed

var total = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sum__["a" /* default */])(10, 5);
console.log(total);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'imagemin-gifsicle'\nRequire stack:\n- C:\\Users\\us433344\\js_modules\\node_modules\\image-webpack-loader\\index.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\loader-runner\\lib\\loadLoader.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\loader-runner\\lib\\LoaderRunner.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\lib\\NormalModule.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\lib\\NormalModuleFactory.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\lib\\Compiler.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\lib\\webpack.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\bin\\webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\n    at Module.require (internal/modules/cjs/loader.js:952:19)\n    at require (internal/modules/cjs/helpers.js:88:18)\n    at Object.module.exports (C:\\Users\\us433344\\js_modules\\node_modules\\image-webpack-loader\\index.js:72:20)");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'imagemin-gifsicle'\nRequire stack:\n- C:\\Users\\us433344\\js_modules\\node_modules\\image-webpack-loader\\index.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\loader-runner\\lib\\loadLoader.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\loader-runner\\lib\\LoaderRunner.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\lib\\NormalModule.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\lib\\NormalModuleFactory.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\lib\\Compiler.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\lib\\webpack.js\n- C:\\Users\\us433344\\js_modules\\node_modules\\webpack\\bin\\webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\n    at Module.require (internal/modules/cjs/loader.js:952:19)\n    at require (internal/modules/cjs/helpers.js:88:18)\n    at Object.module.exports (C:\\Users\\us433344\\js_modules\\node_modules\\image-webpack-loader\\index.js:72:20)");

/***/ })
/******/ ]);