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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss__ = __webpack_require__(/*! ../scss/main.scss */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_main_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_js__ = __webpack_require__(/*! ./slider.js */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_js__ = __webpack_require__(/*! ./menu.js */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sticky_js__ = __webpack_require__(/*! ./sticky.js */ 8);\n\r\n\r\n\r\n\r\n\r\n$(function(){\r\n    // banner\r\n    Object(__WEBPACK_IMPORTED_MODULE_1__slider_js__[\"a\" /* default */])();\r\n    // menu\r\n    Object(__WEBPACK_IMPORTED_MODULE_2__menu_js__[\"a\" /* default */])();\r\n    // sticky\r\n    Object(__WEBPACK_IMPORTED_MODULE_3__sticky_js__[\"a\" /* default */])();\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanM/NzFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9zbGlkZXIuanNcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgc3RpY2t5IGZyb20gXCIuL3N0aWNreS5qc1wiO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICAgLy8gYmFubmVyXHJcbiAgICBzbGlkZXIoKTtcclxuICAgIC8vIG1lbnVcclxuICAgIG1lbnUoKTtcclxuICAgIC8vIHN0aWNreVxyXG4gICAgc3RpY2t5KCk7XHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz9hNmQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = slider;\nfunction slider(){\r\n    $('.banner-wrap').slick({\r\n        slidesToShow: 1,\r\n        adaptiveHeight: false,\r\n        autoplay: true,\r\n        autoplaySpeed: 5000,\r\n        arrows: false,\r\n        dots: true,\r\n        infinite: true\r\n    });\r\n    $('.review-slider').slick({\r\n        slidesToShow: 1,\r\n        adaptiveHeight: false,\r\n        autoplay: true,\r\n        autoplaySpeed: 5000,\r\n        arrows: false,\r\n        dots: true,\r\n        infinite: true\r\n    });\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXIuanM/Y2FmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZXIoKXtcclxuICAgICQoJy5iYW5uZXItd3JhcCcpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgICQoJy5yZXZpZXctc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgIH0pO1xyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc2xpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = slider;\nfunction slider(){\r\n  $('.menu-wrapper').click(function() {\r\n\t\t\t$('.hamburger-menu').toggleClass('animate');\r\n\t\t\t$('.menu-content').toggleClass('fixed-menu');\r\n\t\t\t$(this).parent().parent().parent().toggleClass('fixed');\r\n\t})\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tZW51LmpzPzAyZjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVyKCl7XHJcbiAgJCgnLm1lbnUtd3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcuaGFtYnVyZ2VyLW1lbnUnKS50b2dnbGVDbGFzcygnYW5pbWF0ZScpO1xyXG5cdFx0XHQkKCcubWVudS1jb250ZW50JykudG9nZ2xlQ2xhc3MoJ2ZpeGVkLW1lbnUnKTtcclxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnZml4ZWQnKTtcclxuXHR9KVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvbWVudS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!**************************!*\
  !*** ./src/js/sticky.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = sticky;\nfunction sticky(){\r\n    var $header_desktop = $('.header');\r\n    var $nav_desktop = $('.header');\r\n    var distance_desktop = $('.header').height() + 100;\r\n    $(document).on('scroll', function () {\r\n        var offset = $(this).scrollTop();\r\n        // Scrolled past\r\n        if (offset > distance_desktop) {\r\n            $header_desktop.removeClass('container').addClass('container-fluid');\r\n            $header_desktop.addClass('sticky-top');\r\n        } else {\r\n            $header_desktop.removeClass('sticky-top');\r\n            $header_desktop.removeClass('container-fluid').addClass('container');\r\n        }\r\n        if ($(window).width() < 992){\r\n            $('.header').removeClass('container');\r\n            $('.header').addClass('container-fluid');\r\n        }\r\n    });\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9zdGlja3kuanM/MDBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGlja3koKXtcclxuICAgIHZhciAkaGVhZGVyX2Rlc2t0b3AgPSAkKCcuaGVhZGVyJyk7XHJcbiAgICB2YXIgJG5hdl9kZXNrdG9wID0gJCgnLmhlYWRlcicpO1xyXG4gICAgdmFyIGRpc3RhbmNlX2Rlc2t0b3AgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCkgKyAxMDA7XHJcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIC8vIFNjcm9sbGVkIHBhc3RcclxuICAgICAgICBpZiAob2Zmc2V0ID4gZGlzdGFuY2VfZGVza3RvcCkge1xyXG4gICAgICAgICAgICAkaGVhZGVyX2Rlc2t0b3AucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpLmFkZENsYXNzKCdjb250YWluZXItZmx1aWQnKTtcclxuICAgICAgICAgICAgJGhlYWRlcl9kZXNrdG9wLmFkZENsYXNzKCdzdGlja3ktdG9wJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGhlYWRlcl9kZXNrdG9wLnJlbW92ZUNsYXNzKCdzdGlja3ktdG9wJyk7XHJcbiAgICAgICAgICAgICRoZWFkZXJfZGVza3RvcC5yZW1vdmVDbGFzcygnY29udGFpbmVyLWZsdWlkJykuYWRkQ2xhc3MoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA5OTIpe1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2NvbnRhaW5lci1mbHVpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvc3RpY2t5LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);