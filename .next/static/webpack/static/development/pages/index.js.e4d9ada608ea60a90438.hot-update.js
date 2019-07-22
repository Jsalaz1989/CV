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
  },
  solar1: {
    position: 'Photovoltaic Sales and Technical Support',
    date: 'Junes 2013 - June 2015',
    organization: 'Solar Solution LLC',
    location: 'Washington, DC, USA',
    bullets: ['PV system design (residential and commercial) with SketchUp, SolarNexus, and Google Earth', 'Automated document generation (JavaScript, Excel, VBA) of proposals, interconnection agreements, and contracts', 'Participation in local electrical inspections', 'On-site technical support and troubleshooting']
  },
  solar2: {
    position: 'Photovoltaic Apprentice',
    date: 'Junes 2013',
    organization: 'Earth Sun Energy Systems',
    location: 'West Virginia, USA',
    bullets: ['Assistance in the construction of a 24-panel system']
  }
};
var skills = {
  english: {
    name: 'Native English and Spanish',
    bullets: ['Native English (and Spanish) speaking, writing, and reading', 'Schooling abroad, especially university in the USA, as well as several years of working there']
  },
  software: {
    name: 'Software',
    bullets: ['UiPath (RPA Developer Advanced Certification 2019)', 'VBA macros in Word and Excel, JavaScript in Adobe PDF', 'Siemens STEP7 and WinCC', 'Google SketchUp', 'LabView', 'MATLAB', 'QUCS', 'FluidSIM', 'SAM']
  },
  programming: {
    name: 'Programming Languages',
    bullets: ['Python (especially Flask )', 'C (C++ if you count the Arduino language)', 'SQL (SQLite3, PostgreSQL)', 'Javascript (especially ReactJS )', 'HTML, CSS', 'Standard use of Linux, SSH, and git', 'Basic knowledge of x86 assembly']
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
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, experience.position), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, experience.date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, experience.organization, ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, experience.location)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, experience.bullets.map(function (bullet) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, bullet);
  })));
};

var Skill = function Skill(_ref2) {
  var skill = _ref2.skill;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    justify: "start",
    align: "middle",
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, skill.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, skill.bullets.map(function (detail) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, detail);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "user",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), "Bio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Graduate in MS Electromechanical Engineering at UPM (Spain) with a diverse background."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Interested in programming, robotics, automation (especially RPA), solar energy, and the environment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Continuous learner.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cv-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Feel free to download and distribute my CV")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "trophy",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), "Hightlights"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Take a look at some of my projects, achievements, and experiences throughout the years"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/robot/robot0.jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/solar/coolAndCasual.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/rpa/diploma0.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/bollos/wincc.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "preview-image",
    src: "../static/images/dobot/dobot0.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), "Academics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.masters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.coursesETSIDI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.coursesMC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.undergrad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.associates,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.montes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), "Professional"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.solar1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Experience, {
    experience: experiences.solar2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "star",
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), "Skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Skill, {
    skill: skills.english,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: 'url(../static/images/hacker2.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'right bottom'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Skill, {
    skill: skills.software,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Skill, {
    skill: skills.programming,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.e4d9ada608ea60a90438.hot-update.js.map