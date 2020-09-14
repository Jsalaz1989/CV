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

/***/ "./components/MyComponentData.css":
/*!****************************************!*\
  !*** ./components/MyComponentData.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyContent.css */ "./components/MyContent.css");
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MyContent_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/graduation-hat.svg */ "./public/static/graduation-hat.svg");
/* harmony import */ var _public_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/briefcase.svg */ "./public/static/briefcase.svg");
/* harmony import */ var _MyContentData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyContentData */ "./components/MyContentData.js");
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/result */ "antd/lib/result");
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\components\\MyContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






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

const Thumbnail = ({
  tile,
  slideNum
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: slide,
    1: setSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(slideNum);
  const slider = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "tile",
    onClick: () => setOpen(!open),
    id: tile.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, tile.slides[slideNum].source.includes('jpg') || tile.slides[slideNum].source.includes('jpeg') ? __jsx("img", {
    className: "tile-image",
    src: '../static/images/' + tile.slides[slideNum].source,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 27
    }
  }) : __jsx("iframe", {
    // width={100} 
    // height='auto'
    src: tile.slides[slideNum].source,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: tile.slides[slideNum].source,
    crossOrigin: "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "tile-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "tile-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, tile.slides[slideNum].description))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: tile.title,
    centered: true,
    visible: open,
    onOk: () => setOpen(true),
    onCancel: () => setOpen(false),
    zIndex: 99999,
    mask: true,
    closable: false,
    footer: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    justify: "space-around",
    align: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, tile.paragraphs.map((paragraph, key) => __jsx("p", {
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 66
    }
  }, paragraph)), tile.bullets && __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, tile.bullets.map((bullet, key) => __jsx("li", {
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 68
    }
  }, bullet)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    ref: ref => {
      // console.log(ref);
      slider.current = ref;

      try {
        slider.current.goTo(slideNum);
      } catch {
        console.log('catch');
      }
    },
    className: "carousel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, tile.slides.map((slide, key) => __jsx("div", {
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, slide.description), __jsx("div", {
    className: "embed-responsive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, slide.source.includes('jpg') || slide.source.includes('jpeg') ? __jsx("div", {
    className: "slide-image",
    style: {
      backgroundImage: `url(static/images/${slide.source})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 49
    }
  }) : __jsx("iframe", {
    width: "500",
    height: "281",
    src: slide.source,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    webkitallowfullscreen: true,
    mozallowfullscreen: true,
    title: slide.source,
    crossOrigin: "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 49
    }
  })))))))));
};

const Tile = ({
  tile
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "tile",
    onClick: () => setOpen(!open),
    id: tile.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "tile-image",
    src: tile.source,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "tile-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "tile-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, tile.title))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: tile.title,
    centered: true,
    visible: open,
    onOk: () => setOpen(true),
    onCancel: () => setOpen(false),
    zIndex: 99999,
    mask: true,
    closable: false,
    footer: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    justify: "space-around",
    align: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, tile.paragraphs.map((paragraph, key) => __jsx("p", {
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 66
    }
  }, paragraph)), tile.bullets && __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, tile.bullets.map((bullet, key) => __jsx("li", {
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 68
    }
  }, bullet)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }, tile.slides.map((slide, key) => __jsx("div", {
    key: key,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  }, slide.source.includes('jpg') || slide.source.includes('jpeg') ? __jsx("div", {
    className: "slide-image",
    style: {
      backgroundImage: `url(static/images/${slide.source})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 43
    }
  }) : __jsx("iframe", {
    // width={100} 
    height: 400,
    src: slide.source,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: slide.source,
    crossOrigin: "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 43
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 37
    }
  }, slide.description))))))));
};

const Experience = ({
  experience
}) => __jsx("div", {
  id: experience.id,
  className: "exp-skill",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 5
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  type: "flex",
  justify: "space-between",
  align: "middle",
  className: "butt",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "position",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188,
    columnNumber: 13
  }
}, experience.position), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 13
  }
}, experience.date)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 9
  }
}, experience.organization, ", ", __jsx("span", {
  className: "location",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 40
  }
}, experience.location)), experience.sections.map(section => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 17
  }
}, __jsx("span", {
  className: "descript",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 21
  }
}, section.description)), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199,
    columnNumber: 17
  }
}, section.bullets.map((bullet, key) => __jsx("li", {
  key: key,
  dangerouslySetInnerHTML: {
    __html: bullet
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200,
    columnNumber: 59
  }
}))))));

const Skill = ({
  skill
}) => __jsx("div", {
  id: skill.id,
  className: "exp-skill",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208,
    columnNumber: 5
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  type: "flex",
  justify: "start",
  align: "middle",
  className: "position",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209,
    columnNumber: 9
  }
}, skill.name), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 9
  }
}, skill.bullets.map((detail, key) => __jsx("li", {
  key: key,
  dangerouslySetInnerHTML: {
    __html: detail
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 213,
    columnNumber: 49
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "content-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 219,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220,
    columnNumber: 9
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
  className: "divide",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 13
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "user",
  className: "divider-icon",
  id: "bio",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 41
  }
}), "Bio"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222,
    columnNumber: 13
  }
}, "Robot creator at EDP Solar. Graduate in MS Electromechanical Engineering at UPM (Madrid, Spain) with a diverse background."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 13
  }
}, "Interested in automation and programming (especially RPA), robotics, solar photovoltaics, the environment, and the Oxford comma."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224,
    columnNumber: 13
  }
}, "Continuous learner."), __jsx("p", {
  className: "cv-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225,
    columnNumber: 13
  }
}, "Feel free to ", __jsx("a", {
  href: "static/CV - Jaime Salazar Lahera.pdf",
  title: "CV - Jaime Salazar Lahera",
  download: "CV - Jaime Salazar Lahera",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 30
  }
}, "download my CV"))), __jsx("div", {
  className: "entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 9
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 13
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "trophy",
  className: "divider-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 230,
    columnNumber: 22
  }
}), "Hightlights"), __jsx("div", {
  className: "tile-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240,
    columnNumber: 13
  }
}, "Robotic Process Automation (RPA)"), __jsx("div", {
  className: "tiles-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 241,
    columnNumber: 13
  }
}, __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].rpa,
  slideNum: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].rpa,
  slideNum: 1,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 243,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].rpa,
  slideNum: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].rpa,
  slideNum: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 245,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "tile-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 13
  }
}, "Master's Thesis"), __jsx("div", {
  className: "tiles-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248,
    columnNumber: 13
  }
}, __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].robot,
  slideNum: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].robot,
  slideNum: 5,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].robot,
  slideNum: 6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].robot,
  slideNum: 7,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "tile-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 254,
    columnNumber: 13
  }
}, "Other experiences"), __jsx("div", {
  className: "tiles-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 255,
    columnNumber: 13
  }
}, __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].solar,
  slideNum: 2,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 256,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].english,
  slideNum: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 257,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].bollos,
  slideNum: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258,
    columnNumber: 17
  }
}), __jsx(Thumbnail, {
  tile: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["tiles"].dobot,
  slideNum: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 17
  }
}))), __jsx("div", {
  className: "entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 268,
    columnNumber: 9
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 13
  }
}, __jsx(_public_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "divider-icon-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 22
  }
}), "Professional"), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].rpa,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270,
    columnNumber: 13
  }
}), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].solar0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 271,
    columnNumber: 13
  }
}), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].solar1,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 272,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274,
    columnNumber: 9
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 13
  }
}, __jsx(_public_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: "divider-icon-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 22
  }
}), "Academics"), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].masters,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276,
    columnNumber: 13
  }
}), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].coursesETSIDI,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 13
  }
}), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].coursesMC,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 278,
    columnNumber: 13
  }
}), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].undergrad,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 279,
    columnNumber: 13
  }
}), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].associates,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 13
  }
}), __jsx(Experience, {
  experience: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["experiences"].montes,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 281,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283,
    columnNumber: 9
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284,
    columnNumber: 13
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "star",
  className: "divider-icon-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284,
    columnNumber: 22
  }
}), "Skills"), __jsx(Skill, {
  skill: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["skills"].english,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "skill-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 286,
    columnNumber: 13
  }
}, __jsx(Skill, {
  skill: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["skills"].software,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 287,
    columnNumber: 17
  }
}), __jsx(Skill, {
  skill: _MyContentData__WEBPACK_IMPORTED_MODULE_5__["skills"].coding,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 288,
    columnNumber: 17
  }
})))));

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
/* harmony import */ var _MyComponentData_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyComponentData.css */ "./components/MyComponentData.css");
/* harmony import */ var _MyComponentData_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MyComponentData_css__WEBPACK_IMPORTED_MODULE_0__);

