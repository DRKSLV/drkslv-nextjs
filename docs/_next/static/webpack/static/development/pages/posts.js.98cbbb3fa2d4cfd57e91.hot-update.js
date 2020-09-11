webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/header */ "./components/layout/header.js");
/* harmony import */ var _example_posts_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-posts.json */ "./pages/example-posts.json");
var _example_posts_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./example-posts.json */ "./pages/example-posts.json", 1);
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/post */ "./components/post.js");
/* harmony import */ var _components_postingForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/postingForm */ "./components/postingForm.js");
/* harmony import */ var _components_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/comment */ "./components/comment.js");
/* harmony import */ var _style_post_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/post.sass */ "./style/post.sass");
/* harmony import */ var _style_post_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_post_sass__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHub\\node\\drkslv-nextjs\\pages\\posts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var App = function App(props) {
  var post_objects = []; //generate components from posts

  props.posts.forEach(function (post, index) {
    post_objects.push(__jsx(_components_post__WEBPACK_IMPORTED_MODULE_3__["default"], {
      post: post,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("noscript", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "JavaScript: Some features are diabled!"), __jsx(_components_postingForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user: "FELIX",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), post_objects, __jsx(_components_comment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    comment: {
      upvotes: 4,
      downvotes: 1,
      author: "Test_Comment",
      text: "Pardon the interruption\nJust testing"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
};

var Index = function Index() {
  return __jsx(App, {
    posts: _example_posts_json__WEBPACK_IMPORTED_MODULE_2__,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  });
};

Index.getLayout = function () {};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=posts.js.98cbbb3fa2d4cfd57e91.hot-update.js.map