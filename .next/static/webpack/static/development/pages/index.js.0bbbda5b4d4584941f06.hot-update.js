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
/* harmony import */ var _MyComponentData_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyComponentData.css */ "./components/MyComponentData.css");
/* harmony import */ var _MyComponentData_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MyComponentData_css__WEBPACK_IMPORTED_MODULE_0__);

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
    paragraphs: ["I learned English at a young age in bilingual schools (in Spanish-speaking countries) as well as regular schools \n            (in English-speaking countries). Later on I finished my undergraduate degree at the University of Maryland, \n            College Park, near Washington, DC.", "I had worked at different jobs for several years throughout my university studies and immediately after graduation I was\n            offered a position in Washington, DC.", "I can speak, read, and write proficiently in English (and, of course, also in Spanish) but I will let the video do the \n            talking (pun intended)"],
    slides: [{
      source: 'https://www.youtube.com/embed/aH_a2Mnv2xY',
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
    bullets: ["Master's Thesis - <span class='template-link' onclick=\"document.getElementById('".concat(tiles.robot.title, "').click()\">Autonomous Agricultural Robot</span>"), 'Programming Arduinos (I2C, MQTT, control PID) and Raspberry Pis (Flask, MongoDB)', "Programming Siemens PLC with <span class='template-link' onclick=\"document.getElementById('".concat(tiles.bollos.title, "').click()\">STEP7 and WinCC</span>"), 'Programming with NI LabView', "Programming <span class='template-link' onclick=\"document.getElementById('".concat(tiles.dobot.title, "').click()\">robot kinematics</span> with MATLAB"), 'Simulation of electrical (QUCS) and mechanical (Festo FluidSIM, SAM) systems']
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
    bullets: ["<span class='template-link' onclick=\"document.getElementById('".concat(tiles.solar.title, "').click()\">PV system design</span> (residential and commercial) with SketchUp, SolarNexus, and Google Earth"), 'Automated document generation (JavaScript, Excel, VBA) of proposals, interconnection agreements, and contracts', 'Participation in local electrical inspections', 'On-site technical support and troubleshooting']
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
    bullets: ["<span class='template-link' onclick=\"document.getElementById('".concat(tiles.english.title, "').click()\">Native English</span> (and Spanish) speaking, reaading, and writing"), 'Schooling abroad, especially university in the USA, as well as several years of working there']
  },
  software: {
    id: 'rpa',
    name: 'Software',
    bullets: ["<span class='template-link' onclick=\"document.getElementById('".concat(tiles.rpa.title, "').click()\">UiPath</span> RPA Developer Advanced Certification 2019"), 'VBA macros in Word and Excel, JavaScript in Adobe PDF', 'Siemens STEP7 and WinCC', 'Google SketchUp', 'LabView', 'MATLAB', 'QUCS', 'FluidSIM', 'SAM']
  },
  coding: {
    id: 'coding',
    name: 'Programming Languages',
    bullets: ["<span class='template-link' onclick=\"document.getElementById('".concat(tiles.robot.title, "').click()\">Python</span> (especially Flask)"), 'C (C++ if you count the Arduino language)', 'SQL (SQLite3, PostgreSQL)', 'Javascript (especially ReactJS)', 'HTML, CSS', 'Standard use of Linux, SSH, and git', 'Basic knowledge of x86 assembly (AT&T)']
  }
};

/***/ })

})
//# sourceMappingURL=index.js.0bbbda5b4d4584941f06.hot-update.js.map