const tiles = {
  robot: {
    title: 'Autonomous Agricultural Robot',
    source: '../static/images/robot/robot0.jpeg',
    paragraphs: [`The robot is controlled via the website (Flask), storing and reporting data from the SQL database. 
            The server or user communicates with the robot through MQTT and can execute manual and autonomous operations from the webapp.
            In autonomous mode, it compares its GPS location using a Raspberry Pi module capable of RTK to navigate by itself to an objective point 
            designated on the map, avoiding obstacles in its way.`, `It is made up of:`],
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
    title: 'Backoffice Technician',
    source: '../static/images/solar/coolAndCasual.jpg',
    paragraphs: [`I began as a solar sales representative, climbing up on rooftops for measurements and designing residential 
            systems to propose to our customers. It was a great forray into the world of technology, consulting, and construction.`, `Over time I gained an interest in the technical side of the office as well as our products. I decided I wanted to 
            understand them better, which led me to embark on my Master's education in the following years. This implied taking 
            a few evening classes for general engineering courses at a local community college while working (!) so I could start building 
            a solid technical base. When I returned to Madrid I continued this preparatory stage at the 'Universidad Poltécnica de Madrid'
            to ensure I could be successful in getting my Master's degree.`, `While at this position, in the field, I would help diagnose technical issues in our installations, such as a faulty 
            inverter. At the office, I learned about our day-to-day tasks and business flows, and I imagined these could be 
            optimized. So I began playing around with Excel macros (VBA) and simple JavaScript in PDFs to automatically generate 
            proposals, electric utility interconnection applications, and anything I could get my hands on. Back then I wasn't 
            aware of the booming RPA industry so nowadays I hope to apply Python and JS scripts to my tasks, as well as a proper 
            RPA suite like UiPath or BluePrism.`],
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
    paragraphs: [`Apart from general Bash, PowerShell, Python, and JS scripting, I can deploy UiPath robots to perform to many tasks.`, `This RPA suite provides a graphical programming environment extensible with VB.NET scripting to automate processes involving 
            text, images, forms, etc. I am always impressed with its AI capabilities when extracting information from 
            scanned documents, websites, and even virtual machines.`, `UiPath offers an Advanced Certification consisting of a timed theoretical and practical exam, which I hold since March 2019.`],
    slides: [{
      source: 'https://www.youtube.com/embed/Z-ZkLzqqOyk',
      description: 'Example of Dispatcher and Perfomer both using the ReFramework to generate a yearly report'
    }, {
      source: 'rpa/diploma0.jpg',
      description: 'Advanced Certification Degree'
    }, {
      source: 'https://www.youtube.com/embed/oqmOZMgzT6w',
      description: 'Extracting client information to generate a hash code and update the database'
    }, {
      source: 'https://www.youtube.com/embed/WkRhHXbwMwk',
      description: 'Simple testing steps to check a workflow from one of the Academy assignments'
    }, {
      source: 'rpa/diploma1.jpg',
      description: 'UiPath Fundamentals'
    }, {
      source: 'rpa/diploma2.jpg',
      description: 'Proficiency with their admin dashboard (UiPath Orchestrator)'
    }, {
      source: 'rpa/diploma3.jpg',
      description: 'Understanding their professional project framework (REFramework) and flows'
    }]
  },
  english: {
    title: 'Fluent English',
    source: '../static/images/english.png',
    paragraphs: [`I learned English at a young age in bilingual schools (in Spanish-speaking countries) as well as regular schools 
            (in English-speaking countries). Later on I finished my undergraduate degree at the University of Maryland, 
            College Park, near Washington, DC.`, `I had worked at different jobs for several years throughout my university studies and immediately after graduation I was
            offered a position in Washington, DC.`, `I can speak, read, and write proficiently in English (and, of course, also in Spanish) but I will let the video do the 
            talking (pun intended)`],
    slides: [{
      source: 'https://www.youtube.com/embed/aH_a2Mnv2xY',
      description: 'An example of my English and Spanish speaking level'
    }]
  },
  bollos: {
    title: 'Industrial Automation',
    source: '../static/images/bollos/wincc.jpg',
    paragraphs: [`This project involved programming a real PLC (Siemens 313C) with STEP7. It can be controlled manually with a 
            physical interface, although it is best monitored and controlled remotely with a WinCC front end.`, `Nowadays I would hope to upgrade to Siemen's TIA Portal for a smoother integration with SCADA.`],
    slides: [{
      source: 'bollos/wincc.jpg',
      description: 'SCADA with Siemens WinCC'
    }, {
      source: 'bollos/grafcet.jpg',
      description: 'Grafcet diagram of the state machine'
    }]
  },
  dobot: {
    title: 'Master´s Internship',
    source: '../static/images/dobot/dobot0.jpg',
    paragraphs: [`Our robotics professor asked a colleague and I to produce a series of laboratory exercises for his undergraduate 
            classes. The university had just purchased a couple of Dobot Magician robotic arms and we were in charge of finding 
            out how it worked and how we could make students suffer with it.`, `We came up with exercises regarding the robot's direct and inverse kinematics to execute simple routines such as 
            drawing an arc on a piece of paper. We also delved a bit into the Jacobian matrices to study the robot's velocities 
            and we ultimately asked the students to create a little process to pick up an item, manipulate and move it around in 
            a certain trajectory, to finally drop the object in a specified spot. The robot was controlled through both its 
            proprietary software as well as through Matlab scripts accessing the vendor's API.`, `I'm a strong believer in learning with real-life practice and I was glad to apply the knowledge gained in my 
            robotics course to this little robot. I'm even more glad to have communicated with the Machine and I, for one, 
            welcome our new robot overlords.`],
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
const experiences = {
  masters: {
    id: 'masters',
    position: "Master's Degree in Electromechanical Engineering",
    date: 'February 2019',
    organization: 'ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    sections: [{
      bullets: [`Master's Thesis - <span class='template-link' onclick="document.getElementById('${tiles.robot.title}').click()">Autonomous Agricultural Robot</span>`, 'Programming Arduinos (I2C, MQTT, control PID) and Raspberry Pis (Flask, MongoDB)', `Programming Siemens PLC with <span class='template-link' onclick="document.getElementById('${tiles.bollos.title}').click()">STEP7 and WinCC</span>`, 'Programming with NI LabView', `Programming <span class='template-link' onclick="document.getElementById('${tiles.dobot.title}').click()">robot kinematics</span> with MATLAB`, 'Simulation of electrical (QUCS) and mechanical (Festo FluidSIM, SAM) systems']
    }]
  },
  coursesETSIDI: {
    position: 'Undergraduate Courses',
    date: 'Fall 2015 - Spring 2016',
    organization: 'ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    sections: [{
      bullets: ['Electronics, Automation, Circuit Theory, Thermodynamics, Fluids Mechanics']
    }]
  },
  coursesMC: {
    position: 'Undergraduate Courses',
    date: 'Spring 2014 - Spring 2015',
    organization: 'Montgomery College',
    location: 'Maryland, USA',
    sections: [{
      bullets: ['Differential Equations, Physics III']
    }]
  },
  undergrad: {
    id: 'undergrad',
    position: "Bachelor's Degree in Environmental Science and Technology",
    date: 'December 2013',
    organization: 'University of Maryland, College Park',
    location: 'Maryland, USA',
    sections: [{
      bullets: ['Graduated cum laude', 'Minored in Ecological Technology Design and Geographic Information Systems', 'Designed and constructed an anaerobic digestor for the university campus', 'Restoration of the Baltimore Harbor in collaboration with Biohabitats, Inc']
    }]
  },
  associates: {
    position: "Associates's Degree in Environmental Science and Policy",
    date: 'Spring 2011',
    organization: 'Montgomery College',
    location: 'Maryland, USA',
    sections: [{
      bullets: ["First 2 years of my Bachelor's Degree completed at my local community college"]
    }]
  },
  montes: {
    position: "Bachelor's Degree in Forestry Engineering",
    date: 'Spring 2009',
    organization: 'ETS Ingeniería de Montes, Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    sections: [{
      bullets: ['First and second year before transferring to the United States']
    }]
  },
  rpa: {
    id: 'rpa',
    position: 'Automation and BO Technician',
    date: 'November 2019 - Present',
    organization: 'EDP Spain (Solar Division)',
    location: 'Madrid, Spain',
    sections: [{
      description: 'Proposal design and drafting for residential and small commercial PV installations',
      bullets: ['Client energy profiling via hourly consumption curves or customer electric bills', 'Integration of energy production data from PVGIS (European Commission platform) into our simulations', 'Preliminary PV module layouts with SolarEdge Designer', 'System sizing based on client energy consumption, available space, solar irradiance, etc.', 'PV performance simulation: selfconsumption percentage, energy sellback, losses and degradation, electricity tariff, CAPEX, etc.']
    }, {
      description: 'Automation of business processes with UiPath and Python',
      bullets: [//`<span class='template-link' onclick="document.getElementById('${tiles.solar.title}').click()">PV system design</span> (residential and commercial) with SketchUp, SolarNexus, and Google Earth`,
      'Automated document batch generation: Excel, PDF', 'Web scraping with selenium, scrapy, beautiful soup, and requests', 'Google Maps interactions', 'Online form filling and file downloads with selenium', 'Downloading files from FTP server', 'Xlsx/xls/csv manipulations and conversions', 'Extraction and decryption of tarballs', 'Recurring emails (including attachments)', 'SAP desktop interactions with pyautogui']
    }]
  },
  solar0: {
    id: 'solar0',
    position: 'Backoffice Technician',
    date: 'Junes 2013 - June 2015',
    organization: 'Solar Solution LLC',
    location: 'Washington, DC, USA',
    sections: [{
      bullets: ['Automated document generation (JavaScript, Excel VBA) of proposals, interconnection agreements, and contracts', 'Personal pipeline management (Excel)', 'Rooftop measurements (including obstacles) in order to 3D model', `<span class='template-link' onclick="document.getElementById('${tiles.solar.title}').click()">PV system design</span> (residential and commercial) with SketchUp and Google Earth`, 'Module string sizing to properly match inverter size with SMA Sunny Design', 'Participation in local electrical inspections', 'On-site and remote technical support and troubleshooting']
    }]
  },
  solar1: {
    id: 'solar1',
    position: 'Photovoltaic Apprentice',
    date: 'Junes 2013',
    organization: 'Earth Sun Energy Systems',
    location: 'West Virginia, USA',
    sections: [{
      bullets: ['Assistance in the construction of a 24-panel system']
    }]
  }
};
const skills = {
  english: {
    id: 'english',
    name: 'Native English and Spanish',
    bullets: [`<span class='template-link' onclick="document.getElementById('${tiles.english.title}').click()">Native English</span> (and Spanish) speaking, reaading, and writing`, 'Schooling abroad, especially university in the USA, as well as several years of working there']
  },
  software: {
    id: 'software',
    name: 'Software',
    bullets: [`<span class='template-link' onclick="document.getElementById('${tiles.rpa.title}').click()">UiPath</span> RPA Developer Advanced Certification 2019`, 'MS Office (esp. VBA macros)', 'Adobe PDF (esp. JavaScript)', 'Siemens STEP7 and WinCC', 'LabView', 'MATLAB', 'QUCS', 'FluidSIM', 'SAM']
  },
  coding: {
    id: 'coding',
    name: 'Programming Languages',
    bullets: [`Python: RPA and <span class="template-link" onclick="document.getElementById('${tiles.robot.title}').click()">mechatronics</span>`, 'C', 'SQL (SQLite3, PostgreSQL)', 'Javascript (especially ReactJS)', 'HTML, CSS', 'Standard use of Linux, SSH, and git', 'Basic knowledge of x86 assembly (AT&T)']
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "foot",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, "Graduation and briefcase icons made, respectively, by\xA0", __jsx("a", {
  href: "https://www.flaticon.com/authors/those-icons",
  title: "Those Icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, "Those Icons"), "\xA0and\xA0", __jsx("a", {
  href: "https://www.freepik.com/?__hstc=57440181.2b280e4850f4c1ec2089ed375686d7f8.1563036135837.1563541010050.1563544657064.8&__hssc=57440181.3.1563544657064&__hsfp=2910948437",
  title: "Freepik",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, "Freepik"), "\xA0 from ", __jsx("a", {
  href: "https://www.flaticon.com/",
  title: "Flaticon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 18
  }
}, "flaticon.com"), "\xA0 licensed by ", __jsx("a", {
  href: "http://creativecommons.org/licenses/by/3.0/",
  title: "Creative Commons BY 3.0",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 25
  }
}, "CC 3.0 BY")), __jsx("div", {
  className: "my-copyright",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, "Jaime Salazar Lahera \xA9 ", new Date().getFullYear())));

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  type: "flex",
  justify: "space-between",
  align: "middle",
  className: "header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("img", {
  src: "../static/images/me.jpg",
  className: "avatar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 16,
  className: "heading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 14
  }
}, "Jaime Salazar Lahera"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 14
  }
}, "RPA Developer at EDP Solar")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 8,
  className: "contact",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Email", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
  placement: "right",
  title: "Copy my email to your clipboard",
  autoAdjustOverflow: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 17
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "mail",
  className: "logo",
  onClick: _helpers_copyEmail_js__WEBPACK_IMPORTED_MODULE_3__["copyEmail"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 21
  }
}))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, "Connect", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
  placement: "right",
  title: "Open my profile in a new tab",
  autoAdjustOverflow: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "https://linkedin.com/in/jaime-salazar-lahera",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 21
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "linkedin",
  className: "logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 92
  }
})))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
}, "Checkout", __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
  placement: "right",
  title: "Open my repo in a new tab",
  autoAdjustOverflow: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 17
  }
}, __jsx("a", {
  href: "https://github.com/jsalaz1989",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 21
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  type: "github",
  className: "logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 77
  }
})))))));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/graduation-hat.svg */ "./public/static/graduation-hat.svg");
/* harmony import */ var _public_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/briefcase.svg */ "./public/static/briefcase.svg");
/* harmony import */ var _MyMenu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyMenu.css */ "./components/MyMenu.css");
/* harmony import */ var _MyMenu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MyMenu_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_copyEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/copyEmail */ "./helpers/copyEmail.js");
/* harmony import */ var _components_MyContentData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyContentData */ "./components/MyContentData.js");
var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\components\\MyMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
const {
  Link
} = antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"];



/* harmony default export */ __webpack_exports__["default"] = (() => {
  const handleClick = e => {
    console.log('click ', e);
  };

  const {
    0: submenuHovered,
    1: setSubmenuHovered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  function openHighlight(id) {
    document.getElementById(id).click();
  }

  function collapseSide(evt) {
    if (evt.target.id == 'menu-border') {
      console.log('Click on menu-border');
      document.getElementsByClassName('ant-layout-sider-trigger')[0].click();
    }
  }

  function highlightTrigger(evt) {
    if (evt.target.id == 'menu-border') {
      console.log('mouseIn over menu-border');
      evt.target.style.borderColor = 'rgba(255,255,255,1)';
      evt.target.style.cursor = 'pointer';
    }
  }

  function unHighlightTrigger(evt) {
    if (evt.target.id == 'menu-border') {
      console.log('mouseOut over menu-border');
      evt.target.style.borderColor = 'rgba(255,255,255,0.15)';
      evt.target.style.cursor = 'default';
    }
  }

  return __jsx("div", {
    className: "menu-border",
    id: "menu-border",
    onClick: collapseSide,
    onMouseEnter: highlightTrigger,
    onMouseLeave: unHighlightTrigger,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    onClick: handleClick // style={{ width: 256 }}
    // defaultSelectedKeys={['1']}
    ,
    defaultSelectedKeys: [],
    defaultOpenKeys: ['highlights'],
    mode: "inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }
  }, __jsx(SubMenu, {
    key: "contact",
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "mail",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 35
      }
    }, "Contact")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "c-email",
    onClick: _helpers_copyEmail__WEBPACK_IMPORTED_MODULE_5__["copyEmail"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "right",
    title: "Copy my email to your clipboard",
    autoAdjustOverflow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Email"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "c-linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "right",
    title: "Open my profile in a new tab",
    autoAdjustOverflow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://linkedin.com/in/jaime-salazar-lahera",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "LinkedIn"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "c-github",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "right",
    title: "Open my repo in a new tab",
    autoAdjustOverflow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://github.com/jsalaz1989",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "GitHub")))), __jsx(SubMenu, {
    key: "bio",
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "user",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 35
      }
    }, "Bio")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "b-about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#bio",
    title: "About",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 8
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "b-cv",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "right",
    title: "Download as PDF",
    autoAdjustOverflow: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "static/CV - Jaime Salazar Lahera.pdf",
    title: "CV - Jaime Salazar Lahera",
    download: "CV - Jaime Salazar Lahera",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 8
    }
  }, "CV")))), __jsx(SubMenu, {
    key: "highlights",
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "trophy",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 37
      }
    }, "Highlights")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "h-rpa",
    onClick: () => openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].rpa.title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 6
    }
  }, "RPA"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "h-master",
    onClick: () => openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].robot.title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 6
    }
  }, "Master's Thesis"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "h-solar",
    onClick: () => openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].solar.title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 6
    }
  }, "Solar"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "h-english",
    onClick: () => openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].english.title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 6
    }
  }, "English"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "h-plc",
    onClick: () => openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].bollos.title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 6
    }
  }, "PLC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "h-dobot",
    onClick: () => openHighlight(_components_MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].dobot.title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 6
    }
  }, "Dobot")), __jsx(SubMenu, {
    key: "professional",
    title: __jsx("div", {
      onMouseOver: () => setSubmenuHovered('professional'),
      onMouseOut: () => setSubmenuHovered(false),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }
    }, __jsx(_public_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `custom-icon ${submenuHovered === 'professional' ? 'custom-icon-hover' : 'custom-icon-nohover'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 8
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 8
      }
    }, "Professional")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "p-solar0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#solar0",
    title: "RPA Developer @ EDP Solar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 8
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "p-solar1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#solar1",
    title: "PV Sales and Tech",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 8
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "p-solar2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#solar2",
    title: "PV Apprentice",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 8
    }
  })))), __jsx(SubMenu, {
    key: "academics",
    title: __jsx("div", {
      onMouseOver: () => setSubmenuHovered('academics'),
      onMouseOut: () => setSubmenuHovered(null),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 7
      }
    }, __jsx(_public_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: `custom-icon ${submenuHovered === 'academics' ? 'custom-icon-hover' : 'custom-icon-nohover'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 8
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 8
      }
    }, "Academics")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "a-master",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#masters",
    title: "Master's Degree",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 8
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "a-undergrad",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#undergrad",
    title: "Bachelor's Degree",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 8
    }
  })))), __jsx(SubMenu, {
    key: "skills",
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "star",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 15
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 35
      }
    }, "Skills")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "s-english",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#english",
    title: "Fluent English",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 8
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "s-rpa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#rpa",
    title: "RPA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 8
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "s-coding",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    offsetTop: 30,
    affix: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx(Link, {
    href: "#coding",
    title: "Coding",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 8
    }
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
  const email = 'jsalaz1989@gmail.com'; // could also be something like email = ev.currentTarget.children[0].innerHTML

  let dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', email);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import 'antd/dist/antd.css'


const {
  Header,
  Footer,
  Sider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];





/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    hasSider: true,
    className: "big-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(Sider // trigger={null}
  // collapsed={false}
  , {
    defaultCollapsed: false,
    collapsedWidth: 100,
    collapsible: true,
    className: "side",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_components_MyMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(Header, {
    className: "head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(_components_MyHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 42
    }
  })), __jsx(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(_components_MyContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 26
    }
  })), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_components_MyFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }))));
});

/***/ }),

/***/ "./public/static/briefcase.svg":
/*!*************************************!*\
  !*** ./public/static/briefcase.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M469.333 106.667H362.667V85.333c0-23.531-19.135-42.667-42.667-42.667H192c-23.531 0-42.667 19.135-42.667 42.667v21.333H42.667C19.135 106.667 0 125.802 0 149.333v277.333c0 23.531 19.135 42.667 42.667 42.667h426.667c23.531 0 42.667-19.135 42.667-42.667V149.333c-.001-23.531-19.136-42.666-42.668-42.666zM170.667 85.333C170.667 73.573 180.24 64 192 64h128c11.76 0 21.333 9.573 21.333 21.333v21.333H170.667V85.333zm320 341.334c0 11.76-9.573 21.333-21.333 21.333H42.667c-11.76 0-21.333-9.573-21.333-21.333V271.4c6.301 3.674 13.527 5.934 21.333 5.934h170.667v32a10.66 10.66 0 0010.667 10.667h64a10.66 10.66 0 0010.667-10.667v-32h170.667c7.806 0 15.033-2.259 21.333-5.934v155.267zm-256-128V256h42.667v42.667h-42.667zm256-64c0 11.76-9.573 21.333-21.333 21.333H298.667v-10.667A10.66 10.66 0 00288 234.666h-64a10.66 10.66 0 00-10.667 10.667V256H42.667c-11.76 0-21.333-9.573-21.333-21.333v-85.333c0-11.76 9.573-21.333 21.333-21.333h426.667c11.76 0 21.333 9.573 21.333 21.333v85.333z"
});

var SvgBriefcase = function SvgBriefcase(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgBriefcase);

/***/ }),

