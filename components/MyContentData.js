import "./MyComponentData.css";

export const tiles = {
    robot: {
        title: "Autonomous Agricultural Robot",
        source: "../static/images/robot/robot0.jpeg",
        paragraphs: [
            `The robot is controlled via the website (Flask), storing and reporting data from the SQL database. 
            The server or user communicates with the robot through MQTT and can execute manual and autonomous operations from the webapp.
            In autonomous mode, it compares its GPS location using a Raspberry Pi module capable of RTK to navigate by itself to an objective point 
            designated on the map, avoiding obstacles in its way.`,
            `It is made up of:`,
        ],
        bullets: [
            "2 Arduinos and 2 Raspberry Pis",
            "brushed DC motors (12 V)",
            "linear actuator",
            "servomotors",
            "GPS module (Real Time Kinematic mode)",
            "soil sensor (temp, humidity, salinity, etc.)",
            "ultrasonic sensors",
            "magnetometer",
            "webcam (for manual teleoperation and for autonomous RGB detection)",
            "motorcycle battery (with an automatic shutoff system)",
            "solar panels (2 x 12 V = 24 V) and MPPT charger",
        ],
        slides: [
            {
                source: "robot/robot0.jpeg",
                description: "General view",
            },
            {
                source: "robot/robot1.jpeg",
                description: "Using a phone's GPS for autonomous navigation",
            },
            {
                source: "robot/robot2.jpeg",
                description:
                    "A RPi handles navigation while the other takes on the sampling",
            },
            {
                source: "robot/robot3.jpeg",
                description:
                    "An MPPT charger replenishing the battery with the solar panels",
            },
            {
                source: "robot/robot4.jpeg",
                description:
                    "A relay and Arduino interrupts allow for an automatic disconnect",
            },
            {
                source: "https://www.youtube.com/embed/3SSKflnLTFM",
                description: "Obstacle avoidance",
            },
            {
                source: "https://www.youtube.com/embed/Rk9-UadbINs",
                description:
                    'Executing a complete cycle around and inside a "farm plot"',
            },
            {
                source: "https://www.youtube.com/embed/OWlBNlxA_rI",
                description: "Farm plot creation",
            },
            {
                source: "https://www.youtube.com/embed/FOV5NGDlYEM",
                description: "Manual mode",
            },
            {
                source: "https://www.youtube.com/embed/QPjmQsKv16o",
                description:
                    "Navigation between rows and a safety stop when confronted with a sudden obstacle",
            },
            {
                source: "https://www.youtube.com/embed/L75-gIPdzL8",
                description:
                    "Cage movement to allow for sampling with the linear actuator",
            },
        ],
    },
    solar: {
        title: "Backoffice Technician",
        source: "../static/images/solar/coolAndCasual.jpg",
        paragraphs: [
            `I began as a solar sales representative, climbing up on rooftops for measurements and designing residential 
            systems to propose to our customers. It was a great forray into the world of technology, consulting, and construction.`,
            `Over time I gained an interest in the technical side of the office as well as our products. I decided I wanted to 
            understand them better, which led me to embark on my Master's education in the following years. This implied taking 
            a few evening classes for general engineering courses at a local community college while working (!) so I could start building 
            a solid technical base. When I returned to Madrid I continued this preparatory stage at the 'Universidad Poltécnica de Madrid'
            to ensure I could be successful in getting my Master's degree.`,
            `While at this position, in the field, I would help diagnose technical issues in our installations, such as a faulty 
            inverter. At the office, I learned about our day-to-day tasks and business flows, and I imagined these could be 
            optimized. So I began playing around with Excel macros (VBA) and simple JavaScript in PDFs to automatically generate 
            proposals, electric utility interconnection applications, and anything I could get my hands on. Back then I wasn't 
            aware of the booming RPA industry so nowadays I hope to apply Python and JS scripts to my tasks, as well as a proper 
            RPA suite like UiPath or BluePrism.`,
        ],
        slides: [
            {
                source: "solar/coolAndCasual.jpg",
                description: "At the office, with less hair than now",
            },
            {
                source: "solar/withMayor.jpg",
                description:
                    "Municipal award for most solar installations with the Mayor of Washington, DC",
            },
            {
                source: "solar/onRoof.jpg",
                description:
                    "At one of our commercial-scale installations with some coworkers and crew members",
            },
        ],
    },
    rpa: {
        title: "Robotic Process Automation (RPA)",
        source: "../static/images/rpa/diploma0.jpg",
        paragraphs: [
            `Apart from general Bash, PowerShell, Python, and JS scripting, I can deploy UiPath robots to perform to many tasks.`,
            `This RPA suite provides a graphical programming environment extensible with VB.NET scripting to automate processes involving 
            text, images, forms, etc. I am always impressed with its AI capabilities when extracting information from 
            scanned documents, websites, and even virtual machines.`,
            `UiPath offers an Advanced Certification consisting of a timed theoretical and practical exam, which I hold since March 2019.`,
        ],
        slides: [
            {
                source: "https://www.youtube.com/embed/Z-ZkLzqqOyk",
                description:
                    "Example of Dispatcher and Perfomer both using the ReFramework to generate a yearly report",
            },
            {
                source: "rpa/diploma0.jpg",
                description: "Advanced Certification Degree",
            },
            {
                source: "https://www.youtube.com/embed/oqmOZMgzT6w",
                description:
                    "Extracting client information to generate a hash code and update the database",
            },
            {
                source: "https://www.youtube.com/embed/WkRhHXbwMwk",
                description:
                    "Simple testing steps to check a workflow from one of the Academy assignments",
            },
            {
                source: "rpa/diploma1.jpg",
                description: "UiPath Fundamentals",
            },
            {
                source: "rpa/diploma2.jpg",
                description:
                    "Proficiency with their admin dashboard (UiPath Orchestrator)",
            },
            {
                source: "rpa/diploma3.jpg",
                description:
                    "Understanding their professional project framework (REFramework) and flows",
            },
        ],
    },
    english: {
        title: "Fluent English",
        source: "../static/images/english.png",
        paragraphs: [
            `I learned English at a young age in bilingual schools (in Spanish-speaking countries) as well as regular schools 
            (in English-speaking countries). Later on I finished my undergraduate degree at the University of Maryland, 
            College Park, near Washington, DC.`,
            `I had worked at different jobs for several years throughout my university studies and immediately after graduation I was
            offered a position in Washington, DC.`,
            `I can speak, read, and write proficiently in English (and, of course, also in Spanish) but I will let the video do the 
            talking (pun intended)`,
        ],
        slides: [
            {
                source: "https://www.youtube.com/embed/aH_a2Mnv2xY",
                description:
                    "An example of my English and Spanish speaking level",
            },
        ],
    },
    bollos: {
        title: "Industrial Automation",
        source: "../static/images/bollos/wincc.jpg",
        paragraphs: [
            `This project involved programming a real PLC (Siemens 313C) with STEP7. It can be controlled manually with a 
            physical interface, although it is best monitored and controlled remotely with a WinCC front end.`,
            `Nowadays I would hope to upgrade to Siemen's TIA Portal for a smoother integration with SCADA.`,
        ],
        slides: [
            {
                source: "bollos/wincc.jpg",
                description: "SCADA with Siemens WinCC",
            },
            {
                source: "bollos/grafcet.jpg",
                description: "Grafcet diagram of the state machine",
            },
        ],
    },
    dobot: {
        title: "Master´s Internship",
        source: "../static/images/dobot/dobot0.jpg",
        paragraphs: [
            `Our robotics professor asked a colleague and I to produce a series of laboratory exercises for his undergraduate 
            classes. The university had just purchased a couple of Dobot Magician robotic arms and we were in charge of finding 
            out how it worked and how we could make students suffer with it.`,
            `We came up with exercises regarding the robot's direct and inverse kinematics to execute simple routines such as 
            drawing an arc on a piece of paper. We also delved a bit into the Jacobian matrices to study the robot's velocities 
            and we ultimately asked the students to create a little process to pick up an item, manipulate and move it around in 
            a certain trajectory, to finally drop the object in a specified spot. The robot was controlled through both its 
            proprietary software as well as through Matlab scripts accessing the vendor's API.`,
            `I'm a strong believer in learning with real-life practice and I was glad to apply the knowledge gained in my 
            robotics course to this little robot. I'm even more glad to have communicated with the Machine and I, for one, 
            welcome our new robot overlords.`,
        ],
        slides: [
            {
                source: "dobot/dobot0.jpg",
                description: "Drawing an arc on a piece of paper",
            },
            {
                source: "dobot/dobot1.jpg",
                description: "The front page of the exercise packet",
            },
            {
                source: "dobot/dobot2.jpg",
                description: "The topics covered in the packet",
            },
            {
                source: "dobot/dobot3.jpg",
                description: "An example of an exercise in direct kinematics",
            },
            {
                source: "dobot/dobot4.jpg",
                description:
                    "The robot can be controlled through Matlab or via its proprietary software",
            },
            {
                source: "dobot/dobot5.jpg",
                description: "The designated trajectory",
            },
            {
                source: "dobot/dobot6.jpg",
                description: "...and the code to execute it",
            },
        ],
    },
};

