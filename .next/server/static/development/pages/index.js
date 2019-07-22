module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MyContent.css":
/*!**********************************!*\
  !*** ./components/MyContent.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MyContent.js":
/*!*********************************!*\
  !*** ./components/MyContent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyContent.css */ "./components/MyContent.css");
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MyContent_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/graduation-hat.svg */ "./static/graduation-hat.svg");
/* harmony import */ var _static_briefcase_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/briefcase.svg */ "./static/briefcase.svg");
/* harmony import */ var _MyContentData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyContentData */ "./components/MyContentData.js");

var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\components\\MyContent.js";






 // function enableTileOverflow() {
//     console.log('enableTileOverflow()')
//     document.getElementsByClassName('tiles-container')[0].style.overflow = 'visible'
// }
// function disableTileOverflow() {
//     console.log('disableTileOverflow()')
//     document.getElementsByClassName('tiles-container')[0].style.overflowY = 'visible'
//     document.getElementsByClassName('tiles-container')[0].style.overflowX = 'scroll'
// }

function enableTileOverflow() {
  console.log('enableTileOverflow()');
  document.getElementsByClassName('tiles-container')[0].style.clipath = '5%';
}

function disableTileOverflow() {
  console.log('disableTileOverflow()');
  document.getElementsByClassName('tiles-container')[0].style.left = 0;
}

var Tile = function Tile(_ref) {
  var tile = _ref.tile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile",
    onClick: function onClick() {
      return setOpen(!open);
    },
    id: tile.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "tile-image",
    src: tile.source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, tile.title))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: tile.title,
    centered: true,
    visible: open,
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
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "space-around",
    align: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, tile.paragraphs.map(function (paragraph, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, paragraph);
  }), tile.bullets && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, tile.bullets.map(function (bullet, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, bullet);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, tile.slides.map(function (slide, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: key // style={{ backgroundImage: `url(static/images/${slide.source})` }}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, slide.source.includes('jpg') || slide.source.includes('jpeg') ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "slide-image",
      style: {
        backgroundImage: "url(static/images/".concat(slide.source, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
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
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, slide.description));
  }))))));
};

var Experience = function Experience(_ref2) {
  var experience = _ref2.experience;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: experience.id,
    className: "exp-skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, experience.position), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, experience.date)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, experience.organization, ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, experience.location)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, experience.bullets.map(function (bullet, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, bullet);
  })));
};

var Skill = function Skill(_ref3) {
  var skill = _ref3.skill;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: skill.id,
    className: "exp-skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "start",
    align: "middle",
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, skill.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, skill.bullets.map(function (detail, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, detail);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    className: "divide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "user",
    className: "divider-icon",
    id: "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), "Bio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Graduate in MS Electromechanical Engineering at UPM (Spain) with a diverse background."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Interested in programming, robotics, automation (especially RPA), solar energy, and the environment."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Continuous learner."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cv-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Feel free to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "../static/cv.pdf",
    title: "CV - Jaime Salazar Lahera",
    download: "CV - Jaime Salazar Lahera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "download my CV"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "trophy",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), "Hightlights"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Take a look at some of my projects, achievements, and experiences through the years"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tiles-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].robot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].solar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].rpa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].english,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].bollos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].dobot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "blocking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "I like to dabble in full-stack web programming and experiment with different technologies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "This interactive CV/portfolio is built with NextJS, a server-side rendering framework for ReactJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "I have a hobby project at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://jplusplus.pythonanywhere.com/",
    title: "N2T",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "jplusplus.pythonanywhere.com"), ", where I'm trying to build a Single-Page Application (SPA) with a ReactJS frontend and a Flask (Python) backend"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), "Academics"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].masters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].coursesETSIDI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].coursesMC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].undergrad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].associates,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].montes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), "Professional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].solar1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].solar2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "star",
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), "Skills"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["skills"].english,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "skill-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["skills"].software,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["skills"].coding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./components/MyContentData.js":
/*!*************************************!*\
  !*** ./components/MyContentData.js ***!
  \*************************************/
