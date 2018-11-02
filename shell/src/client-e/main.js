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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular/angular.js":
/*!*****************************************!*\
  !*** ./node_modules/angular/angular.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/angular/index.js":
/*!***************************************!*\
  !*** ./node_modules/angular/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./angular */ \"./node_modules/angular/angular.js\");\nmodule.exports = angular;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYW5ndWxhci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmd1bGFyL2luZGV4LmpzPzI4N2MiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9hbmd1bGFyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/angular/index.js\n");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular = __importStar(__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\"));\r\nvar bookings_component_1 = __webpack_require__(/*! ./bookings.component */ \"./src/bookings.component.ts\");\r\nexports.default = angular\r\n    .module('app', [])\r\n    .component('bookings', bookings_component_1.bookingsComponent)\r\n    .name;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCB7IGJvb2tpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9ib29raW5ncy5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhclxyXG4gICAgICAgICAgICAgICAgLm1vZHVsZSgnYXBwJywgW10pXHJcbiAgICAgICAgICAgICAgICAuY29tcG9uZW50KCdib29raW5ncycsIGJvb2tpbmdzQ29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgLm5hbWU7XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/bookings.component.ts":
/*!***********************************!*\
  !*** ./src/bookings.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.bookingsComponent = {\r\n    controller: ['$scope', '$location', function ($scope, $location) {\r\n            var that = this;\r\n            this.title = 'Your Bookings';\r\n            this.bookings = [\r\n                { id: '4711', from: 'Graz', to: 'New York', date: new Date() },\r\n                { id: '4712', from: 'New York', to: 'Graz', date: new Date() }\r\n            ];\r\n            this.select = function (e) {\r\n            };\r\n        }],\r\n    template: \"\\n    <div style=\\\"border: dashed 5px gray; padding: 10px;\\\">\\n\\n        <div style=\\\"margin-bottom:10px;\\\">\\n            <img src=\\\"assets/img/angularjs.png\\\" height=\\\"50\\\">\\n        </div>\\n\\n        <div class=\\\"card\\\">\\n\\n            <div class=\\\"header\\\">\\n                <h2 class=\\\"title\\\">{{$ctrl.title}}</h2>\\n            </div>\\n            <div class=\\\"content\\\">\\n    \\n                <ul ng-repeat=\\\"b in $ctrl.bookings\\\" class=\\\"list-group\\\">\\n                    <li class=\\\"list-group-item\\\">\\n                        <a ng-click=\\\"$ctrl.select(b)\\\">{{b.id}}, {{b.from}} - {{b.to}}, {{b.date | date:'short'}}</a>\\n                    </li>\\n                </ul>\\n\\n            </div>\\n        </div>\\n    </div>        \\n    \"\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYm9va2luZ3MuY29tcG9uZW50LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb2tpbmdzLmNvbXBvbmVudC50cz80OTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZpY2VCdXMgfSBmcm9tICcuL3NlcnZpY2UtYnVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBib29raW5nc0NvbXBvbmVudDogYW5ndWxhci5JQ29tcG9uZW50T3B0aW9ucyA9IHtcclxuICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uKCRzY29wZTogYW5ndWxhci5JU2NvcGUsICRsb2NhdGlvbjogYW5ndWxhci5JTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnWW91ciBCb29raW5ncyc7XHJcblxyXG4gICAgICAgIHRoaXMuYm9va2luZ3MgPSBbXHJcbiAgICAgICAgICAgIHsgaWQ6ICc0NzExJywgZnJvbTogJ0dyYXonLCB0bzogJ05ldyBZb3JrJywgZGF0ZTogbmV3IERhdGUoKSB9LFxyXG4gICAgICAgICAgICB7IGlkOiAnNDcxMicsIGZyb206ICdOZXcgWW9yaycsIHRvOiAnR3JheicsIGRhdGU6IG5ldyBEYXRlKCkgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1dLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgc3R5bGU9XCJib3JkZXI6IGRhc2hlZCA1cHggZ3JheTsgcGFkZGluZzogMTBweDtcIj5cclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MTBweDtcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FuZ3VsYXJqcy5wbmdcIiBoZWlnaHQ9XCI1MFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj57eyRjdHJsLnRpdGxlfX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIG5nLXJlcGVhdD1cImIgaW4gJGN0cmwuYm9va2luZ3NcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgbmctY2xpY2s9XCIkY3RybC5zZWxlY3QoYilcIj57e2IuaWR9fSwge3tiLmZyb219fSAtIHt7Yi50b319LCB7e2IuZGF0ZSB8IGRhdGU6J3Nob3J0J319PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgYFxyXG59OyJdLCJtYXBwaW5ncyI6Ijs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUF3QkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/bookings.component.ts\n");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular = __importStar(__webpack_require__(/*! angular */ \"./node_modules/angular/index.js\"));\r\nvar app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\r\nangular.bootstrap(document.body, [app_1.default]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0IGFwcE1vZHVsZSBmcm9tICcuL2FwcCc7XHJcblxyXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudC5ib2R5LCBbYXBwTW9kdWxlXSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ })

/******/ });