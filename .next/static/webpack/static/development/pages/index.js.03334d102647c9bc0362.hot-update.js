webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MyContent.js":
/*!*********************************!*\
  !*** ./components/MyContent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyContent.css */ "./components/MyContent.css");
/* harmony import */ var _MyContent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MyContent_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/graduation-hat.svg */ "./static/graduation-hat.svg");
/* harmony import */ var _static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/briefcase.svg */ "./static/briefcase.svg");
var _jsxFileName = "C:\\Users\\Jaime\\Documents\\CV\\components\\MyContent.js";






var experiences = {
  masters: {
    position: "Master's Degree in Electromechanical Engineering",
    date: 'February 2019',
    organization: 'ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    bullets: ["Master's Thesis - Autonomous Agricultural Robot", 'Programming Arduinos (I2C, MQTT, control PID) and Raspberry Pis (Flask, MongoDB)', 'Programming Siemens PLC with STEP7 y WinCC', 'Programming with NI LabView', 'Programming robot kinematics with MATLAB', 'Simulation of electrical (QUCS) and mechanical (Festo FluidSIM, SAM) systems']
  },
  coursesETSIDI: {
    position: 'Undergraduate courses',
    date: 'Fall 2015 - Spring 2016',
    organization: 'ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    bullets: ['Electronics, Automation, Circuit Theory, Thermodynamics, Fluids Mechanics']
  },
  coursesMC: {
    position: 'Undergraduate courses',
    date: 'Spring 2014 - Spring 2015',
    organization: 'Montgomery College',
    location: 'Maryland, USA',
    bullets: ['Differential Equations, Physics III']
  },
  undergrad: {
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
    bullets: []
  },
  montes: {
    position: "Bachelor's Degree in Forestry Engineering",
    date: 'Spring 2009',
    organization: 'Montgomery College',
    location: 'Maryland, USA',
    bullets: ['First and second year before transferring to the United States']
  }
};

var Experience = function Experience(_ref) {
  var experience = _ref.experience;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, experience.position), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, experience.date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, experience.organization, ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, experience.location)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, experience.bullets.map(function (bullet) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, bullet);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "user",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), "Bio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Graduate in MS Electromechanical Engineering at UPM (Spain) with a diverse background."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Interested in programming, robotics, automation (especially RPA), solar energy, and the environment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Continuous learner.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cv-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Feel free to download and distribute my CV")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "trophy",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), "Hightlights"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Take a look at some of my projects, achievements, and experiences throughout the years"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/robot/robot0.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/solar/coolAndCasual.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/rpa/diploma0.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/bollos/wincc.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/dobot/dobot0.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), "Academics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.masters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.coursesETSIDI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.coursesMC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.undergrad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.associates,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.montes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), "Professional"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.masters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.coursesETSIDI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.03334d102647c9bc0362.hot-update.js.map