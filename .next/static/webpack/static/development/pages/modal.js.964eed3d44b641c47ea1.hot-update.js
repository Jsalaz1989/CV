webpackHotUpdate("static\\development\\pages\\modal.js",{

/***/ "./pages/modal.js":
/*!************************!*\
  !*** ./pages/modal.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_MyContentData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyContentData */ "./components/MyContentData.js");
var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\pages\\modal.js";



var tile = _components_MyContentData__WEBPACK_IMPORTED_MODULE_2__["tiles"].robot;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: tile.title,
    centered: true,
    visible: true,
    onOk: function onOk() {
      return setOpen(true);
    },
    onCancel: function onCancel() {
      return setOpen(false);
    },
    zIndex: 99999,
    mask: true,
    closable: false,
    footer: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    type: "flex",
    justify: "space-around",
    align: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, tile.paragraphs.map(function (paragraph, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, paragraph);
  }), tile.bullets && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, tile.bullets.map(function (bullet, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, bullet);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, tile.slides.map(function (slide, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key // style={{ backgroundImage: `url(static/images/${slide.source})` }}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, slide.source.includes('jpg') || slide.source.includes('jpeg') ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slide-image",
      style: {
        backgroundImage: "url(static/images/".concat(slide.source, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      // width={100} 
      height: 400,
      src: slide.source,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      title: slide.source,
      crossOrigin: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, slide.description));
  }))))));
});

/***/ })

})
//# sourceMappingURL=modal.js.964eed3d44b641c47ea1.hot-update.js.map