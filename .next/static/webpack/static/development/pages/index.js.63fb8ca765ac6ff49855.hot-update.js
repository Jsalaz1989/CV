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
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, experience.position), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, experience.date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, experience.organization, ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, experience.location)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, experience.bullets.map(function (bullet) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
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
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "user",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), "Bio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Graduate in MS Electromechanical Engineering at UPM (Spain) with a diverse background."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Interested in programming, robotics, automation (especially RPA), solar energy, and the environment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Continuous learner.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cv-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Feel free to download and distribute my CV")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "trophy",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), "Hightlights"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Take a look at some of my projects, achievements, and experiences throughout the years"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/robot/robot0.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/solar/coolAndCasual.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/rpa/diploma0.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/bollos/wincc.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/dobot/dobot0.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), "Academics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.masters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.coursesETSIDI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.coursesMC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.undergrad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.63fb8ca765ac6ff49855.hot-update.js.map