/*! exports provided: tiles, experiences, skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tiles", function() { return tiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiences", function() { return experiences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
var tiles = {
  robot: {
    title: 'Autonomous Agricultural Robot',
    source: '../static/images/robot/robot0.jpeg',
    paragraphs: ["The robot is controlled via the website (Flask), storing and reporting data from the SQL database. \n            The server or user communicates with the robot through MQTT and can execute manual and autonomous operations from the webapp.\n            In autonomous mode, it compares its GPS location using a Raspberry Pi module capable of RTK to navigate by itself to an objective point \n            designated on the map, avoiding obstacles in its way.", "It is made up of:"],
    bullets: ['2 Arduinos and 2 Raspberry Pis', 'brushed DC motors (12 V)', 'linear actuator', 'servomotors', 'GPS module (Real Time Kinematic mode)', 'soil sensor (temp, humidity, salinity, etc.)', 'ultrasonic sensors', 'magnetometer', 'webcam (for manual teleoperation and for autonomous RGB detection)', 'motorcycle battery (with an automatic shutoff system)', 'solar panels (2 x 12 V = 24 V) and MPPT charger'],
    slides: [{
      source: 'robot/robot0.jpeg',
      description: 'General view'
    }, {
      source: 'robot/robot1.jpeg',
      description: "Using a phone's GPS for autonomous navigation"
    }, {
      source: 'robot/robot2.jpeg',
      description: 'A RPi handles navigation while the other takes on the sampling'
    }, {
      source: 'robot/robot3.jpeg',
      description: 'An MPPT charger replenishing the battery with the solar panels'
    }, {
      source: 'robot/robot4.jpeg',
      description: 'A relay and Arduino interrupts allow for an automatic disconnect'
    }, {
      source: 'https://www.youtube.com/embed/3SSKflnLTFM',
      description: 'Obstacle avoidance'
    }, {
      source: 'https://www.youtube.com/embed/Rk9-UadbINs',
      description: 'Executing a complete cycle around and inside a "farm plot"'
    }, {
      source: 'https://www.youtube.com/embed/OWlBNlxA_rI',
      description: 'Farm plot creation'
    }, {
      source: 'https://www.youtube.com/embed/FOV5NGDlYEM',
      description: 'Manual mode'
    }, {
      source: 'https://www.youtube.com/embed/QPjmQsKv16o',
      description: 'Navigation between rows and a safety stop when confronted with a sudden obstacle'
    }, {
      source: 'https://www.youtube.com/embed/L75-gIPdzL8',
      description: 'Cage movement to allow for sampling with the linear actuator'
    }]
  },
  solar: {
    title: 'PV Sales and Tech Support',
    source: '../static/images/solar/coolAndCasual.jpg',
    paragraphs: ["I began as a solar sales representative, climbing up on rooftops for measurements and designing residential \n            systems to propose to our customers. It was a great forray into the world of technology, consulting, and construction.", "Over time I gained an interest in the technical side of the office as well as our products. I decided I wanted to \n            understand them better, which led me to embark on my Master's education in the following years. This implied taking \n            a few evening classes for general engineering courses at a local community college while working (!) so I could start building a solid technical base. When I returned to Madrid I continued this preparatory stage at the 'Universidad Polt\xE9cnica de Madrid'\n            to ensure I could be successful in getting my Master's degree.", "While at this position, in the field, I would help diagnose technical issues in our installations, such as a faulty \n            inverter. At the office, I learned about our day-to-day tasks and business flows, and I imagined these could be \n            optimized. So I began playing around with Excel macros (VBA) and simple JavaScript in PDFs to automatically generate \n            proposals, electric utility interconnection applications, and anything I could get my hands on. Back then I wasn't \n            aware of the booming RPA industry so nowadays I hope to apply Python and JS scripts to my tasks, as well as a proper \n            RPA suite like UiPath or BluePrism."],
    slides: [{
      source: 'solar/coolAndCasual.jpg',
      description: 'At the office, with less hair than now'
    }, {
      source: 'solar/withMayor.jpg',
      description: 'Municipal award for most solar installations with the Mayor of Washington, DC'
    }, {
      source: 'solar/onRoof.jpg',
      description: 'At one of our commercial-scale installations with some coworkers and crew members'
    }]
  },
  rpa: {
    title: 'Robotic Process Automation (RPA)',
    source: '../static/images/rpa/diploma0.jpg',
    paragraphs: ["Apart from general Bash, PowerShell, Python, and JS scripting, I can apply a professional RPA suite to many tasks.", "In particular, UiPath provides a somewhat graphical but mostly VB.NET programming to automate processes involving \n            text, images, forms, etc. I've been pretty impressed with its AI capabilities when extracting information from \n            scanned documents, websites, and even virtual machines.", "UiPath offers an Advanced Certification consisting of a timed theoretical and practical exam and this diploma will \n            technically last me until about next year. However, I don't expect the concepts learned will become outdated as I \n            believe the general ideas will remain my RPA base for years. In fact, having taken their courses has made it very \n            easy to then understand most programs such as BluePrism and Automation Anywhere."],
    slides: [{
      source: 'rpa/diploma0.jpg',
      description: 'Advanced Certification Degree'
    }, {
      source: 'rpa/diploma1.jpg',
      description: 'UiPath Fundamentals'
    }, {
      source: 'rpa/diploma2.jpg',
      description: 'Proficiency with their admin dashboard (UiPath Orchestrator)'
    }, {
      source: 'rpa/diploma3.jpg',
      description: 'Understanding their professional project framework (REFramework) and flows'
    }, {
      source: 'https://www.youtube.com/embed/i_Wq2fQJ8BE',
      description: 'Extracting client information to generate a hash code and update the database'
    }]
  },
  english: {
    title: 'Fluent English',
    source: '../static/images/rpa/diploma0.jpg',
    paragraphs: ["I learned English at a young age in bilingual schools (in Spanish-speaking countries) as well as regular schools \n            (in English-speaking countries). Later on I finished my undergraduate degree at the University of Maryland, \n            College Park, near Washington, DC.", "I had worked at different jobs for several years throughout my university studies and immediately after graduation I was\n            offered a position in Washington, DC", "I can speak, read, and write proficiently in English (and, of course, also in Spanish) but I will let the video do the \n            talking (pun intended)"],
    slides: [{
      source: 'https://www.youtube.com/embed/i_Wq2fQJ8BE',
      description: 'An example of my English and Spanish speaking level'
    }]
  },
  bollos: {
    title: 'Industrial Automation',
    source: '../static/images/bollos/wincc.jpg',
    paragraphs: ["This project involved programming a real PLC (Siemens 313C) with STEP7. It can be controlled manually with a \n            physical interface, although it is best monitored and controlled remotely with a WinCC front end.", "Nowadays I would hope to upgrade to Siemen's TIA Portal for a smoother integration with SCADA."],
    slides: [{
      source: 'bollos/wincc.jpg',
      description: 'SCADA with Siemens WinCC'
    }, {
      source: 'bollos/grafcet.jpg',
      description: 'Grafcet diagram of the state machine'
    }]
  },
  dobot: {
    title: "Master's Internship",
    source: '../static/images/dobot/dobot0.jpg',
    paragraphs: ["Our robotics professor asked a colleague and I to produce a series of laboratory exercises for his undergraduate \n            classes. The university had just purchased a couple of Dobot Magician robotic arms and we were in charge of finding \n            out how it worked and how we could make students suffer with it.", "We came up with exercises regarding the robot's direct and inverse kinematics to execute simple routines such as \n            drawing an arc on a piece of paper. We also delved a bit into the Jacobian matrices to study the robot's velocities \n            and we ultimately asked the students to create a little process to pick up an item, manipulate and move it around in \n            a certain trajectory, to finally drop the object in a specified spot. The robot was controlled through both its \n            proprietary software as well as through Matlab scripts accessing the vendor's API.", "I'm a strong believer in learning with real-life practice and I was glad to apply the knowledge gained in my \n            robotics course to this little robot. I'm even more glad to have communicated with the Machine and I, for one, \n            welcome our new robot overlords."],
    slides: [{
      source: 'dobot/dobot0.jpg',
      description: 'Drawing an arc on a piece of paper'
    }, {
      source: 'dobot/dobot1.jpg',
      description: 'The front page of the exercise packet'
    }, {
      source: 'dobot/dobot2.jpg',
      description: 'The topics covered in the packet'
    }, {
      source: 'dobot/dobot3.jpg',
      description: 'An example of an exercise in direct kinematics'
    }, {
      source: 'dobot/dobot4.jpg',
      description: 'The robot can be controlled through Matlab or via its proprietary software'
    }, {
      source: 'dobot/dobot5.jpg',
      description: 'The designated trajectory'
    }, {
      source: 'dobot/dobot6.jpg',
      description: '...and the code to execute it'
    }]
  }
};
var experiences = {
  masters: {
    id: 'masters',
    position: "Master's Degree in Electromechanical Engineering",
    date: 'February 2019',
    organization: 'ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    bullets: ["Master's Thesis - <button>Autonomous Agricultural Robot</button>", 'Programming Arduinos (I2C, MQTT, control PID) and Raspberry Pis (Flask, MongoDB)', 'Programming Siemens PLC with STEP7 y WinCC', 'Programming with NI LabView', 'Programming robot kinematics with MATLAB', 'Simulation of electrical (QUCS) and mechanical (Festo FluidSIM, SAM) systems']
  },
  coursesETSIDI: {
    position: 'Undergraduate Courses',
    date: 'Fall 2015 - Spring 2016',
    organization: 'ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    bullets: ['Electronics, Automation, Circuit Theory, Thermodynamics, Fluids Mechanics']
  },
  coursesMC: {
    position: 'Undergraduate Courses',
    date: 'Spring 2014 - Spring 2015',
    organization: 'Montgomery College',
    location: 'Maryland, USA',
    bullets: ['Differential Equations, Physics III']
  },
  undergrad: {
    id: 'undergrad',
    position: "Bachelor's Degree in Environmental Science and Technology",
    date: 'December 2013',
    organization: 'University of Maryland, College Park',
    location: 'Maryland, USA',
    bullets: ['Graduated cum laude', 'Minored in Ecological Technology Design and Geographic Information Systems', 'Designed and constructed an anaerobic digestor for the university campus', 'Restoration of the Baltimore Harbor in collaboration with Biohabitats, Inc']
  },
  associates: {
    position: "Associates's Degree in Environmental Science and Policy",
    date: 'Spring 2011',
    organization: 'Montgomery College',
    location: 'Maryland, USA',
    bullets: ["First 2 years of my Bachelor's Degree completed at my local community college"]
  },
  montes: {
    position: "Bachelor's Degree in Forestry Engineering",
    date: 'Spring 2009',
    organization: 'Montgomery College',
    location: 'Maryland, USA',
    bullets: ['First and second year before transferring to the United States']
  },
  solar1: {
    id: 'solar1',
    position: 'Photovoltaic Sales and Technical Support',
    date: 'Junes 2013 - June 2015',
    organization: 'Solar Solution LLC',
    location: 'Washington, DC, USA',
    bullets: ['PV system design (residential and commercial) with SketchUp, SolarNexus, and Google Earth', 'Automated document generation (JavaScript, Excel, VBA) of proposals, interconnection agreements, and contracts', 'Participation in local electrical inspections', 'On-site technical support and troubleshooting']
  },
  solar2: {
    id: 'solar2',
    position: 'Photovoltaic Apprentice',
    date: 'Junes 2013',
    organization: 'Earth Sun Energy Systems',
    location: 'West Virginia, USA',
    bullets: ['Assistance in the construction of a 24-panel system']
  }
};
var skills = {
  english: {
    id: 'english',
    name: 'Native English and Spanish',
    bullets: ['Native English (and Spanish) speaking, writing, and reading', 'Schooling abroad, especially university in the USA, as well as several years of working there']
  },
  software: {
    id: 'rpa',
    name: 'Software',
    bullets: ['UiPath (RPA Developer Advanced Certification 2019)', 'VBA macros in Word and Excel, JavaScript in Adobe PDF', 'Siemens STEP7 and WinCC', 'Google SketchUp', 'LabView', 'MATLAB', 'QUCS', 'FluidSIM', 'SAM']
  },
  coding: {
    id: 'coding',
    name: 'Programming Languages',
    bullets: ['Python (especially Flask )', 'C (C++ if you count the Arduino language)', 'SQL (SQLite3, PostgreSQL)', 'Javascript (especially ReactJS)', 'HTML, CSS', 'Standard use of Linux, SSH, and git', 'Basic knowledge of x86 assembly (AT&T)']
  }
};

/***/ }),