export const experiences = {
    masters: {
        id: "masters",
        position: "Master's Degree in Electromechanical Engineering",
        date: "February 2019",
        organization:
            "ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid",
        location: "Madrid, Spain",
        sections: [
            {
                bullets: [
                    `Master's Thesis - <span class='template-link' onclick="document.getElementById('${tiles.robot.title}').click()">Autonomous Agricultural Robot</span>`,
                    "Programming Arduinos (I2C, MQTT, control PID) and Raspberry Pis (Flask, MongoDB)",
                    `Programming Siemens PLC with <span class='template-link' onclick="document.getElementById('${tiles.bollos.title}').click()">STEP7 and WinCC</span>`,
                    "Programming with NI LabView",
                    `Programming <span class='template-link' onclick="document.getElementById('${tiles.dobot.title}').click()">robot kinematics</span> with MATLAB`,
                    "Simulation of electrical (QUCS) and mechanical (Festo FluidSIM, SAM) systems",
                ],
            },
        ],
    },
    coursesETSIDI: {
        position: "Undergraduate Courses",
        date: "Fall 2015 - Spring 2016",
        organization:
            "ETS Ingeniería y Diseño Industrial, Universidad Politécnica de Madrid",
        location: "Madrid, Spain",
        sections: [
            {
                bullets: [
                    "Electronics, Automation, Circuit Theory, Thermodynamics, Fluids Mechanics",
                ],
            },
        ],
    },
    coursesMC: {
        position: "Undergraduate Courses",
        date: "Spring 2014 - Spring 2015",
        organization: "Montgomery College",
        location: "Maryland, USA",
        sections: [
            {
                bullets: ["Differential Equations, Physics III"],
            },
        ],
    },
    undergrad: {
        id: "undergrad",
        position: "Bachelor's Degree in Environmental Science and Technology",
        date: "December 2013",
        organization: "University of Maryland, College Park",
        location: "Maryland, USA",
        sections: [
            {
                bullets: [
                    "Graduated cum laude",
                    "Minored in Ecological Technology Design and Geographic Information Systems",
                    "Designed and constructed an anaerobic digestor for the university campus",
                    "Restoration of the Baltimore Harbor in collaboration with Biohabitats, Inc",
                ],
            },
        ],
    },
    associates: {
        position: "Associates's Degree in Environmental Science and Policy",
        date: "Spring 2011",
        organization: "Montgomery College",
        location: "Maryland, USA",
        sections: [
            {
                bullets: [
                    "First 2 years of my Bachelor's Degree completed at my local community college",
                ],
            },
        ],
    },
    montes: {
        position: "Bachelor's Degree in Forestry Engineering",
        date: "Spring 2009",
        organization:
            "ETS Ingeniería de Montes, Universidad Politécnica de Madrid",
        location: "Madrid, Spain",
        sections: [
            {
                bullets: [
                    "First and second year before transferring to the United States",
                ],
            },
        ],
    },
    rpa: {
        id: "rpa",
        position: "Automation and BO Technician",
        date: "November 2019 - December 2020",
        organization: "EDP Spain (Solar Division)",
        location: "Madrid, Spain",
        sections: [
            {
                description:
                    "Automation of business processes with UiPath and Python",
                bullets: [
                    //`<span class='template-link' onclick="document.getElementById('${tiles.solar.title}').click()">PV system design</span> (residential and commercial) with SketchUp, SolarNexus, and Google Earth`,
                    "Automated document batch generation: Excel, PDF",
                    "Web scraping with selenium, scrapy, beautiful soup, and requests",
                    "Google Maps interactions",
                    "Online form filling and file downloads with selenium",
                    "Downloading files from FTP server",
                    "Xlsx/xls/csv manipulations and conversions",
                    "Extraction and decryption of tarballs",
                    "Recurring emails (including attachments)",
                    "SAP desktop interactions with pyautogui",
                ],
            },
            {
                description:
                    "Proposal design and drafting for residential and small commercial PV installations",
                bullets: [
                    "Client energy profiling via hourly consumption curves or customer electric bills",
                    "Integration of energy production data from PVGIS (European Commission platform) into our simulations",
                    "Preliminary PV module layouts with SolarEdge Designer",
                    "System sizing based on client energy consumption, available space, solar irradiance, etc.",
                    "PV performance simulation: selfconsumption percentage, energy sellback, losses and degradation, electricity tariff, CAPEX, etc.",
                ],
            },
        ],
    },
    rpa1: {
        id: "rpa1",
        position: "RPA Programmer Analyst",
        date: "January 2021 - Present",
        organization:
            "John Bean Technologies Corporation, European Shared Services Center",
        location: "Madrid, Spain",
        sections: [
            {
                description:
                    "Automation of processes and data flows for the financial departments of the European and North American Shared Services Centers",
                bullets: [],
            },
            {
                description:
                    "API-based bots for automating and integrating the various products of the Microsoft Office suite via the Microsoft Graph API",
                bullets: [],
            },
            {
                description:
                    "Leverage Azure services such as Azure SQL, Queues, Functions for customization and extension beyond the capabilities of the Power Platform",
                bullets: [],
            },
            {
                description:
                    "Web automation with Blue Prism and Python (Selenium)",
                bullets: [
                    "Document upload and download to and from ERPs",
                    "Data entry into online forms",
                    "Exporting files from online reporting services",
                ],
            },
            {
                description:
                    "Email automation with Blue Prism, Python, and Power Automate",
                bullets: [
                    "Send and receive emails to and from users and shared mailboxes",
                    "Upload and download attachments",
                    "Tables and charts embedded in message bodies",
                ],
            },
            {
                description: "Data processing and delivery with Tableau",
                bullets: [
                    "Connection to SQL DBs and OneDrive Excel files",
                    "KPI reporting dashboards",
                    "Use of the Tableau REST API to integrate Tableau flows with external automations (eg. Power Automate flows)",
                ],
            },
            {
                description:
                    "Excel automation with Python, Blue Prism, VBA, Power Automate, Office Scripts",
                bullets: [
                    "Python (pandas, openpyxl, xlwings) and Office Scripts for custom data processing",
                    "Generation of massive upload files (eg. CSV)",
                ],
            },
            {
                description:
                    "Deployment and maintenance of bots on company virtual machines or Power Platform environments",
                bullets: [],
            },
            {
                description: "App creation (forms, DB storage) with Power Apps",
                bullets: [],
            },
            {
                description:
                    "Recurrent script (Python, PowerShell) executions with Windows Task Scheduler",
                bullets: [],
            },
            {
                description:
                    "Integration of different platforms such as SharePoint, OneDrive, and network drives",
                bullets: [],
            },
            {
                description:
                    "Project management and documentation with Jira and Confluence",
                bullets: [],
            },
            {
                description:
                    "Regular meetings with the various department heads in North America and Europe in a business analyst capacity (requirements gathering and project delivery)",
                bullets: [],
            },
        ],
    },
    solar0: {
        id: "solar0",
        position: "Backoffice Technician",
        date: "June 2013 - June 2015",
        organization: "Solar Solution LLC",
        location: "Washington, DC, USA",
        sections: [
            {
                bullets: [
                    "Automated document generation (JavaScript, Excel VBA) of proposals, interconnection agreements, and contracts",
                    "Personal pipeline management (Excel)",
                    "Rooftop measurements (including obstacles) in order to 3D model",
                    `<span class='template-link' onclick="document.getElementById('${tiles.solar.title}').click()">PV system design</span> (residential and commercial) with SketchUp and Google Earth`,
                    "Module string sizing to properly match inverter size with SMA Sunny Design",
                    "Participation in local electrical inspections",
                    "On-site and remote technical support and troubleshooting",
                ],
            },
        ],
    },
    solar1: {
        id: "solar1",
        position: "Photovoltaic Apprentice",
        date: "June 2013",
        organization: "Earth Sun Energy Systems",
        location: "West Virginia, USA",
        sections: [
            {
                bullets: [
                    "Assistance in the construction of a 24-panel system",
                ],
            },
        ],
    },
};

