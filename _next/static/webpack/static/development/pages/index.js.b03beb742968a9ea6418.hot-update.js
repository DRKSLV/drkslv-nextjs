webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/themeButton.js":
/*!***********************************!*\
  !*** ./components/themeButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _raw_loader_style_colorShemes_dark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!../style/colorShemes/dark.css */ "./node_modules/raw-loader/dist/cjs.js!./style/colorShemes/dark.css");
/* harmony import */ var _raw_loader_style_colorShemes_bright_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!../style/colorShemes/bright.css */ "./node_modules/raw-loader/dist/cjs.js!./style/colorShemes/bright.css");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHub\\node\\drkslv-nextjs\\components\\themeButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ThemeButton(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Boolean(localStorage.getItem("edgy"))),
      themeDark = _useState[0],
      setThemeDark = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, []);

  function toggle() {
    setThemeDark(!themeDark);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../res/img/theme.svg */ "./res/img/theme.svg")["default"],
    onClick: toggle,
    height: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, themeDark ? _raw_loader_style_colorShemes_dark_css__WEBPACK_IMPORTED_MODULE_2__["default"] : _raw_loader_style_colorShemes_bright_css__WEBPACK_IMPORTED_MODULE_3__["default"])));
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeButton);

/***/ })

})
//# sourceMappingURL=index.js.b03beb742968a9ea6418.hot-update.js.map