/***/ "./components/MyFooter.css":
/*!*********************************!*\
  !*** ./components/MyFooter.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MyFooter.js":
/*!********************************!*\
  !*** ./components/MyFooter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyFooter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyFooter.css */ "./components/MyFooter.css");
/* harmony import */ var _MyFooter_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MyFooter_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\components\\MyFooter.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "foot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Graduation and briefcase icons made, respectively, by\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.flaticon.com/authors/those-icons",
    title: "Those Icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Those Icons"), "\xA0and\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.freepik.com/?__hstc=57440181.2b280e4850f4c1ec2089ed375686d7f8.1563036135837.1563541010050.1563544657064.8&__hssc=57440181.3.1563544657064&__hsfp=2910948437",
    title: "Freepik",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Freepik"), "\xA0 from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.flaticon.com/",
    title: "Flaticon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "flaticon.com"), "\xA0 licensed by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://creativecommons.org/licenses/by/3.0/",
    title: "Creative Commons BY 3.0",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "CC 3.0 BY")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hacker image taken from \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.freepik.com/?definition=57440181.2b280e4850f4c1ec2089ed375686d7f8.1563036135837.1563541010050.1563544657064.8&__hssc=57440181.3.1563544657064&__hsfp=2910948437",
    title: "Lifewire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "this Lifewire article")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Jaime Salazar Lahera \xA9 2019"));
});

