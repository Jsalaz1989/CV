webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MyMenu.js":
/*!******************************!*\
  !*** ./components/MyMenu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/graduation-hat.svg */ "./static/graduation-hat.svg");
/* harmony import */ var _static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/briefcase.svg */ "./static/briefcase.svg");
/* harmony import */ var _MyMenu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyMenu.css */ "./components/MyMenu.css");
/* harmony import */ var _MyMenu_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MyMenu_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_copyEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/copyEmail */ "./helpers/copyEmail.js");

var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\components\\MyMenu.js";





var SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;
var Link = antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"].Link;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var handleClick = function handleClick(e) {
    console.log('click ', e);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      submenuHovered = _useState2[0],
      setSubmenuHovered = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menu-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    onClick: handleClick // style={{ width: 256 }}
    // defaultSelectedKeys={['1']}
    ,
    defaultSelectedKeys: [],
    defaultOpenKeys: ['highlights'],
    mode: "inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "contact",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "mail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Contact")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "email",
    onClick: _helpers_copyEmail__WEBPACK_IMPORTED_MODULE_6__["copyEmail"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Copy my email to your clipboard",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Email"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Open my profile in a new tab",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://linkedin.com/in/jaime-salazar-lahera",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Open my repo in a new tab",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/jsalaz1989",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "GitHub")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "bio",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Bio")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#bio",
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "cv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Download as PDF",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "../static/cv.pdf",
    title: "CV - Jaime Salazar Lahera",
    download: "CV - Jaime Salazar Lahera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "CV")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "highlights",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "trophy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Highlights")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].ItemGroup, {
    key: "g1",
    title: "Item 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Option 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Option 2")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].ItemGroup, {
    key: "g2",
    title: "Item 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Option 3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Option 4"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "academics",
    onMouseOver: function onMouseOver() {
      return setSubmenuHovered('academics');
    },
    onMouseOut: function onMouseOut() {
      return setSubmenuHovered(null);
    },
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "custom-icon ".concat(submenuHovered === 'academics' ? 'custom-icon-hover' : 'custom-icon-nohover'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Academics")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "master",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#masters",
    title: "Master's Degree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "undergrad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#undergrad",
    title: "Bachelor's Degree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "professional",
    onMouseOver: function onMouseOver() {
      return setSubmenuHovered('professional');
    },
    onMouseOut: function onMouseOut() {
      return setSubmenuHovered(false);
    },
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "custom-icon ".concat(submenuHovered === 'professional' ? 'custom-icon-hover' : 'custom-icon-nohover'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Professional")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "solar1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#solar1",
    title: "PV Sales and Tech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "solar2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#solar2",
    title: "PV Apprentice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "skills",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Skills")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Option 9"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Option 10"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Option 11"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Option 12"))));
});

/***/ })

})
//# sourceMappingURL=index.js.3a32aa71bbc4f6e6182d.hot-update.js.map