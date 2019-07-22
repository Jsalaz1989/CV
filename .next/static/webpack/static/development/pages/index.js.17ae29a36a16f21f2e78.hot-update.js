webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MyContent.js":
/*!*********************************!*\
  !*** ./components/MyContent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyContent.css */ "./components/MyContent.css");
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MyContent_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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

  function simulateClick(e) {
    e.click();
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile",
    onClick: function onClick() {
      return setOpen(!open);
    },
    ref: simulateClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "tile-image",
    src: tile.source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
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
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "space-around",
    align: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, tile.paragraphs.map(function (paragraph, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, paragraph);
  }), tile.bullets && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, tile.bullets.map(function (bullet, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, bullet);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, tile.slides.map(function (slide, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: key // style={{ backgroundImage: `url(static/images/${slide.source})` }}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, slide.source.includes('jpg') || slide.source.includes('jpeg') ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "slide-image",
      style: {
        backgroundImage: "url(static/images/".concat(slide.source, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
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
        lineNumber: 79
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
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
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, experience.position), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, experience.date)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, experience.organization, ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, experience.location)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, experience.bullets.map(function (bullet, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
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
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "start",
    align: "middle",
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, skill.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, skill.bullets.map(function (detail, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
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
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    className: "divide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "user",
    className: "divider-icon",
    id: "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), "Bio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Graduate in MS Electromechanical Engineering at UPM (Spain) with a diverse background."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Interested in programming, robotics, automation (especially RPA), solar energy, and the environment."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Continuous learner."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cv-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Feel free to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "../static/cv.pdf",
    title: "CV - Jaime Salazar Lahera",
    download: "CV - Jaime Salazar Lahera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "download my CV"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "trophy",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), "Hightlights"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Take a look at some of my projects, achievements, and experiences through the years"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tiles-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].robot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].solar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].rpa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].english,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].bollos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].dobot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "blocking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "I like to dabble in full-stack web programming and experiment with different technologies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "This interactive CV/portfolio is built with NextJS, a server-side rendering framework for ReactJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "I have a hobby project at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://jplusplus.pythonanywhere.com/",
    title: "N2T",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "jplusplus.pythonanywhere.com"), ", where I'm trying to build a Single-Page Application (SPA) with a ReactJS frontend and a Flask (Python) backend"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), "Academics"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].masters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].coursesETSIDI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].coursesMC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].undergrad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].associates,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].montes,
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), "Professional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].solar1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["experiences"].solar2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "star",
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), "Skills"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["skills"].english,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "skill-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["skills"].software,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["skills"].coding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.17ae29a36a16f21f2e78.hot-update.js.map