export const skills = {
    english: {
        id: "english",
        name: "Native English and Spanish",
        bullets: [
            `<span class='template-link' onclick="document.getElementById('${tiles.english.title}').click()">Native English</span> (and Spanish) speaking, reaading, and writing`,
            "Schooling abroad, especially university in the USA, as well as several years of working there",
        ],
    },
    software: {
        id: "software",
        name: "Software",
        bullets: [
            `<span class='template-link' onclick="document.getElementById('${tiles.rpa.title}').click()">UiPath</span> RPA Developer Advanced Certification 2019`,
            "MS Office (esp. VBA macros)",
            "Adobe PDF (esp. JavaScript)",
            "Siemens STEP7 and WinCC",
            "LabView",
            "MATLAB",
            "QUCS",
            "FluidSIM",
            "SAM",
        ],
    },
    coding: {
        id: "coding",
        name: "Programming Languages",
        bullets: [
            `Python: RPA and <span class="template-link" onclick="document.getElementById('${tiles.robot.title}').click()">mechatronics</span>`,
            "C",
            "SQL (SQLite3, PostgreSQL)",
            "Javascript (especially ReactJS)",
            "HTML, CSS",
            "Standard use of Linux, SSH, and git",
            "Basic knowledge of x86 assembly (AT&T)",
        ],
    },
};