/***/ }),

/***/ "./components/MyHeader.css":
/*!*********************************!*\
  !*** ./components/MyHeader.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MyHeader.js":
/*!********************************!*\
  !*** ./components/MyHeader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyHeader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyHeader.css */ "./components/MyHeader.css");
/* harmony import */ var _MyHeader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MyHeader_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_copyEmail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/copyEmail.js */ "./helpers/copyEmail.js");
var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\components\\MyHeader.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/images/me.jpg",
    className: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 16,
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Jaime Salazar Lahera"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "master",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Master "), "of", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "engineering",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " Engineering"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 8,
    className: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Copy my email to your clipboard",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "mail",
    className: "logo",
    onClick: _helpers_copyEmail_js__WEBPACK_IMPORTED_MODULE_3__["copyEmail"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Connect", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Open my profile in a new tab",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://linkedin.com/in/jaime-salazar-lahera",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "linkedin",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Checkout", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Open my repo in a new tab",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/jsalaz1989",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "github",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))))));
});

/***/ }),

/***/ "./components/MyMenu.css":
/*!*******************************!*\
  !*** ./components/MyMenu.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MyMenu.js":
/*!******************************!*\
  !*** ./components/MyMenu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/graduation-hat.svg */ "./static/graduation-hat.svg");
/* harmony import */ var _static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/briefcase.svg */ "./static/briefcase.svg");
/* harmony import */ var _MyMenu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyMenu.css */ "./components/MyMenu.css");
/* harmony import */ var _MyMenu_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MyMenu_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_copyEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/copyEmail */ "./helpers/copyEmail.js");
/* harmony import */ var _components_MyContentData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyContentData */ "./components/MyContentData.js");

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

  function openHighlight(id) {
    document.getElementById(id).click();
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menu-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "contact",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "mail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Contact")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "email",
    onClick: _helpers_copyEmail__WEBPACK_IMPORTED_MODULE_6__["copyEmail"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Copy my email to your clipboard",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Email"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Open my profile in a new tab",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://linkedin.com/in/jaime-salazar-lahera",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Open my repo in a new tab",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/jsalaz1989",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "GitHub")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "bio",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Bio")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#bio",
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "cv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "right",
    title: "Download as PDF",
    autoAdjustOverflow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "../static/cv.pdf",
    title: "CV - Jaime Salazar Lahera",
    download: "CV - Jaime Salazar Lahera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "CV")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "highlights",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "trophy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Highlights")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "master",
    onClick: function onClick() {
      return openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_7__["tiles"].robot.title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Master's Thesis"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "solar",
    onClick: function onClick() {
      return openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_7__["tiles"].solar.title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Solar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "rpa",
    onClick: function onClick() {
      return openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_7__["tiles"].rpa.title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "RPA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "english",
    onClick: function onClick() {
      return openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_7__["tiles"].english.title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "English"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "plc",
    onClick: function onClick() {
      return openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_7__["tiles"].bollos.title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "PLC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "dobot",
    onClick: function onClick() {
      return openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_7__["tiles"].dobot.title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Dobot")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "academics",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onMouseOver: function onMouseOver() {
        return setSubmenuHovered('academics');
      },
      onMouseOut: function onMouseOut() {
        return setSubmenuHovered(null);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "custom-icon ".concat(submenuHovered === 'academics' ? 'custom-icon-hover' : 'custom-icon-nohover'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Academics")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "master",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#masters",
    title: "Master's Degree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "undergrad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#undergrad",
    title: "Bachelor's Degree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "professional",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onMouseOver: function onMouseOver() {
        return setSubmenuHovered('professional');
      },
      onMouseOut: function onMouseOut() {
        return setSubmenuHovered(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "custom-icon ".concat(submenuHovered === 'professional' ? 'custom-icon-hover' : 'custom-icon-nohover'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Professional")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "solar1",
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
    href: "#solar1",
    title: "PV Sales and Tech",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "solar2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#solar2",
    title: "PV Apprentice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "skills",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Skills")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "english",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#english",
    title: "Fluent English",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "rpa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#rpa",
    title: "RPA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "coding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    href: "#coding",
    title: "Coding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }))))));
});

/***/ }),

/***/ "./helpers/copyEmail.js":
/*!******************************!*\
  !*** ./helpers/copyEmail.js ***!
  \******************************/
/*! exports provided: copyEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyEmail", function() { return copyEmail; });
function copyEmail() {
  var email = 'jsalaz1989@gmail.com'; // could also be something like email = ev.currentTarget.children[0].innerHTML

  var dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', email);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/custom-antd.css":
/*!*******************************!*\
  !*** ./pages/custom-antd.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-antd.css */ "./pages/custom-antd.css");
/* harmony import */ var _custom_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyMenu */ "./components/MyMenu.js");
/* harmony import */ var _components_MyHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyHeader */ "./components/MyHeader.js");
/* harmony import */ var _components_MyContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyContent */ "./components/MyContent.js");
/* harmony import */ var _components_MyFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyFooter */ "./components/MyFooter.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\pages\\index.js";

