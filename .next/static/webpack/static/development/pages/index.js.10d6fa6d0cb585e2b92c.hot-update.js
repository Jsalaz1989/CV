webpackHotUpdate("static\\development\\pages\\index.js",{

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
      src: 'solar/coolAndCasual.jpg',
      description: 'At the office, with less hair than now'
    }, {
      src: 'solar/withMayor.jpg',
      description: 'Municipal award for most solar installations with the Mayor of Washington, DC'
    }, {
      src: 'solar/onRoof.jpg',
      description: 'At one of our commercial-scale installations with some coworkers and crew members'
    }]
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

/***/ })

})
//# sourceMappingURL=index.js.10d6fa6d0cb585e2b92c.hot-update.js.map