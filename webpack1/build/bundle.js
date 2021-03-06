/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(3);

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(4);

var _4 = _interopRequireDefault(_3);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
console.log(_4.default);
image.src = _4.default; // because it's a row data inside our bundle.js
document.body.appendChild(image);

var bigImage = document.createElement('img');
console.log(_2.default);
bigImage.src = _2.default;
document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6811e02a2408d355f0d364d17af253d6.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);