// import 'antd/dist/antd.css'


var Header = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Header,
    Footer = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer,
    Sider = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Sider,
    Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    hasSider: true,
    className: "big-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sider // trigger={null}
  // collapsed={false}
  , {
    defaultCollapsed: false,
    collapsedWidth: 100,
    collapsible: true,
    className: "side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./static/briefcase.svg":
/*!******************************!*\
  !*** ./static/briefcase.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M469.333 106.667H362.667V85.333c0-23.531-19.135-42.667-42.667-42.667H192c-23.531 0-42.667 19.135-42.667 42.667v21.333H42.667C19.135 106.667 0 125.802 0 149.333v277.333c0 23.531 19.135 42.667 42.667 42.667h426.667c23.531 0 42.667-19.135 42.667-42.667V149.333c-.001-23.531-19.136-42.666-42.668-42.666zM170.667 85.333C170.667 73.573 180.24 64 192 64h128c11.76 0 21.333 9.573 21.333 21.333v21.333H170.667V85.333zm320 341.334c0 11.76-9.573 21.333-21.333 21.333H42.667c-11.76 0-21.333-9.573-21.333-21.333V271.4c6.301 3.674 13.527 5.934 21.333 5.934h170.667v32a10.66 10.66 0 0 0 10.667 10.667h64a10.66 10.66 0 0 0 10.667-10.667v-32h170.667c7.806 0 15.033-2.259 21.333-5.934v155.267zm-256-128V256h42.667v42.667h-42.667zm256-64c0 11.76-9.573 21.333-21.333 21.333H298.667v-10.667A10.66 10.66 0 0 0 288 234.666h-64a10.66 10.66 0 0 0-10.667 10.667V256H42.667c-11.76 0-21.333-9.573-21.333-21.333v-85.333c0-11.76 9.573-21.333 21.333-21.333h426.667c11.76 0 21.333 9.573 21.333 21.333v85.333z"
});

var SvgBriefcase = function SvgBriefcase(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgBriefcase);

/***/ }),

