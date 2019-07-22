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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile",
    onClick: function onClick() {
      return setOpen(!open);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "tile-image",
    src: tile.source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
    footer: null // maskClosable={true}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "space-around",
    align: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, tile.paragraphs.map(function (paragraph, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, paragraph);
  }), tile.bullets && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, tile.bullets.map(function (bullet, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, bullet);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, tile.slides.map(function (slide, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: key // style={{ backgroundImage: `url(static/images/${slide.source})` }}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, slide.source.includes('jpg') || slide.source.includes('jpeg') ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "slide-image",
      style: {
        backgroundImage: "url(static/images/".concat(slide.source, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
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
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, slide.description));
  }))))));
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: experience.id,
    className: "exp-skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "space-between",
    align: "middle",
    className: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, experience.position), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, experience.date)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, experience.organization, ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, experience.location)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, experience.bullets.map(function (bullet, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
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
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    type: "flex",
    justify: "start",
    align: "middle",
    className: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, skill.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, skill.bullets.map(function (detail, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
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
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    className: "divide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "user",
    className: "divider-icon",
    id: "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), "Bio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "Graduate in MS Electromechanical Engineering at UPM (Spain) with a diverse background."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "Interested in programming, robotics, automation (especially RPA), solar energy, and the environment."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Continuous learner."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cv-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "Feel free to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "../static/cv.pdf",
    title: "CV - Jaime Salazar Lahera",
    download: "CV - Jaime Salazar Lahera",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "download my CV"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "trophy",
    className: "divider-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), "Hightlights"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Take a look at some of my projects, achievements, and experiences through the years"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tiles-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].robot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].solar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].rpa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].bollos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tile, {
    tile: _MyContentData__WEBPACK_IMPORTED_MODULE_6__["tiles"].dobot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "blocking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, "I like to dabble in web programming and experiment with different technologies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "This interactive CV/portfolio is built with NextJS, a server-side rendering framework for ReactJS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "I have a hobby project at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://jplusplus.pythonanywhere.com/",
    title: "N2T",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "jplusplus.pythonanywhere.com"), ", where I'm trying to build a Single-Page Application (SPA) with a ReactJS frontend and a Flask (Python) backend"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_graduation_hat_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), "Academics"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: experiences.masters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: experiences.coursesETSIDI,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: experiences.coursesMC,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: experiences.undergrad,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: experiences.associates,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: experiences.montes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_briefcase_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }), "Professional"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: experiences.solar1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, {
    experience: experiences.solar2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "star",
    className: "divider-icon-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), "Skills"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: skills.english,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "skill-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: skills.software,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Skill, {
    skill: skills.coding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./components/MyContentData.js":
/*!*************************************!*\
  !*** ./components/MyContentData.js ***!
  \*************************************/
/*! exports provided: tiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tiles", function() { return tiles; });
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
    paragraphs: [""],
    slides: []
  },
  rpa: {
    title: 'Robotic Process Automation (RPA)',
    source: '../static/images/rpa/diploma0.jpg',
    paragraphs: [""],
    slides: []
  },
  bollos: {
    title: 'Industrial Automation',
    source: '../static/images/bollos/wincc.jpg',
    paragraphs: [""],
    slides: []
  },
  dobot: {
    title: "Master's Internship",
    source: '../static/images/dobot/dobot0.jpg',
    paragraphs: [""],
    slides: []
  }
};

/***/ })

})
//# sourceMappingURL=index.js.81fad6516d71110a793e.hot-update.js.map