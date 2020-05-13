(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/weather-app-api/src/app/app.controller.ts":
/*!********************************************************!*\
  !*** ./apps/weather-app-api/src/app/app.controller.ts ***!
  \********************************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/weather-app-api/src/app/app.service.ts");
/* harmony import */ var _pract_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pract/data */ "./libs/data/src/index.ts");
var _a, _b;




let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.appService.getData();
            console.log(data, "data");
            return this.appService.getData();
        });
    }
    addData(city) {
        return this.appService.addData(city);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('cities'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AppController.prototype, "getData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('addCity'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _pract_data__WEBPACK_IMPORTED_MODULE_3__["ICity"] !== "undefined" && _pract_data__WEBPACK_IMPORTED_MODULE_3__["ICity"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "addData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _b : Object])
], AppController);



/***/ }),

/***/ "./apps/weather-app-api/src/app/app.module.ts":
/*!****************************************************!*\
  !*** ./apps/weather-app-api/src/app/app.module.ts ***!
  \****************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/weather-app-api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/weather-app-api/src/app/app.service.ts");




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        // imports: [MongooseModule.forRoot('mongodb+srv://vlad:1GDbEr94cgXpWpFs@cluster0-64hz2.mongodb.net/nestjs-weather?retryWrites=true&w=majority')],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/weather-app-api/src/app/app.service.ts":
/*!*****************************************************!*\
  !*** ./apps/weather-app-api/src/app/app.service.ts ***!
  \*****************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


// import {mongodb} from 'mongodb'
let AppService = class AppService {
    constructor() {
        this.mongoUrl = 'mongodb+srv://vlad:3Pm2rkCHIT0T2e9k@cluster0-64hz2.mongodb.net/todos?retryWrites=true&w=majority';
        this.cities = [];
        this.mongodb = __webpack_require__(/*! mongodb */ "mongodb");
        this.MongoClient = this.mongodb.MongoClient;
        let mongo;
        this.MongoClient
            .connect(this.mongoUrl, { useNewUrlParser: true })
            .then(function (client) {
            mongo = client.db();
            mongo
                .collection('todos')
                .find().toArray()
                .then(function (todos) {
            });
        });
    }
    // async getData() {
    //   let gotCities 
    //   let mongo;
    //   await this.MongoClient
    //     .connect(this.mongoUrl, { useNewUrlParser: true })
    //     .then(function(client) {
    //       mongo = client.db();
    //       mongo
    //           .collection('todos')
    //           .find().toArray()
    //           .then(function(todos) {
    //               gotCities = todos
    //               console.log(gotCities)
    //           });
    //     });
    //     return gotCities
    // }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const client = yield this.MongoClient.connect(this.mongoUrl, { useNewUrlParser: true });
            const db = client.db();
            const cities = yield db.collection('todos').find().toArray();
            return cities;
        });
    }
    addData(city) {
        let mongo;
        this.MongoClient
            .connect(this.mongoUrl, { useNewUrlParser: true })
            .then(function (client) {
            mongo = client.db();
            mongo
                .collection('todos')
                .insertOne({
                city: city.city,
                coordLat: city.coords.lat,
                coordLog: city.coords.lon,
                flag: city.flag
            })
                .then(function () {
                // Виконується після створення
            });
            console.log(city);
        });
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AppService);



/***/ }),

/***/ "./apps/weather-app-api/src/main.ts":
/*!******************************************!*\
  !*** ./apps/weather-app-api/src/main.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./apps/weather-app-api/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */



function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.port || 3333;
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/data/src/index.ts":
/*!********************************!*\
  !*** ./libs/data/src/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/data */ "./libs/data/src/lib/data.ts");
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_data__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_data__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./libs/data/src/lib/data.ts":
/*!***********************************!*\
  !*** ./libs/data/src/lib/data.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./apps/weather-app-api/src/main.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vlad/Desktop/work/pract/apps/weather-app-api/src/main.ts */"./apps/weather-app-api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map