/***/ "./static/graduation-hat.svg":
/*!***********************************!*\
  !*** ./static/graduation-hat.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M511.03 349.749c0-19.506-12.509-36.136-29.924-42.313V152.629l30.896-12.349L255.669 37.825 0 140.28l121.018 48.496v71.201c0 21.949 15.388 41.731 43.329 55.702 24.645 12.323 57.079 19.109 91.329 19.109s66.685-6.786 91.329-19.109c27.941-13.971 43.329-33.752 43.329-55.702V188.91l60.846-24.32v142.847c-17.415 6.176-29.924 22.807-29.924 42.313 0 17.844 10.467 33.287 25.584 40.516l-24.816 74.448 28.389 9.463 15.73-47.189 15.73 47.189 28.389-9.463-24.816-74.448c15.115-7.231 25.584-22.673 25.584-40.517zm-150.619-89.773c0 21.188-44.79 44.886-104.734 44.886-59.944 0-104.734-23.698-104.734-44.886v-59.209l104.727 41.968 104.742-41.866v59.107zm-104.727-49.472L80.445 140.28l175.239-70.224 175.691 70.224-175.691 70.224zm210.459 154.207c-8.25 0-14.962-6.712-14.962-14.962s6.712-14.962 14.962-14.962 14.962 6.712 14.962 14.962-6.712 14.962-14.962 14.962z"
});

var SvgGraduationHat = function SvgGraduationHat(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512.001 512.001"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgGraduationHat);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jaime\Documents\CV\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map