/***/ "./public/static/graduation-hat.svg":
/*!******************************************!*\
  !*** ./public/static/graduation-hat.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M511.03 349.749c0-19.506-12.509-36.136-29.924-42.313V152.629l30.896-12.349L255.669 37.825 0 140.28l121.018 48.496v71.201c0 21.949 15.388 41.731 43.329 55.702 24.645 12.323 57.079 19.109 91.329 19.109s66.685-6.786 91.329-19.109c27.941-13.971 43.329-33.752 43.329-55.702V188.91l60.846-24.32v142.847c-17.415 6.176-29.924 22.807-29.924 42.313 0 17.844 10.467 33.287 25.584 40.516l-24.816 74.448 28.389 9.463 15.73-47.189 15.73 47.189 28.389-9.463-24.816-74.448c15.115-7.231 25.584-22.673 25.584-40.517zm-150.619-89.773c0 21.188-44.79 44.886-104.734 44.886-59.944 0-104.734-23.698-104.734-44.886v-59.209l104.727 41.968 104.742-41.866v59.107zm-104.727-49.472L80.445 140.28l175.239-70.224 175.691 70.224-175.691 70.224zm210.459 154.207c-8.25 0-14.962-6.712-14.962-14.962s6.712-14.962 14.962-14.962 14.962 6.712 14.962 14.962-6.712 14.962-14.962 14.962z"
});

var SvgGraduationHat = function SvgGraduationHat(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
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

/***/ "antd/lib/result":
/*!**********************************!*\
  !*** external "antd/lib/result" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/result");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUNvbnRlbnREYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2NvcHlFbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL2JyaWVmY2FzZS5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0YXRpYy9ncmFkdWF0aW9uLWhhdC5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL3Jlc3VsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiZW5hYmxlVGlsZU92ZXJmbG93IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwiY2xpcGF0aCIsImRpc2FibGVUaWxlT3ZlcmZsb3ciLCJsZWZ0IiwiVGh1bWJuYWlsIiwidGlsZSIsInNsaWRlTnVtIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsInNsaWRlIiwic2V0U2xpZGUiLCJzbGlkZXIiLCJ1c2VSZWYiLCJ0aXRsZSIsInNsaWRlcyIsInNvdXJjZSIsImluY2x1ZGVzIiwiZGVzY3JpcHRpb24iLCJwYXJhZ3JhcGhzIiwibWFwIiwicGFyYWdyYXBoIiwia2V5IiwiYnVsbGV0cyIsImJ1bGxldCIsInJlZiIsImN1cnJlbnQiLCJnb1RvIiwiYmFja2dyb3VuZEltYWdlIiwiVGlsZSIsIkV4cGVyaWVuY2UiLCJleHBlcmllbmNlIiwiaWQiLCJwb3NpdGlvbiIsImRhdGUiLCJvcmdhbml6YXRpb24iLCJsb2NhdGlvbiIsInNlY3Rpb25zIiwic2VjdGlvbiIsIl9faHRtbCIsIlNraWxsIiwic2tpbGwiLCJuYW1lIiwiZGV0YWlsIiwidGlsZXMiLCJycGEiLCJyb2JvdCIsInNvbGFyIiwiZW5nbGlzaCIsImJvbGxvcyIsImRvYm90IiwiZXhwZXJpZW5jZXMiLCJzb2xhcjAiLCJzb2xhcjEiLCJtYXN0ZXJzIiwiY291cnNlc0VUU0lESSIsImNvdXJzZXNNQyIsInVuZGVyZ3JhZCIsImFzc29jaWF0ZXMiLCJtb250ZXMiLCJza2lsbHMiLCJzb2Z0d2FyZSIsImNvZGluZyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImNvcHlFbWFpbCIsIlN1Yk1lbnUiLCJNZW51IiwiTGluayIsIkFuY2hvciIsImhhbmRsZUNsaWNrIiwiZSIsInN1Ym1lbnVIb3ZlcmVkIiwic2V0U3VibWVudUhvdmVyZWQiLCJvcGVuSGlnaGxpZ2h0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsImNvbGxhcHNlU2lkZSIsImV2dCIsInRhcmdldCIsImhpZ2hsaWdodFRyaWdnZXIiLCJib3JkZXJDb2xvciIsImN1cnNvciIsInVuSGlnaGxpZ2h0VHJpZ2dlciIsImVtYWlsIiwiZHVtbXkiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2V0QXR0cmlidXRlIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsIkhlYWRlciIsIkZvb3RlciIsIlNpZGVyIiwiQ29udGVudCIsIkxheW91dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF6QixDQURKLEVBRUksTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBVCxDQUZKLEVBR0ksTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUixDQUhKLENBWEosQ0FESjtBQW1CSCxDQXBCRCxFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUEscUJBQXFCLGdEQUFnRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWUsR0FBRyx3Q0FBd0M7O0FBRWpTOztBQUUxQix3QkFBd0IsNENBQUs7QUFDN0I7QUFDQSxDQUFDOztBQUVEO0FBQ0Esc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0EsR0FBRztBQUNIOztBQUVlLDJFQUFZLEU7Ozs7Ozs7Ozs7OztBQ2QzQjtBQUFBO0FBQUE7QUFBQSxxQkFBcUIsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFalM7O0FBRTFCLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7O0FBRWUsK0VBQWdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZC9CLGlDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCAnLi9NeUNvbnRlbnQuY3NzJ1xyXG5cclxuaW1wb3J0IHsgRGl2aWRlciwgQnV0dG9uLCBSb3csIENvbCwgSWNvbiwgTW9kYWwsIENhcm91c2VsIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCBHcmFkdWF0aW9uSWNvbiBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2dyYWR1YXRpb24taGF0LnN2ZydcclxuaW1wb3J0IEJyaWVmY2FzZUljb24gZnJvbSAnLi4vcHVibGljL3N0YXRpYy9icmllZmNhc2Uuc3ZnJ1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgdGlsZXMsIGV4cGVyaWVuY2VzLCBza2lsbHMgfSBmcm9tICcuL015Q29udGVudERhdGEnXHJcbmltcG9ydCB7IEV4Y2VwdGlvbk1hcCB9IGZyb20gJ2FudGQvbGliL3Jlc3VsdCdcclxuXHJcbi8vIGZ1bmN0aW9uIGVuYWJsZVRpbGVPdmVyZmxvdygpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdlbmFibGVUaWxlT3ZlcmZsb3coKScpXHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWxlcy1jb250YWluZXInKVswXS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBkaXNhYmxlVGlsZU92ZXJmbG93KCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2Rpc2FibGVUaWxlT3ZlcmZsb3coKScpXHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWxlcy1jb250YWluZXInKVswXS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSdcclxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbGVzLWNvbnRhaW5lcicpWzBdLnN0eWxlLm92ZXJmbG93WCA9ICdzY3JvbGwnXHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVRpbGVPdmVyZmxvdygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlbmFibGVUaWxlT3ZlcmZsb3coKScpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWxlcy1jb250YWluZXInKVswXS5zdHlsZS5jbGlwYXRoID0gJzUlJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlVGlsZU92ZXJmbG93KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2Rpc2FibGVUaWxlT3ZlcmZsb3coKScpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWxlcy1jb250YWluZXInKVswXS5zdHlsZS5sZWZ0ID0gMFxyXG59XHJcblxyXG5jb25zdCBUaHVtYm5haWwgPSAoeyB0aWxlLCBzbGlkZU51bSB9KSA9PiB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbc2xpZGUsIHNldFNsaWRlXSA9IHVzZVN0YXRlKHNsaWRlTnVtKTtcclxuICAgIGNvbnN0IHNsaWRlciA9IHVzZVJlZigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGlsZScgXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gXHJcbiAgICAgICAgICAgICAgICBpZD17dGlsZS50aXRsZX0gXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh0aWxlLnNsaWRlc1tzbGlkZU51bV0uc291cmNlLmluY2x1ZGVzKCdqcGcnKSB8fCB0aWxlLnNsaWRlc1tzbGlkZU51bV0uc291cmNlLmluY2x1ZGVzKCdqcGVnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGltZyBjbGFzc05hbWU9J3RpbGUtaW1hZ2UnIHNyYz17Jy4uL3N0YXRpYy9pbWFnZXMvJyt0aWxlLnNsaWRlc1tzbGlkZU51bV0uc291cmNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxpZnJhbWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezEwMH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PSdhdXRvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGlsZS5zbGlkZXNbc2xpZGVOdW1dLnNvdXJjZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aWxlLnNsaWRlc1tzbGlkZU51bV0uc291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPSd0cnVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aWxlLWRldGFpbHMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aWxlLXRpdGxlJz57dGlsZS5zbGlkZXNbc2xpZGVOdW1dLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aWxlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgIHZpc2libGU9e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbk9rPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgekluZGV4PXs5OTk5OX1cclxuICAgICAgICAgICAgICAgIG1hc2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCIgYWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aWxlLnBhcmFncmFwaHMubWFwKChwYXJhZ3JhcGgsIGtleSkgPT4gPHAga2V5PXtrZXl9PntwYXJhZ3JhcGh9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aWxlLmJ1bGxldHMgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbGUuYnVsbGV0cy5tYXAoKGJ1bGxldCwga2V5KSA9PiA8bGkga2V5PXtrZXl9PntidWxsZXR9PC9saT4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmN1cnJlbnQgPSByZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgc2xpZGVyLmN1cnJlbnQuZ29UbyhzbGlkZU51bSk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCB7IGNvbnNvbGUubG9nKCdjYXRjaCcpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Nhcm91c2VsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGlsZS5zbGlkZXMubWFwKChzbGlkZSwga2V5KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3NsaWRlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VtYmVkLXJlc3BvbnNpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhzbGlkZS5zb3VyY2UuaW5jbHVkZXMoJ2pwZycpIHx8IHNsaWRlLnNvdXJjZS5pbmNsdWRlcygnanBlZycpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGUtaW1hZ2UnIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChzdGF0aWMvaW1hZ2VzLyR7c2xpZGUuc291cmNlfSlgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAgIDxpZnJhbWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwMFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjgxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2xpZGUuc291cmNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuIHdlYmtpdGFsbG93ZnVsbHNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzbGlkZS5zb3VyY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj0ndHJ1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBUaWxlID0gKHsgdGlsZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aWxlJyBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gaWQ9e3RpbGUudGl0bGV9ID5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0aWxlLWltYWdlJyBzcmM9e3RpbGUuc291cmNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbGUtZGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbGUtdGl0bGUnPnt0aWxlLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aWxlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgIHZpc2libGU9e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbk9rPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgekluZGV4PXs5OTk5OX1cclxuICAgICAgICAgICAgICAgIG1hc2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCIgYWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aWxlLnBhcmFncmFwaHMubWFwKChwYXJhZ3JhcGgsIGtleSkgPT4gPHAga2V5PXtrZXl9PntwYXJhZ3JhcGh9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aWxlLmJ1bGxldHMgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbGUuYnVsbGV0cy5tYXAoKGJ1bGxldCwga2V5KSA9PiA8bGkga2V5PXtrZXl9PntidWxsZXR9PC9saT4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGlsZS5zbGlkZXMubWFwKChzbGlkZSwga2V5KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhzbGlkZS5zb3VyY2UuaW5jbHVkZXMoJ2pwZycpIHx8IHNsaWRlLnNvdXJjZS5pbmNsdWRlcygnanBlZycpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0nc2xpZGUtaW1hZ2UnIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChzdGF0aWMvaW1hZ2VzLyR7c2xpZGUuc291cmNlfSlgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpZnJhbWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoPXsxMDB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzbGlkZS5zb3VyY2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3NsaWRlLnNvdXJjZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49J3RydWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c2xpZGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgRXhwZXJpZW5jZSA9ICh7IGV4cGVyaWVuY2UgfSkgPT4gKFxyXG4gICAgPGRpdiBpZD17ZXhwZXJpZW5jZS5pZH0gY2xhc3NOYW1lPSdleHAtc2tpbGwnPlxyXG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduPSdtaWRkbGUnIGNsYXNzTmFtZT0nYnV0dCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3NpdGlvbic+e2V4cGVyaWVuY2UucG9zaXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2V4cGVyaWVuY2UuZGF0ZX08L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAge2V4cGVyaWVuY2Uub3JnYW5pemF0aW9ufSwgPHNwYW4gY2xhc3NOYW1lPSdsb2NhdGlvbic+e2V4cGVyaWVuY2UubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIHtleHBlcmllbmNlLnNlY3Rpb25zLm1hcChzZWN0aW9uID0+IChcclxuICAgICAgICAgICAgPD4gICAgXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHQnPntzZWN0aW9uLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUm93PiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24uYnVsbGV0cy5tYXAoKGJ1bGxldCwga2V5KSA9PiA8bGkga2V5PXtrZXl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBidWxsZXQgfX0gLz4pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3QgU2tpbGwgPSAoeyBza2lsbCB9KSA9PiAoXHJcbiAgICA8ZGl2IGlkPXtza2lsbC5pZH0gY2xhc3NOYW1lPSdleHAtc2tpbGwnPlxyXG4gICAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwic3RhcnRcIiBhbGlnbj0nbWlkZGxlJyBjbGFzc05hbWU9J3Bvc2l0aW9uJz5cclxuICAgICAgICAgICAge3NraWxsLm5hbWV9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7c2tpbGwuYnVsbGV0cy5tYXAoKGRldGFpbCwga2V5KSA9PiA8bGkga2V5PXtrZXl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkZXRhaWwgfX0gLz4pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50cnknPlxyXG4gICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9J2RpdmlkZSc+PEljb24gdHlwZT1cInVzZXJcIiBjbGFzc05hbWU9J2RpdmlkZXItaWNvbicgaWQ9J2JpbycgLz5CaW88L0RpdmlkZXI+XHJcbiAgICAgICAgICAgIDxwPlJvYm90IGNyZWF0b3IgYXQgRURQIFNvbGFyLiBHcmFkdWF0ZSBpbiBNUyBFbGVjdHJvbWVjaGFuaWNhbCBFbmdpbmVlcmluZyBhdCBVUE0gKE1hZHJpZCwgU3BhaW4pIHdpdGggYSBkaXZlcnNlIGJhY2tncm91bmQuPC9wPlxyXG4gICAgICAgICAgICA8cD5JbnRlcmVzdGVkIGluIGF1dG9tYXRpb24gYW5kIHByb2dyYW1taW5nIChlc3BlY2lhbGx5IFJQQSksIHJvYm90aWNzLCBzb2xhciBwaG90b3ZvbHRhaWNzLCB0aGUgZW52aXJvbm1lbnQsIGFuZCB0aGUgT3hmb3JkIGNvbW1hLjwvcD5cclxuICAgICAgICAgICAgPHA+Q29udGludW91cyBsZWFybmVyLjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjdi1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgRmVlbCBmcmVlIHRvIDxhIGhyZWY9J3N0YXRpYy9DViAtIEphaW1lIFNhbGF6YXIgTGFoZXJhLnBkZicgdGl0bGU9J0NWIC0gSmFpbWUgU2FsYXphciBMYWhlcmEnIGRvd25sb2FkPSdDViAtIEphaW1lIFNhbGF6YXIgTGFoZXJhJz5kb3dubG9hZCBteSBDVjwvYT4gXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50cnknPlxyXG4gICAgICAgICAgICA8RGl2aWRlcj48SWNvbiB0eXBlPVwidHJvcGh5XCIgY2xhc3NOYW1lPSdkaXZpZGVyLWljb24nIC8+SGlnaHRsaWdodHM8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgIHsvKiA8cD5UYWtlIGEgbG9vayBhdCBzb21lIG9mIG15IHByb2plY3RzLCBhY2hpZXZlbWVudHMsIGFuZCBleHBlcmllbmNlcyB0aHJvdWdoIHRoZSB5ZWFyczwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbGVzLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8VGlsZSB0aWxlPXt0aWxlcy5yb2JvdH0gLz5cclxuICAgICAgICAgICAgICAgIDxUaWxlIHRpbGU9e3RpbGVzLnNvbGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRpbGUgdGlsZT17dGlsZXMucnBhfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRpbGUgdGlsZT17dGlsZXMuZW5nbGlzaH0gLz5cclxuICAgICAgICAgICAgICAgIDxUaWxlIHRpbGU9e3RpbGVzLmJvbGxvc30gLz5cclxuICAgICAgICAgICAgICAgIDxUaWxlIHRpbGU9e3RpbGVzLmRvYm90fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aWxlLWNhdGVnb3J5Jz5Sb2JvdGljIFByb2Nlc3MgQXV0b21hdGlvbiAoUlBBKTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGlsZXMtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgdGlsZT17dGlsZXMucnBhfSBzbGlkZU51bT17MH0gLz5cclxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgdGlsZT17dGlsZXMucnBhfSBzbGlkZU51bT17MX0gLz5cclxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgdGlsZT17dGlsZXMucnBhfSBzbGlkZU51bT17Mn0gLz5cclxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgdGlsZT17dGlsZXMucnBhfSBzbGlkZU51bT17M30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aWxlLWNhdGVnb3J5Jz5NYXN0ZXIncyBUaGVzaXM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbGVzLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8VGh1bWJuYWlsIHRpbGU9e3RpbGVzLnJvYm90fSBzbGlkZU51bT17MH0gLz5cclxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgdGlsZT17dGlsZXMucm9ib3R9IHNsaWRlTnVtPXs1fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRodW1ibmFpbCB0aWxlPXt0aWxlcy5yb2JvdH0gc2xpZGVOdW09ezZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8VGh1bWJuYWlsIHRpbGU9e3RpbGVzLnJvYm90fSBzbGlkZU51bT17N30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aWxlLWNhdGVnb3J5Jz5PdGhlciBleHBlcmllbmNlczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGlsZXMtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgdGlsZT17dGlsZXMuc29sYXJ9IHNsaWRlTnVtPXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRodW1ibmFpbCB0aWxlPXt0aWxlcy5lbmdsaXNofSBzbGlkZU51bT17MH0gLz5cclxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgdGlsZT17dGlsZXMuYm9sbG9zfSBzbGlkZU51bT17MH0gLz5cclxuICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgdGlsZT17dGlsZXMuZG9ib3R9IHNsaWRlTnVtPXswfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8cD5JIGxpa2UgdG8gZGFiYmxlIGluIGZ1bGwtc3RhY2sgd2ViIGRldmVsb3BtZW50IGFuZCBleHBlcmltZW50IHdpdGggZGlmZmVyZW50IHRlY2hub2xvZ2llczwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlRoaXMgaW50ZXJhY3RpdmUgQ1YvcG9ydGZvbGlvIGlzIGJ1aWx0IHdpdGggTmV4dEpTLCBhIHNlcnZlci1zaWRlIHJlbmRlcmluZyBmcmFtZXdvcmsgZm9yIFJlYWN0SlM8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkkgaGF2ZSBhIGhvYmJ5IHByb2plY3QgYXQgPGEgaHJlZj0naHR0cHM6Ly9qc2FsYXoxOTg5LmdpdGh1Yi5pby8nIHRpdGxlPVwiTjJUXCI+aHR0cHM6Ly9qc2FsYXoxOTg5LmdpdGh1Yi5pbzwvYT4sIHdoZXJlIEknbSB0cnlpbmcgdG8gYnVpbGQgYSBTaW5nbGUtUGFnZSBBcHBsaWNhdGlvbiAoU1BBKSB3aXRoIGEgUmVhY3RKUyBmcm9udGVuZCBhbmQgYSBGbGFzayAoUHl0aG9uKSBiYWNrZW5kIGNvbm5lY3RlZCB0byBhIFBvc3RHcmVTUUwgZGF0YWJhc2U8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50cnknPlxyXG4gICAgICAgICAgICA8RGl2aWRlcj48QnJpZWZjYXNlSWNvbiBjbGFzc05hbWU9J2RpdmlkZXItaWNvbi0yJyAvPlByb2Zlc3Npb25hbDwvRGl2aWRlcj5cclxuICAgICAgICAgICAgPEV4cGVyaWVuY2UgZXhwZXJpZW5jZT17ZXhwZXJpZW5jZXMucnBhfSAvPlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZSBleHBlcmllbmNlPXtleHBlcmllbmNlcy5zb2xhcjB9IC8+XHJcbiAgICAgICAgICAgIDxFeHBlcmllbmNlIGV4cGVyaWVuY2U9e2V4cGVyaWVuY2VzLnNvbGFyMX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50cnknPlxyXG4gICAgICAgICAgICA8RGl2aWRlcj48R3JhZHVhdGlvbkljb24gY2xhc3NOYW1lPSdkaXZpZGVyLWljb24tMicgLz5BY2FkZW1pY3M8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgIDxFeHBlcmllbmNlIGV4cGVyaWVuY2U9e2V4cGVyaWVuY2VzLm1hc3RlcnN9IC8+XHJcbiAgICAgICAgICAgIDxFeHBlcmllbmNlIGV4cGVyaWVuY2U9e2V4cGVyaWVuY2VzLmNvdXJzZXNFVFNJREl9IC8+XHJcbiAgICAgICAgICAgIDxFeHBlcmllbmNlIGV4cGVyaWVuY2U9e2V4cGVyaWVuY2VzLmNvdXJzZXNNQ30gLz5cclxuICAgICAgICAgICAgPEV4cGVyaWVuY2UgZXhwZXJpZW5jZT17ZXhwZXJpZW5jZXMudW5kZXJncmFkfSAvPlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZSBleHBlcmllbmNlPXtleHBlcmllbmNlcy5hc3NvY2lhdGVzfSAvPlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZSBleHBlcmllbmNlPXtleHBlcmllbmNlcy5tb250ZXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VudHJ5Jz5cclxuICAgICAgICAgICAgPERpdmlkZXI+PEljb24gdHlwZT1cInN0YXJcIiBjbGFzc05hbWU9J2RpdmlkZXItaWNvbi0yJyAvPlNraWxsczwvRGl2aWRlcj5cclxuICAgICAgICAgICAgPFNraWxsIHNraWxsPXtza2lsbHMuZW5nbGlzaH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NraWxsLWJnJz5cclxuICAgICAgICAgICAgICAgIDxTa2lsbCBza2lsbD17c2tpbGxzLnNvZnR3YXJlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNraWxsIHNraWxsPXtza2lsbHMuY29kaW5nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pIiwiaW1wb3J0ICcuL015Q29tcG9uZW50RGF0YS5jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgdGlsZXMgPSB7XHJcbiAgICByb2JvdDoge1xyXG4gICAgICAgIHRpdGxlOiAnQXV0b25vbW91cyBBZ3JpY3VsdHVyYWwgUm9ib3QnLFxyXG4gICAgICAgIHNvdXJjZTogJy4uL3N0YXRpYy9pbWFnZXMvcm9ib3Qvcm9ib3QwLmpwZWcnLFxyXG4gICAgICAgIHBhcmFncmFwaHM6IFtcclxuICAgICAgICAgICAgYFRoZSByb2JvdCBpcyBjb250cm9sbGVkIHZpYSB0aGUgd2Vic2l0ZSAoRmxhc2spLCBzdG9yaW5nIGFuZCByZXBvcnRpbmcgZGF0YSBmcm9tIHRoZSBTUUwgZGF0YWJhc2UuIFxyXG4gICAgICAgICAgICBUaGUgc2VydmVyIG9yIHVzZXIgY29tbXVuaWNhdGVzIHdpdGggdGhlIHJvYm90IHRocm91Z2ggTVFUVCBhbmQgY2FuIGV4ZWN1dGUgbWFudWFsIGFuZCBhdXRvbm9tb3VzIG9wZXJhdGlvbnMgZnJvbSB0aGUgd2ViYXBwLlxyXG4gICAgICAgICAgICBJbiBhdXRvbm9tb3VzIG1vZGUsIGl0IGNvbXBhcmVzIGl0cyBHUFMgbG9jYXRpb24gdXNpbmcgYSBSYXNwYmVycnkgUGkgbW9kdWxlIGNhcGFibGUgb2YgUlRLIHRvIG5hdmlnYXRlIGJ5IGl0c2VsZiB0byBhbiBvYmplY3RpdmUgcG9pbnQgXHJcbiAgICAgICAgICAgIGRlc2lnbmF0ZWQgb24gdGhlIG1hcCwgYXZvaWRpbmcgb2JzdGFjbGVzIGluIGl0cyB3YXkuYCxcclxuICAgICAgICAgICAgYEl0IGlzIG1hZGUgdXAgb2Y6YCwgICAgICAgXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidWxsZXRzOiBbXHJcbiAgICAgICAgICAgICcyIEFyZHVpbm9zIGFuZCAyIFJhc3BiZXJyeSBQaXMnLFxyXG4gICAgICAgICAgICAnYnJ1c2hlZCBEQyBtb3RvcnMgKDEyIFYpJyxcclxuICAgICAgICAgICAgJ2xpbmVhciBhY3R1YXRvcicsXHJcbiAgICAgICAgICAgICdzZXJ2b21vdG9ycycsXHJcbiAgICAgICAgICAgICdHUFMgbW9kdWxlIChSZWFsIFRpbWUgS2luZW1hdGljIG1vZGUpJyxcclxuICAgICAgICAgICAgJ3NvaWwgc2Vuc29yICh0ZW1wLCBodW1pZGl0eSwgc2FsaW5pdHksIGV0Yy4pJyxcclxuICAgICAgICAgICAgJ3VsdHJhc29uaWMgc2Vuc29ycycsXHJcbiAgICAgICAgICAgICdtYWduZXRvbWV0ZXInLFxyXG4gICAgICAgICAgICAnd2ViY2FtIChmb3IgbWFudWFsIHRlbGVvcGVyYXRpb24gYW5kIGZvciBhdXRvbm9tb3VzIFJHQiBkZXRlY3Rpb24pJyxcclxuICAgICAgICAgICAgJ21vdG9yY3ljbGUgYmF0dGVyeSAod2l0aCBhbiBhdXRvbWF0aWMgc2h1dG9mZiBzeXN0ZW0pJyxcclxuICAgICAgICAgICAgJ3NvbGFyIHBhbmVscyAoMiB4IDEyIFYgPSAyNCBWKSBhbmQgTVBQVCBjaGFyZ2VyJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2xpZGVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ3JvYm90L3JvYm90MC5qcGVnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnR2VuZXJhbCB2aWV3J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdyb2JvdC9yb2JvdDEuanBlZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2luZyBhIHBob25lJ3MgR1BTIGZvciBhdXRvbm9tb3VzIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdyb2JvdC9yb2JvdDIuanBlZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgUlBpIGhhbmRsZXMgbmF2aWdhdGlvbiB3aGlsZSB0aGUgb3RoZXIgdGFrZXMgb24gdGhlIHNhbXBsaW5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdyb2JvdC9yb2JvdDMuanBlZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIE1QUFQgY2hhcmdlciByZXBsZW5pc2hpbmcgdGhlIGJhdHRlcnkgd2l0aCB0aGUgc29sYXIgcGFuZWxzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdyb2JvdC9yb2JvdDQuanBlZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcmVsYXkgYW5kIEFyZHVpbm8gaW50ZXJydXB0cyBhbGxvdyBmb3IgYW4gYXV0b21hdGljIGRpc2Nvbm5lY3QnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzNTU0tmbG5MVEZNJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT2JzdGFjbGUgYXZvaWRhbmNlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9SazktVWFkYklOcycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0V4ZWN1dGluZyBhIGNvbXBsZXRlIGN5Y2xlIGFyb3VuZCBhbmQgaW5zaWRlIGEgXCJmYXJtIHBsb3RcIidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvT1dsQk5seEFfckknLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGYXJtIHBsb3QgY3JlYXRpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ZPVjVOR0RsWUVNJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWFudWFsIG1vZGUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1FQam1Rc0t2MTZvJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTmF2aWdhdGlvbiBiZXR3ZWVuIHJvd3MgYW5kIGEgc2FmZXR5IHN0b3Agd2hlbiBjb25mcm9udGVkIHdpdGggYSBzdWRkZW4gb2JzdGFjbGUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0w3NS1nSVBkekw4JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FnZSBtb3ZlbWVudCB0byBhbGxvdyBmb3Igc2FtcGxpbmcgd2l0aCB0aGUgbGluZWFyIGFjdHVhdG9yJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgc29sYXI6IHtcclxuICAgICAgICB0aXRsZTogJ0JhY2tvZmZpY2UgVGVjaG5pY2lhbicsXHJcbiAgICAgICAgc291cmNlOiAnLi4vc3RhdGljL2ltYWdlcy9zb2xhci9jb29sQW5kQ2FzdWFsLmpwZycsXHJcbiAgICAgICAgcGFyYWdyYXBoczogW1xyXG4gICAgICAgICAgICBgSSBiZWdhbiBhcyBhIHNvbGFyIHNhbGVzIHJlcHJlc2VudGF0aXZlLCBjbGltYmluZyB1cCBvbiByb29mdG9wcyBmb3IgbWVhc3VyZW1lbnRzIGFuZCBkZXNpZ25pbmcgcmVzaWRlbnRpYWwgXHJcbiAgICAgICAgICAgIHN5c3RlbXMgdG8gcHJvcG9zZSB0byBvdXIgY3VzdG9tZXJzLiBJdCB3YXMgYSBncmVhdCBmb3JyYXkgaW50byB0aGUgd29ybGQgb2YgdGVjaG5vbG9neSwgY29uc3VsdGluZywgYW5kIGNvbnN0cnVjdGlvbi5gLFxyXG4gICAgICAgICAgICBgT3ZlciB0aW1lIEkgZ2FpbmVkIGFuIGludGVyZXN0IGluIHRoZSB0ZWNobmljYWwgc2lkZSBvZiB0aGUgb2ZmaWNlIGFzIHdlbGwgYXMgb3VyIHByb2R1Y3RzLiBJIGRlY2lkZWQgSSB3YW50ZWQgdG8gXHJcbiAgICAgICAgICAgIHVuZGVyc3RhbmQgdGhlbSBiZXR0ZXIsIHdoaWNoIGxlZCBtZSB0byBlbWJhcmsgb24gbXkgTWFzdGVyJ3MgZWR1Y2F0aW9uIGluIHRoZSBmb2xsb3dpbmcgeWVhcnMuIFRoaXMgaW1wbGllZCB0YWtpbmcgXHJcbiAgICAgICAgICAgIGEgZmV3IGV2ZW5pbmcgY2xhc3NlcyBmb3IgZ2VuZXJhbCBlbmdpbmVlcmluZyBjb3Vyc2VzIGF0IGEgbG9jYWwgY29tbXVuaXR5IGNvbGxlZ2Ugd2hpbGUgd29ya2luZyAoISkgc28gSSBjb3VsZCBzdGFydCBidWlsZGluZyBcclxuICAgICAgICAgICAgYSBzb2xpZCB0ZWNobmljYWwgYmFzZS4gV2hlbiBJIHJldHVybmVkIHRvIE1hZHJpZCBJIGNvbnRpbnVlZCB0aGlzIHByZXBhcmF0b3J5IHN0YWdlIGF0IHRoZSAnVW5pdmVyc2lkYWQgUG9sdMOpY25pY2EgZGUgTWFkcmlkJ1xyXG4gICAgICAgICAgICB0byBlbnN1cmUgSSBjb3VsZCBiZSBzdWNjZXNzZnVsIGluIGdldHRpbmcgbXkgTWFzdGVyJ3MgZGVncmVlLmAsXHJcbiAgICAgICAgICAgIGBXaGlsZSBhdCB0aGlzIHBvc2l0aW9uLCBpbiB0aGUgZmllbGQsIEkgd291bGQgaGVscCBkaWFnbm9zZSB0ZWNobmljYWwgaXNzdWVzIGluIG91ciBpbnN0YWxsYXRpb25zLCBzdWNoIGFzIGEgZmF1bHR5IFxyXG4gICAgICAgICAgICBpbnZlcnRlci4gQXQgdGhlIG9mZmljZSwgSSBsZWFybmVkIGFib3V0IG91ciBkYXktdG8tZGF5IHRhc2tzIGFuZCBidXNpbmVzcyBmbG93cywgYW5kIEkgaW1hZ2luZWQgdGhlc2UgY291bGQgYmUgXHJcbiAgICAgICAgICAgIG9wdGltaXplZC4gU28gSSBiZWdhbiBwbGF5aW5nIGFyb3VuZCB3aXRoIEV4Y2VsIG1hY3JvcyAoVkJBKSBhbmQgc2ltcGxlIEphdmFTY3JpcHQgaW4gUERGcyB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIFxyXG4gICAgICAgICAgICBwcm9wb3NhbHMsIGVsZWN0cmljIHV0aWxpdHkgaW50ZXJjb25uZWN0aW9uIGFwcGxpY2F0aW9ucywgYW5kIGFueXRoaW5nIEkgY291bGQgZ2V0IG15IGhhbmRzIG9uLiBCYWNrIHRoZW4gSSB3YXNuJ3QgXHJcbiAgICAgICAgICAgIGF3YXJlIG9mIHRoZSBib29taW5nIFJQQSBpbmR1c3RyeSBzbyBub3dhZGF5cyBJIGhvcGUgdG8gYXBwbHkgUHl0aG9uIGFuZCBKUyBzY3JpcHRzIHRvIG15IHRhc2tzLCBhcyB3ZWxsIGFzIGEgcHJvcGVyIFxyXG4gICAgICAgICAgICBSUEEgc3VpdGUgbGlrZSBVaVBhdGggb3IgQmx1ZVByaXNtLmBcclxuICAgICAgICBdLFx0XHQgICAgICAgICAgIFxyXG4gICAgICAgIHNsaWRlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdzb2xhci9jb29sQW5kQ2FzdWFsLmpwZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0F0IHRoZSBvZmZpY2UsIHdpdGggbGVzcyBoYWlyIHRoYW4gbm93J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdzb2xhci93aXRoTWF5b3IuanBnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTXVuaWNpcGFsIGF3YXJkIGZvciBtb3N0IHNvbGFyIGluc3RhbGxhdGlvbnMgd2l0aCB0aGUgTWF5b3Igb2YgV2FzaGluZ3RvbiwgREMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ3NvbGFyL29uUm9vZi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBdCBvbmUgb2Ygb3VyIGNvbW1lcmNpYWwtc2NhbGUgaW5zdGFsbGF0aW9ucyB3aXRoIHNvbWUgY293b3JrZXJzIGFuZCBjcmV3IG1lbWJlcnMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBycGE6IHtcclxuICAgICAgICB0aXRsZTogJ1JvYm90aWMgUHJvY2VzcyBBdXRvbWF0aW9uIChSUEEpJyxcclxuICAgICAgICBzb3VyY2U6ICcuLi9zdGF0aWMvaW1hZ2VzL3JwYS9kaXBsb21hMC5qcGcnLFxyXG4gICAgICAgIHBhcmFncmFwaHM6IFtcclxuICAgICAgICAgICAgYEFwYXJ0IGZyb20gZ2VuZXJhbCBCYXNoLCBQb3dlclNoZWxsLCBQeXRob24sIGFuZCBKUyBzY3JpcHRpbmcsIEkgY2FuIGRlcGxveSBVaVBhdGggcm9ib3RzIHRvIHBlcmZvcm0gdG8gbWFueSB0YXNrcy5gLFxyXG4gICAgICAgICAgICBgVGhpcyBSUEEgc3VpdGUgcHJvdmlkZXMgYSBncmFwaGljYWwgcHJvZ3JhbW1pbmcgZW52aXJvbm1lbnQgZXh0ZW5zaWJsZSB3aXRoIFZCLk5FVCBzY3JpcHRpbmcgdG8gYXV0b21hdGUgcHJvY2Vzc2VzIGludm9sdmluZyBcclxuICAgICAgICAgICAgdGV4dCwgaW1hZ2VzLCBmb3JtcywgZXRjLiBJIGFtIGFsd2F5cyBpbXByZXNzZWQgd2l0aCBpdHMgQUkgY2FwYWJpbGl0aWVzIHdoZW4gZXh0cmFjdGluZyBpbmZvcm1hdGlvbiBmcm9tIFxyXG4gICAgICAgICAgICBzY2FubmVkIGRvY3VtZW50cywgd2Vic2l0ZXMsIGFuZCBldmVuIHZpcnR1YWwgbWFjaGluZXMuYCxcclxuICAgICAgICAgICAgYFVpUGF0aCBvZmZlcnMgYW4gQWR2YW5jZWQgQ2VydGlmaWNhdGlvbiBjb25zaXN0aW5nIG9mIGEgdGltZWQgdGhlb3JldGljYWwgYW5kIHByYWN0aWNhbCBleGFtLCB3aGljaCBJIGhvbGQgc2luY2UgTWFyY2ggMjAxOS5gICAgICAgIFxyXG4gICAgICAgIF0sICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNsaWRlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9aLVprTHpxcU95aycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0V4YW1wbGUgb2YgRGlzcGF0Y2hlciBhbmQgUGVyZm9tZXIgYm90aCB1c2luZyB0aGUgUmVGcmFtZXdvcmsgdG8gZ2VuZXJhdGUgYSB5ZWFybHkgcmVwb3J0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdycGEvZGlwbG9tYTAuanBnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWR2YW5jZWQgQ2VydGlmaWNhdGlvbiBEZWdyZWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL29xbU9aTWd6VDZ3JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRXh0cmFjdGluZyBjbGllbnQgaW5mb3JtYXRpb24gdG8gZ2VuZXJhdGUgYSBoYXNoIGNvZGUgYW5kIHVwZGF0ZSB0aGUgZGF0YWJhc2UnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1drUmhIWGJ3TXdrJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2ltcGxlIHRlc3Rpbmcgc3RlcHMgdG8gY2hlY2sgYSB3b3JrZmxvdyBmcm9tIG9uZSBvZiB0aGUgQWNhZGVteSBhc3NpZ25tZW50cydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiAncnBhL2RpcGxvbWExLmpwZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VpUGF0aCBGdW5kYW1lbnRhbHMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ3JwYS9kaXBsb21hMi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9maWNpZW5jeSB3aXRoIHRoZWlyIGFkbWluIGRhc2hib2FyZCAoVWlQYXRoIE9yY2hlc3RyYXRvciknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ3JwYS9kaXBsb21hMy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbmRlcnN0YW5kaW5nIHRoZWlyIHByb2Zlc3Npb25hbCBwcm9qZWN0IGZyYW1ld29yayAoUkVGcmFtZXdvcmspIGFuZCBmbG93cydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIGVuZ2xpc2g6IHtcclxuICAgICAgICB0aXRsZTogJ0ZsdWVudCBFbmdsaXNoJyxcclxuICAgICAgICBzb3VyY2U6ICcuLi9zdGF0aWMvaW1hZ2VzL2VuZ2xpc2gucG5nJyxcclxuICAgICAgICBwYXJhZ3JhcGhzOiBbXHJcbiAgICAgICAgICAgIGBJIGxlYXJuZWQgRW5nbGlzaCBhdCBhIHlvdW5nIGFnZSBpbiBiaWxpbmd1YWwgc2Nob29scyAoaW4gU3BhbmlzaC1zcGVha2luZyBjb3VudHJpZXMpIGFzIHdlbGwgYXMgcmVndWxhciBzY2hvb2xzIFxyXG4gICAgICAgICAgICAoaW4gRW5nbGlzaC1zcGVha2luZyBjb3VudHJpZXMpLiBMYXRlciBvbiBJIGZpbmlzaGVkIG15IHVuZGVyZ3JhZHVhdGUgZGVncmVlIGF0IHRoZSBVbml2ZXJzaXR5IG9mIE1hcnlsYW5kLCBcclxuICAgICAgICAgICAgQ29sbGVnZSBQYXJrLCBuZWFyIFdhc2hpbmd0b24sIERDLmAsXHJcbiAgICAgICAgICAgIGBJIGhhZCB3b3JrZWQgYXQgZGlmZmVyZW50IGpvYnMgZm9yIHNldmVyYWwgeWVhcnMgdGhyb3VnaG91dCBteSB1bml2ZXJzaXR5IHN0dWRpZXMgYW5kIGltbWVkaWF0ZWx5IGFmdGVyIGdyYWR1YXRpb24gSSB3YXNcclxuICAgICAgICAgICAgb2ZmZXJlZCBhIHBvc2l0aW9uIGluIFdhc2hpbmd0b24sIERDLmAsXHJcbiAgICAgICAgICAgIGBJIGNhbiBzcGVhaywgcmVhZCwgYW5kIHdyaXRlIHByb2ZpY2llbnRseSBpbiBFbmdsaXNoIChhbmQsIG9mIGNvdXJzZSwgYWxzbyBpbiBTcGFuaXNoKSBidXQgSSB3aWxsIGxldCB0aGUgdmlkZW8gZG8gdGhlIFxyXG4gICAgICAgICAgICB0YWxraW5nIChwdW4gaW50ZW5kZWQpYCAgICAgICBcclxuICAgICAgICBdLCAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzbGlkZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYUhfYTJNbnYyeFknLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbiBleGFtcGxlIG9mIG15IEVuZ2xpc2ggYW5kIFNwYW5pc2ggc3BlYWtpbmcgbGV2ZWwnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBib2xsb3M6IHtcclxuICAgICAgICB0aXRsZTogJ0luZHVzdHJpYWwgQXV0b21hdGlvbicsXHJcbiAgICAgICAgc291cmNlOiAnLi4vc3RhdGljL2ltYWdlcy9ib2xsb3Mvd2luY2MuanBnJyxcclxuICAgICAgICBwYXJhZ3JhcGhzOiBbXHJcbiAgICAgICAgICAgIGBUaGlzIHByb2plY3QgaW52b2x2ZWQgcHJvZ3JhbW1pbmcgYSByZWFsIFBMQyAoU2llbWVucyAzMTNDKSB3aXRoIFNURVA3LiBJdCBjYW4gYmUgY29udHJvbGxlZCBtYW51YWxseSB3aXRoIGEgXHJcbiAgICAgICAgICAgIHBoeXNpY2FsIGludGVyZmFjZSwgYWx0aG91Z2ggaXQgaXMgYmVzdCBtb25pdG9yZWQgYW5kIGNvbnRyb2xsZWQgcmVtb3RlbHkgd2l0aCBhIFdpbkNDIGZyb250IGVuZC5gLFxyXG4gICAgICAgICAgICBgTm93YWRheXMgSSB3b3VsZCBob3BlIHRvIHVwZ3JhZGUgdG8gU2llbWVuJ3MgVElBIFBvcnRhbCBmb3IgYSBzbW9vdGhlciBpbnRlZ3JhdGlvbiB3aXRoIFNDQURBLmAgICAgICAgXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzbGlkZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiAnYm9sbG9zL3dpbmNjLmpwZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NDQURBIHdpdGggU2llbWVucyBXaW5DQydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiAnYm9sbG9zL2dyYWZjZXQuanBnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnR3JhZmNldCBkaWFncmFtIG9mIHRoZSBzdGF0ZSBtYWNoaW5lJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBkb2JvdDoge1xyXG4gICAgICAgIHRpdGxlOiAnTWFzdGVywrRzIEludGVybnNoaXAnLFxyXG4gICAgICAgIHNvdXJjZTogJy4uL3N0YXRpYy9pbWFnZXMvZG9ib3QvZG9ib3QwLmpwZycsXHJcbiAgICAgICAgcGFyYWdyYXBoczogW1xyXG4gICAgICAgICAgICBgT3VyIHJvYm90aWNzIHByb2Zlc3NvciBhc2tlZCBhIGNvbGxlYWd1ZSBhbmQgSSB0byBwcm9kdWNlIGEgc2VyaWVzIG9mIGxhYm9yYXRvcnkgZXhlcmNpc2VzIGZvciBoaXMgdW5kZXJncmFkdWF0ZSBcclxuICAgICAgICAgICAgY2xhc3Nlcy4gVGhlIHVuaXZlcnNpdHkgaGFkIGp1c3QgcHVyY2hhc2VkIGEgY291cGxlIG9mIERvYm90IE1hZ2ljaWFuIHJvYm90aWMgYXJtcyBhbmQgd2Ugd2VyZSBpbiBjaGFyZ2Ugb2YgZmluZGluZyBcclxuICAgICAgICAgICAgb3V0IGhvdyBpdCB3b3JrZWQgYW5kIGhvdyB3ZSBjb3VsZCBtYWtlIHN0dWRlbnRzIHN1ZmZlciB3aXRoIGl0LmAsXHJcbiAgICAgICAgICAgIGBXZSBjYW1lIHVwIHdpdGggZXhlcmNpc2VzIHJlZ2FyZGluZyB0aGUgcm9ib3QncyBkaXJlY3QgYW5kIGludmVyc2Uga2luZW1hdGljcyB0byBleGVjdXRlIHNpbXBsZSByb3V0aW5lcyBzdWNoIGFzIFxyXG4gICAgICAgICAgICBkcmF3aW5nIGFuIGFyYyBvbiBhIHBpZWNlIG9mIHBhcGVyLiBXZSBhbHNvIGRlbHZlZCBhIGJpdCBpbnRvIHRoZSBKYWNvYmlhbiBtYXRyaWNlcyB0byBzdHVkeSB0aGUgcm9ib3QncyB2ZWxvY2l0aWVzIFxyXG4gICAgICAgICAgICBhbmQgd2UgdWx0aW1hdGVseSBhc2tlZCB0aGUgc3R1ZGVudHMgdG8gY3JlYXRlIGEgbGl0dGxlIHByb2Nlc3MgdG8gcGljayB1cCBhbiBpdGVtLCBtYW5pcHVsYXRlIGFuZCBtb3ZlIGl0IGFyb3VuZCBpbiBcclxuICAgICAgICAgICAgYSBjZXJ0YWluIHRyYWplY3RvcnksIHRvIGZpbmFsbHkgZHJvcCB0aGUgb2JqZWN0IGluIGEgc3BlY2lmaWVkIHNwb3QuIFRoZSByb2JvdCB3YXMgY29udHJvbGxlZCB0aHJvdWdoIGJvdGggaXRzIFxyXG4gICAgICAgICAgICBwcm9wcmlldGFyeSBzb2Z0d2FyZSBhcyB3ZWxsIGFzIHRocm91Z2ggTWF0bGFiIHNjcmlwdHMgYWNjZXNzaW5nIHRoZSB2ZW5kb3IncyBBUEkuYCxcclxuICAgICAgICAgICAgYEknbSBhIHN0cm9uZyBiZWxpZXZlciBpbiBsZWFybmluZyB3aXRoIHJlYWwtbGlmZSBwcmFjdGljZSBhbmQgSSB3YXMgZ2xhZCB0byBhcHBseSB0aGUga25vd2xlZGdlIGdhaW5lZCBpbiBteSBcclxuICAgICAgICAgICAgcm9ib3RpY3MgY291cnNlIHRvIHRoaXMgbGl0dGxlIHJvYm90LiBJJ20gZXZlbiBtb3JlIGdsYWQgdG8gaGF2ZSBjb21tdW5pY2F0ZWQgd2l0aCB0aGUgTWFjaGluZSBhbmQgSSwgZm9yIG9uZSwgXHJcbiAgICAgICAgICAgIHdlbGNvbWUgb3VyIG5ldyByb2JvdCBvdmVybG9yZHMuYFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2xpZGVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2RvYm90L2RvYm90MC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEcmF3aW5nIGFuIGFyYyBvbiBhIHBpZWNlIG9mIHBhcGVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkb2JvdC9kb2JvdDEuanBnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGZyb250IHBhZ2Ugb2YgdGhlIGV4ZXJjaXNlIHBhY2tldCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZG9ib3QvZG9ib3QyLmpwZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSB0b3BpY3MgY292ZXJlZCBpbiB0aGUgcGFja2V0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkb2JvdC9kb2JvdDMuanBnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBvZiBhbiBleGVyY2lzZSBpbiBkaXJlY3Qga2luZW1hdGljcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZG9ib3QvZG9ib3Q0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSByb2JvdCBjYW4gYmUgY29udHJvbGxlZCB0aHJvdWdoIE1hdGxhYiBvciB2aWEgaXRzIHByb3ByaWV0YXJ5IHNvZnR3YXJlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICdkb2JvdC9kb2JvdDUuanBnJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGRlc2lnbmF0ZWQgdHJhamVjdG9yeSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiAnZG9ib3QvZG9ib3Q2LmpwZycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJy4uLmFuZCB0aGUgY29kZSB0byBleGVjdXRlIGl0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0ge1xyXG4gICAgbWFzdGVycyA6IHtcclxuICAgICAgICBpZDogJ21hc3RlcnMnLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcIk1hc3RlcidzIERlZ3JlZSBpbiBFbGVjdHJvbWVjaGFuaWNhbCBFbmdpbmVlcmluZ1wiLFxyXG4gICAgICAgIGRhdGU6ICdGZWJydWFyeSAyMDE5JyxcclxuICAgICAgICBvcmdhbml6YXRpb246ICdFVFMgSW5nZW5pZXLDrWEgeSBEaXNlw7FvIEluZHVzdHJpYWwsIFVuaXZlcnNpZGFkIFBvbGl0w6ljbmljYSBkZSBNYWRyaWQnLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnTWFkcmlkLCBTcGFpbicsXHJcbiAgICAgICAgc2VjdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0czogW1xyXG4gICAgICAgICAgICAgICAgICAgIGBNYXN0ZXIncyBUaGVzaXMgLSA8c3BhbiBjbGFzcz0ndGVtcGxhdGUtbGluaycgb25jbGljaz1cImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcke3RpbGVzLnJvYm90LnRpdGxlfScpLmNsaWNrKClcIj5BdXRvbm9tb3VzIEFncmljdWx0dXJhbCBSb2JvdDwvc3Bhbj5gLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcm9ncmFtbWluZyBBcmR1aW5vcyAoSTJDLCBNUVRULCBjb250cm9sIFBJRCkgYW5kIFJhc3BiZXJyeSBQaXMgKEZsYXNrLCBNb25nb0RCKScsXHJcbiAgICAgICAgICAgICAgICAgICAgYFByb2dyYW1taW5nIFNpZW1lbnMgUExDIHdpdGggPHNwYW4gY2xhc3M9J3RlbXBsYXRlLWxpbmsnIG9uY2xpY2s9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnJHt0aWxlcy5ib2xsb3MudGl0bGV9JykuY2xpY2soKVwiPlNURVA3IGFuZCBXaW5DQzwvc3Bhbj5gLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcm9ncmFtbWluZyB3aXRoIE5JIExhYlZpZXcnLCAgXHJcbiAgICAgICAgICAgICAgICAgICAgYFByb2dyYW1taW5nIDxzcGFuIGNsYXNzPSd0ZW1wbGF0ZS1saW5rJyBvbmNsaWNrPVwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJyR7dGlsZXMuZG9ib3QudGl0bGV9JykuY2xpY2soKVwiPnJvYm90IGtpbmVtYXRpY3M8L3NwYW4+IHdpdGggTUFUTEFCYCxcclxuICAgICAgICAgICAgICAgICAgICAnU2ltdWxhdGlvbiBvZiBlbGVjdHJpY2FsIChRVUNTKSBhbmQgbWVjaGFuaWNhbCAoRmVzdG8gRmx1aWRTSU0sIFNBTSkgc3lzdGVtcydcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBjb3Vyc2VzRVRTSURJIDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnVW5kZXJncmFkdWF0ZSBDb3Vyc2VzJyxcclxuICAgICAgICBkYXRlOiAnRmFsbCAyMDE1IC0gU3ByaW5nIDIwMTYnLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvbjogJ0VUUyBJbmdlbmllcsOtYSB5IERpc2XDsW8gSW5kdXN0cmlhbCwgVW5pdmVyc2lkYWQgUG9saXTDqWNuaWNhIGRlIE1hZHJpZCcsXHJcbiAgICAgICAgbG9jYXRpb246ICdNYWRyaWQsIFNwYWluJyxcclxuICAgICAgICBzZWN0aW9uczogWyBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICdFbGVjdHJvbmljcywgQXV0b21hdGlvbiwgQ2lyY3VpdCBUaGVvcnksIFRoZXJtb2R5bmFtaWNzLCBGbHVpZHMgTWVjaGFuaWNzJyAgICBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBjb3Vyc2VzTUMgOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdVbmRlcmdyYWR1YXRlIENvdXJzZXMnLFxyXG4gICAgICAgIGRhdGU6ICdTcHJpbmcgMjAxNCAtIFNwcmluZyAyMDE1JyxcclxuICAgICAgICBvcmdhbml6YXRpb246ICdNb250Z29tZXJ5IENvbGxlZ2UnLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnTWFyeWxhbmQsIFVTQScsXHJcbiAgICAgICAgc2VjdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICdEaWZmZXJlbnRpYWwgRXF1YXRpb25zLCBQaHlzaWNzIElJSScgICAgXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgdW5kZXJncmFkOiB7XHJcbiAgICAgICAgaWQ6ICd1bmRlcmdyYWQnLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcIkJhY2hlbG9yJ3MgRGVncmVlIGluIEVudmlyb25tZW50YWwgU2NpZW5jZSBhbmQgVGVjaG5vbG9neVwiLFxyXG4gICAgICAgIGRhdGU6ICdEZWNlbWJlciAyMDEzJyxcclxuICAgICAgICBvcmdhbml6YXRpb246ICdVbml2ZXJzaXR5IG9mIE1hcnlsYW5kLCBDb2xsZWdlIFBhcmsnLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnTWFyeWxhbmQsIFVTQScsXHJcbiAgICAgICAgc2VjdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICdHcmFkdWF0ZWQgY3VtIGxhdWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWlub3JlZCBpbiBFY29sb2dpY2FsIFRlY2hub2xvZ3kgRGVzaWduIGFuZCBHZW9ncmFwaGljIEluZm9ybWF0aW9uIFN5c3RlbXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXNpZ25lZCBhbmQgY29uc3RydWN0ZWQgYW4gYW5hZXJvYmljIGRpZ2VzdG9yIGZvciB0aGUgdW5pdmVyc2l0eSBjYW1wdXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXN0b3JhdGlvbiBvZiB0aGUgQmFsdGltb3JlIEhhcmJvciBpbiBjb2xsYWJvcmF0aW9uIHdpdGggQmlvaGFiaXRhdHMsIEluYydcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBhc3NvY2lhdGVzOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiQXNzb2NpYXRlcydzIERlZ3JlZSBpbiBFbnZpcm9ubWVudGFsIFNjaWVuY2UgYW5kIFBvbGljeVwiLFxyXG4gICAgICAgIGRhdGU6ICdTcHJpbmcgMjAxMScsXHJcbiAgICAgICAgb3JnYW5pemF0aW9uOiAnTW9udGdvbWVyeSBDb2xsZWdlJyxcclxuICAgICAgICBsb2NhdGlvbjogJ01hcnlsYW5kLCBVU0EnLFxyXG4gICAgICAgIHNlY3Rpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldHM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkZpcnN0IDIgeWVhcnMgb2YgbXkgQmFjaGVsb3IncyBEZWdyZWUgY29tcGxldGVkIGF0IG15IGxvY2FsIGNvbW11bml0eSBjb2xsZWdlXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBtb250ZXM6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJCYWNoZWxvcidzIERlZ3JlZSBpbiBGb3Jlc3RyeSBFbmdpbmVlcmluZ1wiLFxyXG4gICAgICAgIGRhdGU6ICdTcHJpbmcgMjAwOScsXHJcbiAgICAgICAgb3JnYW5pemF0aW9uOiAnRVRTIEluZ2VuaWVyw61hIGRlIE1vbnRlcywgVW5pdmVyc2lkYWQgUG9saXTDqWNuaWNhIGRlIE1hZHJpZCcsXHJcbiAgICAgICAgbG9jYXRpb246ICdNYWRyaWQsIFNwYWluJyxcclxuICAgICAgICBzZWN0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWxsZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpcnN0IGFuZCBzZWNvbmQgeWVhciBiZWZvcmUgdHJhbnNmZXJyaW5nIHRvIHRoZSBVbml0ZWQgU3RhdGVzJ1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHJwYToge1xyXG4gICAgICAgIGlkOiAncnBhJyxcclxuICAgICAgICBwb3NpdGlvbjogJ0F1dG9tYXRpb24gYW5kIEJPIFRlY2huaWNpYW4nLFxyXG4gICAgICAgIGRhdGU6ICdOb3ZlbWJlciAyMDE5IC0gUHJlc2VudCcsXHJcbiAgICAgICAgb3JnYW5pemF0aW9uOiAnRURQIFNwYWluIChTb2xhciBEaXZpc2lvbiknLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnTWFkcmlkLCBTcGFpbicsXHJcbiAgICAgICAgc2VjdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9wb3NhbCBkZXNpZ24gYW5kIGRyYWZ0aW5nIGZvciByZXNpZGVudGlhbCBhbmQgc21hbGwgY29tbWVyY2lhbCBQViBpbnN0YWxsYXRpb25zJyxcclxuICAgICAgICAgICAgICAgIGJ1bGxldHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2xpZW50IGVuZXJneSBwcm9maWxpbmcgdmlhIGhvdXJseSBjb25zdW1wdGlvbiBjdXJ2ZXMgb3IgY3VzdG9tZXIgZWxlY3RyaWMgYmlsbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdJbnRlZ3JhdGlvbiBvZiBlbmVyZ3kgcHJvZHVjdGlvbiBkYXRhIGZyb20gUFZHSVMgKEV1cm9wZWFuIENvbW1pc3Npb24gcGxhdGZvcm0pIGludG8gb3VyIHNpbXVsYXRpb25zJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJlbGltaW5hcnkgUFYgbW9kdWxlIGxheW91dHMgd2l0aCBTb2xhckVkZ2UgRGVzaWduZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdTeXN0ZW0gc2l6aW5nIGJhc2VkIG9uIGNsaWVudCBlbmVyZ3kgY29uc3VtcHRpb24sIGF2YWlsYWJsZSBzcGFjZSwgc29sYXIgaXJyYWRpYW5jZSwgZXRjLicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BWIHBlcmZvcm1hbmNlIHNpbXVsYXRpb246IHNlbGZjb25zdW1wdGlvbiBwZXJjZW50YWdlLCBlbmVyZ3kgc2VsbGJhY2ssIGxvc3NlcyBhbmQgZGVncmFkYXRpb24sIGVsZWN0cmljaXR5IHRhcmlmZiwgQ0FQRVgsIGV0Yy4nXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXV0b21hdGlvbiBvZiBidXNpbmVzcyBwcm9jZXNzZXMgd2l0aCBVaVBhdGggYW5kIFB5dGhvbicsXHJcbiAgICAgICAgICAgICAgICBidWxsZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLy9gPHNwYW4gY2xhc3M9J3RlbXBsYXRlLWxpbmsnIG9uY2xpY2s9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnJHt0aWxlcy5zb2xhci50aXRsZX0nKS5jbGljaygpXCI+UFYgc3lzdGVtIGRlc2lnbjwvc3Bhbj4gKHJlc2lkZW50aWFsIGFuZCBjb21tZXJjaWFsKSB3aXRoIFNrZXRjaFVwLCBTb2xhck5leHVzLCBhbmQgR29vZ2xlIEVhcnRoYCxcclxuICAgICAgICAgICAgICAgICAgICAnQXV0b21hdGVkIGRvY3VtZW50IGJhdGNoIGdlbmVyYXRpb246IEV4Y2VsLCBQREYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdXZWIgc2NyYXBpbmcgd2l0aCBzZWxlbml1bSwgc2NyYXB5LCBiZWF1dGlmdWwgc291cCwgYW5kIHJlcXVlc3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAnR29vZ2xlIE1hcHMgaW50ZXJhY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgICAgICAnT25saW5lIGZvcm0gZmlsbGluZyBhbmQgZmlsZSBkb3dubG9hZHMgd2l0aCBzZWxlbml1bScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rvd25sb2FkaW5nIGZpbGVzIGZyb20gRlRQIHNlcnZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1hsc3gveGxzL2NzdiBtYW5pcHVsYXRpb25zIGFuZCBjb252ZXJzaW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V4dHJhY3Rpb24gYW5kIGRlY3J5cHRpb24gb2YgdGFyYmFsbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZWN1cnJpbmcgZW1haWxzIChpbmNsdWRpbmcgYXR0YWNobWVudHMpJyxcclxuICAgICAgICAgICAgICAgICAgICAnU0FQIGRlc2t0b3AgaW50ZXJhY3Rpb25zIHdpdGggcHlhdXRvZ3VpJ1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHNvbGFyMDoge1xyXG4gICAgICAgIGlkOiAnc29sYXIwJyxcclxuICAgICAgICBwb3NpdGlvbjogJ0JhY2tvZmZpY2UgVGVjaG5pY2lhbicsXHJcbiAgICAgICAgZGF0ZTogJ0p1bmVzIDIwMTMgLSBKdW5lIDIwMTUnLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvbjogJ1NvbGFyIFNvbHV0aW9uIExMQycsXHJcbiAgICAgICAgbG9jYXRpb246ICdXYXNoaW5ndG9uLCBEQywgVVNBJyxcclxuICAgICAgICBzZWN0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWxsZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dG9tYXRlZCBkb2N1bWVudCBnZW5lcmF0aW9uIChKYXZhU2NyaXB0LCBFeGNlbCBWQkEpIG9mIHByb3Bvc2FscywgaW50ZXJjb25uZWN0aW9uIGFncmVlbWVudHMsIGFuZCBjb250cmFjdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQZXJzb25hbCBwaXBlbGluZSBtYW5hZ2VtZW50IChFeGNlbCknLFxyXG4gICAgICAgICAgICAgICAgICAgICdSb29mdG9wIG1lYXN1cmVtZW50cyAoaW5jbHVkaW5nIG9ic3RhY2xlcykgaW4gb3JkZXIgdG8gM0QgbW9kZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz0ndGVtcGxhdGUtbGluaycgb25jbGljaz1cImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcke3RpbGVzLnNvbGFyLnRpdGxlfScpLmNsaWNrKClcIj5QViBzeXN0ZW0gZGVzaWduPC9zcGFuPiAocmVzaWRlbnRpYWwgYW5kIGNvbW1lcmNpYWwpIHdpdGggU2tldGNoVXAgYW5kIEdvb2dsZSBFYXJ0aGAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01vZHVsZSBzdHJpbmcgc2l6aW5nIHRvIHByb3Blcmx5IG1hdGNoIGludmVydGVyIHNpemUgd2l0aCBTTUEgU3VubnkgRGVzaWduJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFydGljaXBhdGlvbiBpbiBsb2NhbCBlbGVjdHJpY2FsIGluc3BlY3Rpb25zJyxcclxuICAgICAgICAgICAgICAgICAgICAnT24tc2l0ZSBhbmQgcmVtb3RlIHRlY2huaWNhbCBzdXBwb3J0IGFuZCB0cm91Ymxlc2hvb3RpbmcnXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgc29sYXIxOiB7XHJcbiAgICAgICAgaWQ6ICdzb2xhcjEnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnUGhvdG92b2x0YWljIEFwcHJlbnRpY2UnLFxyXG4gICAgICAgIGRhdGU6ICdKdW5lcyAyMDEzJyxcclxuICAgICAgICBvcmdhbml6YXRpb246ICdFYXJ0aCBTdW4gRW5lcmd5IFN5c3RlbXMnLFxyXG4gICAgICAgIGxvY2F0aW9uOiAnV2VzdCBWaXJnaW5pYSwgVVNBJyxcclxuICAgICAgICBzZWN0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWxsZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fzc2lzdGFuY2UgaW4gdGhlIGNvbnN0cnVjdGlvbiBvZiBhIDI0LXBhbmVsIHN5c3RlbSdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNraWxscyA9IHtcclxuICAgIGVuZ2xpc2g6IHtcclxuICAgICAgICBpZDogJ2VuZ2xpc2gnLFxyXG4gICAgICAgIG5hbWU6ICdOYXRpdmUgRW5nbGlzaCBhbmQgU3BhbmlzaCcsXHJcbiAgICAgICAgYnVsbGV0czogW1xyXG4gICAgICAgICAgICBgPHNwYW4gY2xhc3M9J3RlbXBsYXRlLWxpbmsnIG9uY2xpY2s9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnJHt0aWxlcy5lbmdsaXNoLnRpdGxlfScpLmNsaWNrKClcIj5OYXRpdmUgRW5nbGlzaDwvc3Bhbj4gKGFuZCBTcGFuaXNoKSBzcGVha2luZywgcmVhYWRpbmcsIGFuZCB3cml0aW5nYCxcclxuICAgICAgICAgICAgJ1NjaG9vbGluZyBhYnJvYWQsIGVzcGVjaWFsbHkgdW5pdmVyc2l0eSBpbiB0aGUgVVNBLCBhcyB3ZWxsIGFzIHNldmVyYWwgeWVhcnMgb2Ygd29ya2luZyB0aGVyZScsXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHNvZnR3YXJlOiB7XHJcbiAgICAgICAgaWQ6ICdzb2Z0d2FyZScsXHJcbiAgICAgICAgbmFtZTogJ1NvZnR3YXJlJyxcclxuICAgICAgICBidWxsZXRzOiBbXHJcbiAgICAgICAgICAgIGA8c3BhbiBjbGFzcz0ndGVtcGxhdGUtbGluaycgb25jbGljaz1cImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcke3RpbGVzLnJwYS50aXRsZX0nKS5jbGljaygpXCI+VWlQYXRoPC9zcGFuPiBSUEEgRGV2ZWxvcGVyIEFkdmFuY2VkIENlcnRpZmljYXRpb24gMjAxOWAsXHJcbiAgICAgICAgICAgICdNUyBPZmZpY2UgKGVzcC4gVkJBIG1hY3JvcyknLFxyXG4gICAgICAgICAgICAnQWRvYmUgUERGIChlc3AuIEphdmFTY3JpcHQpJyxcclxuICAgICAgICAgICAgJ1NpZW1lbnMgU1RFUDcgYW5kIFdpbkNDJyxcclxuICAgICAgICAgICAgJ0xhYlZpZXcnLFxyXG4gICAgICAgICAgICAnTUFUTEFCJyxcclxuICAgICAgICAgICAgJ1FVQ1MnLFxyXG4gICAgICAgICAgICAnRmx1aWRTSU0nLFxyXG4gICAgICAgICAgICAnU0FNJ1xyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBjb2Rpbmc6IHtcclxuICAgICAgICBpZDogJ2NvZGluZycsXHJcbiAgICAgICAgbmFtZTogJ1Byb2dyYW1taW5nIExhbmd1YWdlcycsXHJcbiAgICAgICAgYnVsbGV0czogW1xyXG4gICAgICAgICAgICBgUHl0aG9uOiBSUEEgYW5kIDxzcGFuIGNsYXNzPVwidGVtcGxhdGUtbGlua1wiIG9uY2xpY2s9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnJHt0aWxlcy5yb2JvdC50aXRsZX0nKS5jbGljaygpXCI+bWVjaGF0cm9uaWNzPC9zcGFuPmAsXHJcbiAgICAgICAgICAgICdDJyxcclxuICAgICAgICAgICAgJ1NRTCAoU1FMaXRlMywgUG9zdGdyZVNRTCknLFxyXG4gICAgICAgICAgICAnSmF2YXNjcmlwdCAoZXNwZWNpYWxseSBSZWFjdEpTKScsXHJcbiAgICAgICAgICAgICdIVE1MLCBDU1MnLFxyXG4gICAgICAgICAgICAnU3RhbmRhcmQgdXNlIG9mIExpbnV4LCBTU0gsIGFuZCBnaXQnLFxyXG4gICAgICAgICAgICAnQmFzaWMga25vd2xlZGdlIG9mIHg4NiBhc3NlbWJseSAoQVQmVCknXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9NeUZvb3Rlci5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdCc+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgR3JhZHVhdGlvbiBhbmQgYnJpZWZjYXNlIGljb25zIG1hZGUsIHJlc3BlY3RpdmVseSwgYnkmbmJzcDtcclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9hdXRob3JzL3Rob3NlLWljb25zXCIgdGl0bGU9XCJUaG9zZSBJY29uc1wiPlRob3NlIEljb25zPC9hPiBcclxuICAgICAgICAgICAgJm5ic3A7YW5kJm5ic3A7IFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vP19faHN0Yz01NzQ0MDE4MS4yYjI4MGU0ODUwZjRjMWVjMjA4OWVkMzc1Njg2ZDdmOC4xNTYzMDM2MTM1ODM3LjE1NjM1NDEwMTAwNTAuMTU2MzU0NDY1NzA2NC44Jl9faHNzYz01NzQ0MDE4MS4zLjE1NjM1NDQ2NTcwNjQmX19oc2ZwPTI5MTA5NDg0MzdcIiB0aXRsZT1cIkZyZWVwaWtcIj5GcmVlcGlrPC9hPiZuYnNwOyBcclxuICAgICAgICAgICAgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL1wiIHRpdGxlPVwiRmxhdGljb25cIj5mbGF0aWNvbi5jb208L2E+Jm5ic3A7XHJcbiAgICAgICAgICAgIGxpY2Vuc2VkIGJ5IDxhIGhyZWY9XCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXCIgdGl0bGU9XCJDcmVhdGl2ZSBDb21tb25zIEJZIDMuMFwiIHRhcmdldD1cIl9ibGFua1wiPkNDIDMuMCBCWTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktY29weXJpZ2h0Jz5KYWltZSBTYWxhemFyIExhaGVyYSAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pIiwiaW1wb3J0ICcuL015SGVhZGVyLmNzcydcclxuaW1wb3J0IHsgUm93LCBDb2wsIEljb24sIFRvb2x0aXAgfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IHsgY29weUVtYWlsIH0gZnJvbSAnLi4vaGVscGVycy9jb3B5RW1haWwuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8Um93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nIGFsaWduPSdtaWRkbGUnIGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL2ltYWdlcy9tZS5qcGcnIGNsYXNzTmFtZT0nYXZhdGFyJyAvPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTZ9IGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cclxuICAgICAgICAgICAgIDxSb3c+SmFpbWUgU2FsYXphciBMYWhlcmE8L1Jvdz5cclxuICAgICAgICAgICAgIDxSb3c+UlBBIERldmVsb3BlciBhdCBFRFAgU29sYXI8L1Jvdz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezh9IGNsYXNzTmFtZT0nY29udGFjdCc+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PSdyaWdodCcgdGl0bGU9J0NvcHkgbXkgZW1haWwgdG8geW91ciBjbGlwYm9hcmQnIGF1dG9BZGp1c3RPdmVyZmxvdz17ZmFsc2V9ID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPSdtYWlsJyBjbGFzc05hbWU9J2xvZ28nIG9uQ2xpY2s9e2NvcHlFbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICBDb25uZWN0XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9J3JpZ2h0JyB0aXRsZT0nT3BlbiBteSBwcm9maWxlIGluIGEgbmV3IHRhYicgYXV0b0FkanVzdE92ZXJmbG93PXtmYWxzZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vbGlua2VkaW4uY29tL2luL2phaW1lLXNhbGF6YXItbGFoZXJhJyB0YXJnZXQ9J19ibGFuayc+PEljb24gdHlwZT0nbGlua2VkaW4nIGNsYXNzTmFtZT0nbG9nbycgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgQ2hlY2tvdXRcclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD0ncmlnaHQnIHRpdGxlPSdPcGVuIG15IHJlcG8gaW4gYSBuZXcgdGFiJyBhdXRvQWRqdXN0T3ZlcmZsb3c9e2ZhbHNlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2pzYWxhejE5ODknIHRhcmdldD0nX2JsYW5rJz48SWNvbiB0eXBlPSdnaXRodWInIGNsYXNzTmFtZT0nbG9nbycgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbikiLCJpbXBvcnQgeyBNZW51LCBJY29uLCBUb29sdGlwLCBBbmNob3IgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgR3JhZHVhdGlvbkljb24gZnJvbSAnLi4vcHVibGljL3N0YXRpYy9ncmFkdWF0aW9uLWhhdC5zdmcnXHJcbmltcG9ydCBCcmllZmNhc2VJY29uIGZyb20gJy4uL3B1YmxpYy9zdGF0aWMvYnJpZWZjYXNlLnN2ZydcclxuXHJcblxyXG5pbXBvcnQgJy4vTXlNZW51LmNzcydcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudVxyXG5jb25zdCB7IExpbmsgfSA9IEFuY2hvclxyXG5cclxuXHJcbmltcG9ydCB7IGNvcHlFbWFpbCB9IGZyb20gJy4uL2hlbHBlcnMvY29weUVtYWlsJ1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IHRpbGVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9NeUNvbnRlbnREYXRhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7IGNvbnNvbGUubG9nKCdjbGljayAnLCBlKSB9XHJcblxyXG5cdGNvbnN0IFtzdWJtZW51SG92ZXJlZCwgc2V0U3VibWVudUhvdmVyZWRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcblx0ZnVuY3Rpb24gb3BlbkhpZ2hsaWdodChpZCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsaWNrKClcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNvbGxhcHNlU2lkZShldnQpIHtcclxuXHRcdGlmIChldnQudGFyZ2V0LmlkID09ICdtZW51LWJvcmRlcicpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0NsaWNrIG9uIG1lbnUtYm9yZGVyJylcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW50LWxheW91dC1zaWRlci10cmlnZ2VyJylbMF0uY2xpY2soKVxyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoaWdobGlnaHRUcmlnZ2VyKGV2dCkge1xyXG5cdFx0aWYgKGV2dC50YXJnZXQuaWQgPT0gJ21lbnUtYm9yZGVyJykge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnbW91c2VJbiBvdmVyIG1lbnUtYm9yZGVyJylcclxuXHRcdFx0ZXZ0LnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJ1xyXG5cdFx0XHRldnQudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB1bkhpZ2hsaWdodFRyaWdnZXIoZXZ0KSB7XHJcblx0XHRpZiAoZXZ0LnRhcmdldC5pZCA9PSAnbWVudS1ib3JkZXInKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdtb3VzZU91dCBvdmVyIG1lbnUtYm9yZGVyJylcclxuXHRcdFx0ZXZ0LnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpJ1xyXG5cdFx0XHRldnQudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J21lbnUtYm9yZGVyJyBpZD0nbWVudS1ib3JkZXInIG9uQ2xpY2s9e2NvbGxhcHNlU2lkZX0gb25Nb3VzZUVudGVyPXtoaWdobGlnaHRUcmlnZ2VyfSBvbk1vdXNlTGVhdmU9e3VuSGlnaGxpZ2h0VHJpZ2dlcn0+XHJcblx0XHRcdDxNZW51XHJcblx0XHRcdFx0b25DbGljaz17aGFuZGxlQ2xpY2t9XHJcblx0XHRcdFx0Ly8gc3R5bGU9e3sgd2lkdGg6IDI1NiB9fVxyXG5cdFx0XHRcdC8vIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfVxyXG5cdFx0XHRcdGRlZmF1bHRTZWxlY3RlZEtleXM9e1tdfVxyXG5cdFx0XHRcdGRlZmF1bHRPcGVuS2V5cz17WydoaWdobGlnaHRzJ119XHJcblx0XHRcdFx0bW9kZT1cImlubGluZVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8U3ViTWVudVxyXG5cdFx0XHRcdFx0a2V5PVwiY29udGFjdFwiXHJcblx0XHRcdFx0XHR0aXRsZT17PD48SWNvbiB0eXBlPVwibWFpbFwiIC8+PHNwYW4+Q29udGFjdDwvc3Bhbj48Lz59XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCJjLWVtYWlsXCIgb25DbGljaz17Y29weUVtYWlsfT5cclxuXHRcdFx0XHRcdFx0PFRvb2x0aXAgcGxhY2VtZW50PSdyaWdodCcgdGl0bGU9J0NvcHkgbXkgZW1haWwgdG8geW91ciBjbGlwYm9hcmQnIGF1dG9BZGp1c3RPdmVyZmxvdz17ZmFsc2V9ID5cclxuXHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0RW1haWxcclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiYy1saW5rZWRpblwiPlxyXG5cdFx0XHRcdFx0XHQ8VG9vbHRpcCBwbGFjZW1lbnQ9J3JpZ2h0JyB0aXRsZT0nT3BlbiBteSBwcm9maWxlIGluIGEgbmV3IHRhYicgYXV0b0FkanVzdE92ZXJmbG93PXtmYWxzZX0gPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPSdodHRwczovL2xpbmtlZGluLmNvbS9pbi9qYWltZS1zYWxhemFyLWxhaGVyYScgdGFyZ2V0PSdfYmxhbmsnPlxyXG5cdFx0XHRcdFx0XHRcdExpbmtlZEluXHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImMtZ2l0aHViXCI+XHJcblx0XHRcdFx0XHRcdDxUb29sdGlwIHBsYWNlbWVudD0ncmlnaHQnIHRpdGxlPSdPcGVuIG15IHJlcG8gaW4gYSBuZXcgdGFiJyBhdXRvQWRqdXN0T3ZlcmZsb3c9e2ZhbHNlfSA+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9qc2FsYXoxOTg5JyB0YXJnZXQ9J19ibGFuayc+XHJcblx0XHRcdFx0XHRcdFx0R2l0SHViXHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9Ub29sdGlwPiAgXHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHQ8L1N1Yk1lbnU+XHJcblx0XHRcdFx0PFN1Yk1lbnVcclxuXHRcdFx0XHRcdGtleT1cImJpb1wiXHJcblx0XHRcdFx0XHR0aXRsZT17PD48SWNvbiB0eXBlPVwidXNlclwiIC8+PHNwYW4+QmlvPC9zcGFuPjwvPn1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImItYWJvdXRcIj5cclxuXHRcdFx0XHRcdFx0PEFuY2hvciBvZmZzZXRUb3A9ezMwfSBhZmZpeD17ZmFsc2V9PlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjYmlvXCIgdGl0bGU9J0Fib3V0JyAvPlxyXG5cdFx0XHRcdFx0XHQ8L0FuY2hvcj5cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCJiLWN2XCI+XHJcblx0XHRcdFx0XHRcdDxUb29sdGlwIHBsYWNlbWVudD0ncmlnaHQnIHRpdGxlPSdEb3dubG9hZCBhcyBQREYnIGF1dG9BZGp1c3RPdmVyZmxvdz17ZmFsc2V9ID5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPSdzdGF0aWMvQ1YgLSBKYWltZSBTYWxhemFyIExhaGVyYS5wZGYnIHRpdGxlPSdDViAtIEphaW1lIFNhbGF6YXIgTGFoZXJhJyBkb3dubG9hZD0nQ1YgLSBKYWltZSBTYWxhemFyIExhaGVyYSc+XHJcblx0XHRcdFx0XHRcdFx0XHRDVlxyXG5cdFx0XHRcdFx0XHRcdDwvYT4gXHJcblx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdDwvU3ViTWVudT5cclxuXHRcdFx0XHQ8U3ViTWVudVxyXG5cdFx0XHRcdFx0a2V5PVwiaGlnaGxpZ2h0c1wiXHJcblx0XHRcdFx0XHR0aXRsZT17PD48SWNvbiB0eXBlPVwidHJvcGh5XCIgLz48c3Bhbj5IaWdobGlnaHRzPC9zcGFuPjwvPn1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImgtcnBhXCIgXHRcdG9uQ2xpY2s9eygpID0+IG9wZW5IaWdobGlnaHQodGlsZXMucnBhLnRpdGxlKX0+UlBBPC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImgtbWFzdGVyXCJcdG9uQ2xpY2s9eygpID0+IG9wZW5IaWdobGlnaHQodGlsZXMucm9ib3QudGl0bGUpfT5NYXN0ZXIncyBUaGVzaXM8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiaC1zb2xhclwiIFx0b25DbGljaz17KCkgPT4gb3BlbkhpZ2hsaWdodCh0aWxlcy5zb2xhci50aXRsZSl9PlNvbGFyPC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImgtZW5nbGlzaFwiXHRvbkNsaWNrPXsoKSA9PiBvcGVuSGlnaGxpZ2h0KHRpbGVzLmVuZ2xpc2gudGl0bGUpfT5FbmdsaXNoPC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImgtcGxjXCJcdFx0b25DbGljaz17KCkgPT4gb3BlbkhpZ2hsaWdodCh0aWxlcy5ib2xsb3MudGl0bGUpfT5QTEM8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwiaC1kb2JvdFwiIFx0b25DbGljaz17KCkgPT4gb3BlbkhpZ2hsaWdodCh0aWxlcy5kb2JvdC50aXRsZSl9PkRvYm90PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0PC9TdWJNZW51PlxyXG5cdFx0XHRcdDxTdWJNZW51XHJcblx0XHRcdFx0XHRrZXk9XCJwcm9mZXNzaW9uYWxcIlxyXG5cdFx0XHRcdFx0dGl0bGU9e1xyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0b25Nb3VzZU92ZXI9eygpPT5zZXRTdWJtZW51SG92ZXJlZCgncHJvZmVzc2lvbmFsJyl9IFxyXG5cdFx0XHRcdFx0XHRcdG9uTW91c2VPdXQ9eygpPT5zZXRTdWJtZW51SG92ZXJlZChmYWxzZSl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8QnJpZWZjYXNlSWNvbiBcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGN1c3RvbS1pY29uICR7c3VibWVudUhvdmVyZWQgPT09ICdwcm9mZXNzaW9uYWwnID8gJ2N1c3RvbS1pY29uLWhvdmVyJyA6ICdjdXN0b20taWNvbi1ub2hvdmVyJ31gfSBcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPlByb2Zlc3Npb25hbDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCJwLXNvbGFyMFwiPlxyXG5cdFx0XHRcdFx0XHQ8QW5jaG9yIG9mZnNldFRvcD17MzB9IGFmZml4PXtmYWxzZX0+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNzb2xhcjBcIiB0aXRsZT1cIlJQQSBEZXZlbG9wZXIgQCBFRFAgU29sYXJcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0FuY2hvcj5cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdFx0PE1lbnUuSXRlbSBrZXk9XCJwLXNvbGFyMVwiPlxyXG5cdFx0XHRcdFx0XHQ8QW5jaG9yIG9mZnNldFRvcD17MzB9IGFmZml4PXtmYWxzZX0+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNzb2xhcjFcIiB0aXRsZT1cIlBWIFNhbGVzIGFuZCBUZWNoXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9BbmNob3I+XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwicC1zb2xhcjJcIj5cclxuXHRcdFx0XHRcdFx0PEFuY2hvciBvZmZzZXRUb3A9ezMwfSBhZmZpeD17ZmFsc2V9PlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjc29sYXIyXCIgdGl0bGU9XCJQViBBcHByZW50aWNlXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9BbmNob3I+XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHQ8L1N1Yk1lbnU+XHJcblx0XHRcdFx0PFN1Yk1lbnVcclxuXHRcdFx0XHRcdGtleT1cImFjYWRlbWljc1wiXHJcblx0XHRcdFx0XHR0aXRsZT17XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlT3Zlcj17KCk9PnNldFN1Ym1lbnVIb3ZlcmVkKCdhY2FkZW1pY3MnKX0gXHJcblx0XHRcdFx0XHRcdFx0b25Nb3VzZU91dD17KCk9PnNldFN1Ym1lbnVIb3ZlcmVkKG51bGwpfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PEdyYWR1YXRpb25JY29uIFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgY3VzdG9tLWljb24gJHtzdWJtZW51SG92ZXJlZCA9PT0gJ2FjYWRlbWljcycgPyAnY3VzdG9tLWljb24taG92ZXInIDogJ2N1c3RvbS1pY29uLW5vaG92ZXInfWB9IFxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+QWNhZGVtaWNzPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImEtbWFzdGVyXCI+XHJcblx0XHRcdFx0XHRcdDxBbmNob3Igb2Zmc2V0VG9wPXszMH0gYWZmaXg9e2ZhbHNlfT5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiI21hc3RlcnNcIiB0aXRsZT1cIk1hc3RlcidzIERlZ3JlZVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvQW5jaG9yPlxyXG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cImEtdW5kZXJncmFkXCI+XHJcblx0XHRcdFx0XHRcdDxBbmNob3Igb2Zmc2V0VG9wPXszMH0gYWZmaXg9e2ZhbHNlfT5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiI3VuZGVyZ3JhZFwiIHRpdGxlPVwiQmFjaGVsb3IncyBEZWdyZWVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0FuY2hvcj5cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdDwvU3ViTWVudT5cclxuXHRcdFx0XHQ8U3ViTWVudVxyXG5cdFx0XHRcdFx0a2V5PVwic2tpbGxzXCJcclxuXHRcdFx0XHRcdHRpdGxlPXs8PjxJY29uIHR5cGU9J3N0YXInIC8+PHNwYW4+U2tpbGxzPC9zcGFuPjwvPn1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cInMtZW5nbGlzaFwiPlxyXG5cdFx0XHRcdFx0XHQ8QW5jaG9yIG9mZnNldFRvcD17MzB9IGFmZml4PXtmYWxzZX0+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIiNlbmdsaXNoXCIgdGl0bGU9XCJGbHVlbnQgRW5nbGlzaFwiIC8+XHJcblx0XHRcdFx0XHRcdDwvQW5jaG9yPlxyXG5cdFx0XHRcdFx0PC9NZW51Lkl0ZW0+XHJcblx0XHRcdFx0XHQ8TWVudS5JdGVtIGtleT1cInMtcnBhXCI+XHJcblx0XHRcdFx0XHRcdDxBbmNob3Igb2Zmc2V0VG9wPXszMH0gYWZmaXg9e2ZhbHNlfT5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiI3JwYVwiIHRpdGxlPVwiUlBBXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9BbmNob3I+XHJcblx0XHRcdFx0XHQ8L01lbnUuSXRlbT5cclxuXHRcdFx0XHRcdDxNZW51Lkl0ZW0ga2V5PVwicy1jb2RpbmdcIj5cclxuXHRcdFx0XHRcdFx0PEFuY2hvciBvZmZzZXRUb3A9ezMwfSBhZmZpeD17ZmFsc2V9PlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIjY29kaW5nXCIgdGl0bGU9XCJDb2RpbmdcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0FuY2hvcj5cclxuXHRcdFx0XHRcdDwvTWVudS5JdGVtPlxyXG5cdFx0XHRcdDwvU3ViTWVudT5cclxuXHRcdFx0PC9NZW51PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNvcHlFbWFpbCgpIHtcclxuICAgIGNvbnN0IGVtYWlsID0gJ2pzYWxhejE5ODlAZ21haWwuY29tJyAgICAgLy8gY291bGQgYWxzbyBiZSBzb21ldGhpbmcgbGlrZSBlbWFpbCA9IGV2LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMF0uaW5uZXJIVE1MXHJcblxyXG4gICAgbGV0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teSlcclxuICAgIGR1bW15LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbWFpbClcclxuICAgIGR1bW15LnNlbGVjdCgpXHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGR1bW15KVxyXG59IiwiLy8gaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcbmltcG9ydCAnLi9jdXN0b20tYW50ZC5jc3MnXHJcblxyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dFxyXG5cclxuaW1wb3J0IE15TWVudSBmcm9tICcuLi9jb21wb25lbnRzL015TWVudSdcclxuaW1wb3J0IE15SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTXlIZWFkZXInXHJcbmltcG9ydCBNeUNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUNvbnRlbnQnXHJcbmltcG9ydCBNeUZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL015Rm9vdGVyJ1xyXG5cclxuXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IGhhc1NpZGVyPXt0cnVlfSBjbGFzc05hbWU9J2JpZy1sYXlvdXQnPlxyXG4gICAgICAgICAgICA8U2lkZXIgXHJcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgLy8gY29sbGFwc2VkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb2xsYXBzZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkV2lkdGg9ezEwMH0gXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2lkZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE15TWVudSAvPlxyXG4gICAgICAgICAgICA8L1NpZGVyPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9J2hlYWQnPjxNeUhlYWRlciAvPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+PE15Q29udGVudCAvPjwvQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxGb290ZXI+PE15Rm9vdGVyIC8+PC9Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTQ2OS4zMzMgMTA2LjY2N0gzNjIuNjY3Vjg1LjMzM2MwLTIzLjUzMS0xOS4xMzUtNDIuNjY3LTQyLjY2Ny00Mi42NjdIMTkyYy0yMy41MzEgMC00Mi42NjcgMTkuMTM1LTQyLjY2NyA0Mi42Njd2MjEuMzMzSDQyLjY2N0MxOS4xMzUgMTA2LjY2NyAwIDEyNS44MDIgMCAxNDkuMzMzdjI3Ny4zMzNjMCAyMy41MzEgMTkuMTM1IDQyLjY2NyA0Mi42NjcgNDIuNjY3aDQyNi42NjdjMjMuNTMxIDAgNDIuNjY3LTE5LjEzNSA0Mi42NjctNDIuNjY3VjE0OS4zMzNjLS4wMDEtMjMuNTMxLTE5LjEzNi00Mi42NjYtNDIuNjY4LTQyLjY2NnpNMTcwLjY2NyA4NS4zMzNDMTcwLjY2NyA3My41NzMgMTgwLjI0IDY0IDE5MiA2NGgxMjhjMTEuNzYgMCAyMS4zMzMgOS41NzMgMjEuMzMzIDIxLjMzM3YyMS4zMzNIMTcwLjY2N1Y4NS4zMzN6bTMyMCAzNDEuMzM0YzAgMTEuNzYtOS41NzMgMjEuMzMzLTIxLjMzMyAyMS4zMzNINDIuNjY3Yy0xMS43NiAwLTIxLjMzMy05LjU3My0yMS4zMzMtMjEuMzMzVjI3MS40YzYuMzAxIDMuNjc0IDEzLjUyNyA1LjkzNCAyMS4zMzMgNS45MzRoMTcwLjY2N3YzMmExMC42NiAxMC42NiAwIDAwMTAuNjY3IDEwLjY2N2g2NGExMC42NiAxMC42NiAwIDAwMTAuNjY3LTEwLjY2N3YtMzJoMTcwLjY2N2M3LjgwNiAwIDE1LjAzMy0yLjI1OSAyMS4zMzMtNS45MzR2MTU1LjI2N3ptLTI1Ni0xMjhWMjU2aDQyLjY2N3Y0Mi42NjdoLTQyLjY2N3ptMjU2LTY0YzAgMTEuNzYtOS41NzMgMjEuMzMzLTIxLjMzMyAyMS4zMzNIMjk4LjY2N3YtMTAuNjY3QTEwLjY2IDEwLjY2IDAgMDAyODggMjM0LjY2NmgtNjRhMTAuNjYgMTAuNjYgMCAwMC0xMC42NjcgMTAuNjY3VjI1Nkg0Mi42NjdjLTExLjc2IDAtMjEuMzMzLTkuNTczLTIxLjMzMy0yMS4zMzN2LTg1LjMzM2MwLTExLjc2IDkuNTczLTIxLjMzMyAyMS4zMzMtMjEuMzMzaDQyNi42NjdjMTEuNzYgMCAyMS4zMzMgOS41NzMgMjEuMzMzIDIxLjMzM3Y4NS4zMzN6XCJcbn0pO1xuXG52YXIgU3ZnQnJpZWZjYXNlID0gZnVuY3Rpb24gU3ZnQnJpZWZjYXNlKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgdmlld0JveDogXCIwIDAgNTEyIDUxMlwiXG4gIH0sIHByb3BzKSwgX3JlZik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdmdCcmllZmNhc2U7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUxMS4wMyAzNDkuNzQ5YzAtMTkuNTA2LTEyLjUwOS0zNi4xMzYtMjkuOTI0LTQyLjMxM1YxNTIuNjI5bDMwLjg5Ni0xMi4zNDlMMjU1LjY2OSAzNy44MjUgMCAxNDAuMjhsMTIxLjAxOCA0OC40OTZ2NzEuMjAxYzAgMjEuOTQ5IDE1LjM4OCA0MS43MzEgNDMuMzI5IDU1LjcwMiAyNC42NDUgMTIuMzIzIDU3LjA3OSAxOS4xMDkgOTEuMzI5IDE5LjEwOXM2Ni42ODUtNi43ODYgOTEuMzI5LTE5LjEwOWMyNy45NDEtMTMuOTcxIDQzLjMyOS0zMy43NTIgNDMuMzI5LTU1LjcwMlYxODguOTFsNjAuODQ2LTI0LjMydjE0Mi44NDdjLTE3LjQxNSA2LjE3Ni0yOS45MjQgMjIuODA3LTI5LjkyNCA0Mi4zMTMgMCAxNy44NDQgMTAuNDY3IDMzLjI4NyAyNS41ODQgNDAuNTE2bC0yNC44MTYgNzQuNDQ4IDI4LjM4OSA5LjQ2MyAxNS43My00Ny4xODkgMTUuNzMgNDcuMTg5IDI4LjM4OS05LjQ2My0yNC44MTYtNzQuNDQ4YzE1LjExNS03LjIzMSAyNS41ODQtMjIuNjczIDI1LjU4NC00MC41MTd6bS0xNTAuNjE5LTg5Ljc3M2MwIDIxLjE4OC00NC43OSA0NC44ODYtMTA0LjczNCA0NC44ODYtNTkuOTQ0IDAtMTA0LjczNC0yMy42OTgtMTA0LjczNC00NC44ODZ2LTU5LjIwOWwxMDQuNzI3IDQxLjk2OCAxMDQuNzQyLTQxLjg2NnY1OS4xMDd6bS0xMDQuNzI3LTQ5LjQ3Mkw4MC40NDUgMTQwLjI4bDE3NS4yMzktNzAuMjI0IDE3NS42OTEgNzAuMjI0LTE3NS42OTEgNzAuMjI0em0yMTAuNDU5IDE1NC4yMDdjLTguMjUgMC0xNC45NjItNi43MTItMTQuOTYyLTE0Ljk2MnM2LjcxMi0xNC45NjIgMTQuOTYyLTE0Ljk2MiAxNC45NjIgNi43MTIgMTQuOTYyIDE0Ljk2Mi02LjcxMiAxNC45NjItMTQuOTYyIDE0Ljk2MnpcIlxufSk7XG5cbnZhciBTdmdHcmFkdWF0aW9uSGF0ID0gZnVuY3Rpb24gU3ZnR3JhZHVhdGlvbkhhdChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHZpZXdCb3g6IFwiMCAwIDUxMi4wMDEgNTEyLjAwMVwiXG4gIH0sIHByb3BzKSwgX3JlZik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdmdHcmFkdWF0aW9uSGF0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvcmVzdWx0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=