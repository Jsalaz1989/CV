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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyContent.css */ "./components/MyContent.css");
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MyContent_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/graduation-hat.svg */ "./static/graduation-hat.svg");
/* harmony import */ var _static_briefcase_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/briefcase.svg */ "./static/briefcase.svg");








var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\components\\MyContent.js";






var tiles = {
  robot: {
    title: 'Autonomous Agricultural Robot',
    source: '../static/images/robot/robot0.jpeg'
  },
  solar: {
    title: 'PV Sales and Tech Support',
    source: '../static/images/solar/coolAndCasual.jpg'
  },
  rpa: {
    title: 'Robotic Process Automation (RPA)',
    source: '../static/images/rpa/diploma0.jpg'
  },
  bollos: {
    title: 'Industrial Automation',
    source: '../static/images/bollos/wincc.jpg'
  },
  dobot: {
    title: "Master's Internship",
    source: '../static/images/dobot/dobot0.jpg'
  } // function enableTileOverflow() {
  //     console.log('enableTileOverflow()')
  //     document.getElementsByClassName('tiles-container')[0].style.overflow = 'visible'
  // }
  // function disableTileOverflow() {
  //     console.log('disableTileOverflow()')
  //     document.getElementsByClassName('tiles-container')[0].style.overflowY = 'visible'
  //     document.getElementsByClassName('tiles-container')[0].style.overflowX = 'scroll'
  // }

};

function enableTileOverflow() {
  console.log('enableTileOverflow()');
  document.getElementsByClassName('tiles-container')[0].style.clipath = '5%';
}

function disableTileOverflow() {
  console.log('disableTileOverflow()');
  document.getElementsByClassName('tiles-container')[0].style.left = 0;
}

var MyModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyModal, _React$Component);

  function MyModal() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      visible: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleOk", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleCancel", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyModal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "primary",
        onClick: this.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Open Modal"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        title: "Basic Modal",
        visible: this.state.visible,
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Some contents..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Some contents..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Some contents...")));
    }
  }]);

  return MyModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var Tile = function Tile(_ref) {
  var tile = _ref.tile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "tile",
    onClick: function onClick() {
      return setOpen(!open);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    className: "tile-image",
    src: tile.source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "tile-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "tile-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, tile.title))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }));
};

var experiences = {
  masters: {
    id: 'masters',
    position: "Master's Degree in Electromechanical Engineering",
    date: 'February 2019',
    organization: 'ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    bullets: ["Master's Thesis - Autonomous Agricultural Robot", 'Programming Arduinos (I2C, MQTT, control PID) and Raspberry Pis (Flask, MongoDB)', 'Programming Siemens PLC with STEP7 y WinCC', 'Programming with NI LabView', 'Programming robot kinematics with MATLAB', 'Simulation of electrical (QUCS) and mechanical (Festo FluidSIM, SAM) systems']
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

var Experience = function Experience(_ref2) {
  var experience = _ref2.experience;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    id: experience.id,
    className: "exp-skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, experience.position), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, experience.date)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, experience.organization, ", ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, experience.location)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, experience.bullets.map(function (bullet) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, bullet);
  })));
};

var Skill = function Skill(_ref3) {
  var skill = _ref3.skill;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    id: skill.id,
    className: "exp-skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    type: "flex",
    justify: "start",
    align: "middle",
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, skill.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, skill.bullets.map(function (detail) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, detail);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    className: "divide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    type: "user",
    className: "divider-icon",
    id: "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), "Bio"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, "Graduate in MS Electromechanical Engineering at UPM (Spain) with a diverse background."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, "Interested in programming, robotics, automation (especially RPA), solar energy, and the environment."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "Continuous learner."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "cv-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "Feel free to ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
    href: "../static/cv.pdf",
    title: "CV - Jaime Salazar Lahera",
    download: "CV - Jaime Salazar Lahera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "download my CV"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    type: "trophy",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), "Hightlights"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "Take a look at some of my projects, achievements, and experiences through the years"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "tiles-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Tile, {
    tile: tiles.robot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Tile, {
    tile: tiles.solar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Tile, {
    tile: tiles.rpa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Tile, {
    tile: tiles.bollos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Tile, {
    tile: tiles.dobot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "blocking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "I like to dabble in web programming and experiment with different technologies"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, "This interactive CV/portfolio is built with NextJS, a server-side rendering framework for ReactJS"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, "I have a hobby project at ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
    href: "http://jplusplus.pythonanywhere.com/",
    title: "N2T",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, "jplusplus.pythonanywhere.com"), ", where I'm trying to build a Single-Page Application (SPA) with a ReactJS frontend and a Flask (Python) backend"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }), "Academics"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Experience, {
    experience: experiences.masters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Experience, {
    experience: experiences.coursesETSIDI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Experience, {
    experience: experiences.coursesMC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Experience, {
    experience: experiences.undergrad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Experience, {
    experience: experiences.associates,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Experience, {
    experience: experiences.montes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }), "Professional"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Experience, {
    experience: experiences.solar1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Experience, {
    experience: experiences.solar2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
    type: "star",
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }), "Skills"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Skill, {
    skill: skills.english,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "skill-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Skill, {
    skill: skills.software,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Skill, {
    skill: skills.coding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=index.js.110781feed2a2408b939.hot-update.js.map