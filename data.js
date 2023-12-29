import amogh from "./src/assets/testimonials/amogh.png";
import shivam from "./src/assets/testimonials/shivam.jpeg";
import rajat from "./src/assets/testimonials/rajat.jpeg";

export const menu = [
  {
    id: 1,
    menuItem: "Home",
  },
  {
    id: 2,
    menuItem: "About",
  },
  {
    id: 3,
    menuItem: "Projects",
  },
  {
    id: 4,
    menuItem: "Testimonials",
  },
  {
    id: 5,
    menuItem: "Contact",
  },
];

export const about = [
  {
    id: 1,
    title: "Work Experience",
    work: [
      {
        id: 1,
        title: "FullStack Engineer",
        company: "AEIDTH Technologies pvt. ltd.",
        timeRange: "Aug 2022 - Present",
      },
      {
        id: 2,
        title: "BIM Modeler",
        company: "Graebert Gmbh",
        timeRange: "May 2019 - Aug 2022",
      },
      {
        id: 3,
        title: "Design Engineer",
        company: "Tech X Innovations Self Startup",
        timeRange: "May 2018 - April 2019",
      },
    ],
    skill: null,
  },
  {
    id: 2,
    title: "Core Skills",
    work: null,
    skill:
      "JavaScript, HTML5, CSS3, Tailwind, Material UI, Axios, Node, Express, React, MongoDB, Python, Tkinter, Redux, CAD, Airtable, Asana, Jira, Project Management, Adobe Express, Adobe Primere pro, Parametric designing, BIM modeling, Scan to BIM, Autodesk AutoCAD, Autodesk Fusion, Autodesk Revit, Autodesk Recap ",
  },
  {
    id: 3,
    title: "Education",
    work: [
      {
        id: 1,
        title: "M.Tech Automobile",
        company: "Amity University, Noida",
        timeRange: "2016 - 2018",
      },
      {
        id: 2,
        title: "B.Tech Mechanical",
        company: "Indraprastha Engineering College, Ghaziabad",
        timeRange: "2012 - 2016",
      },
    ],
    skill: null,
  },
  {
    id: 4,
    title: "Publications",
    work: [
      {
        id: 1,
        title:
          "Reduction in Exhaust Emission Using Constantan Catalyst in the Diesel Engine",
        company: "Advances in Interdisciplinary Engineering pp 141–151",
        timeRange: "June, 2019",
      },
      {
        id: 2,
        title:
          "Optimizing the Performance of Catalytic Convertor Using Turbulence Devices in the Exhaust System",
        company: "Advances in Interdisciplinary Engineering pp 333–342",
        timeRange: "June, 2019",
      },
      {
        id: 3,
        title:
          "Optimizing the Performance of Catalytic Convertor Using Turbulence Devices in the Exhaust System",
        company: "Materials Today: Proceedings, Volume 5, Issue 2, Part 1",
        timeRange: "Jan, 2018",
      },
    ],
    skill: null,
  },
];

export const project = [
  {
    id: 1,
    cardTitle: "Web-Apps",
    cardDescription:
      "Collection of all my work in developing web-apps, during my journey from 2019 - present",
    projects: [
      {
        id: 1,
        title: "Social Media App",
        description:
          "A complete simulation of a social media application that involves the user to interact with the UI  ",
        stack: "React, MaterialUI, Formik, Yup, MERN",
        status: "in development",
        image: "./src/assets/projects/webApp/social.jpg",
        git: "https://github.com/Tanmay-Codes/Social-Media-UI",
        live: "https://tanmay-codes.github.io/SoclcialMedia-Demo/",
      },
      {
        id: 2,
        title: "Photography Portfolio website",
        description:
          "Website for a local photography firm in Uttar Pradesh, showcasing their high end photography skills and services.",
        stack: "HTML5, CSS3, vanilla JavaScript",
        status: "Completed",
        image: "./src/assets/projects/webApp/photography.png",
        git: "#",
        live: "https://www.arrtphotos.com/",
      },
      {
        id: 3,
        title: "Company Landing Page",
        description:
          "A complete Single Page Application, displaying all essential branding and content of a BIM modeling company ",
        stack: "React, HTML5, CSS3",
        status: "Completed",
        image: "./src/assets/projects/webApp/landing.png",
        git: "https://github.com/Tanmay-Codes/designendeavour",
        live: "#",
      },
      {
        id: 4,
        title: "JS Game Development : Ultimate Quiz App.",
        description:
          "This is an Ultimate Quiz Trivia app, Develop as a part of my JavaScript learning journey",
        stack: "HTML5, CSS3, JavaScript, REST API, DOM Manipulation",
        status: "Completed",
        image: "./src/assets/projects/webApp/quiz.png",
        git: "https://github.com/Tanmay-Codes/Ultimate-Quiz-JS",
        live: "https://tanmay-codes.github.io/Ultimate-Quiz-JS/",
      },
    ],
  },
  {
    id: 2,
    cardTitle: "Python",
    cardDescription:
      "Collection of all my work using Python and using PyCharm IDE",
    projects: [
      {
        id: 1,
        title: "Stock Analysis App SMA strategy",
        description:
          "An app that helps evaluating entry and exit points for the list of stocks based on the backtesting of the SMA strategy.",
        stack: "Python, Pandas, Yfinance, NSE",
        status: "Completed",
        image: "./src/assets/svg/python.svg",
        git: "https://github.com/Tanmay-Codes/PythonProjects/tree/master/My_Projects/SMA_TradingStrategy",
      },
      {
        id: 2,
        title: "Rename App.",
        description:
          "A complete GUI based installer app. This was developed as a part of project to be used inside the company and the installer file was created for easy distribution",
        stack: "Python, Tkinter, ",
        status: "Completed",
        image: "./src/assets/projects/python/Rename.png",
        git: "https://github.com/Tanmay-Codes/RenameProject",
      },
      {
        id: 3,
        title: "Pomodoro App.",
        description:
          "An app that helps incorporating simple pomodoro study focus technique, where work time is of 25 mins and 5 mins of break",
        stack: "Python, Tkinter",
        status: "Completed",
        image: "./src/assets/projects/python/Pomodoro.png",
        git: "https://github.com/Tanmay-Codes/PythonProjects/tree/master/Tkinter_projects/pomodoro-start",
      },
      {
        id: 4,
        title: "Password Manager",
        description:
          "A simple password manager app, that generates secure password for your website and log it to the text file that you can keep someplace safe to fetch your password later",
        stack: "Python, Tkinter",
        status: "Completed",
        image: "./src/assets/projects/python/PasswordManager.png",
        git: "https://github.com/Tanmay-Codes/PythonProjects/tree/master/Tkinter_projects/password-manager-start",
      },
      {
        id: 5,
        title: "Miles to KM",
        description:
          "A simple GUI based Convertor that takes user inputs in Miles and converts it into KM.",
        stack: "Python, Tkinter",
        status: "Completed",
        image: "./src/assets/projects/python/milesToKm.png",
        git: "https://github.com/Tanmay-Codes/PythonProjects/tree/master/Tkinter_projects/Miles%20to%20KM%20converter",
        live: "",
      },
      {
        id: 6,
        title: "Weather API project",
        description:
          "A simple weather API representing if you need to carry your umbrella or not!",
        stack: "Python, Request module, open weather map api",
        status: "Completed",
        image: "./src/assets/svg/python.svg",
        git: "https://github.com/Tanmay-Codes/PythonProjects/tree/master/WeatherAPIproject",
        live: "",
      },
      {
        id: 7,
        title: "Trivia Quiz API",
        description:
          "A simple Trivia quiz, a learning project to incorporate OOP concepts of Python and develop a quiz program",
        stack: "Python, Request, opentdb.com trivia api",
        status: "Completed",
        image: "./src/assets/svg/python.svg",
        git: "https://github.com/Tanmay-Codes/PythonProjects/tree/master/My_Projects/Trivia_Quiz",
      },
    ],
  },
  {
    id: 4,
    cardTitle: "SaaS",
    cardDescription:
      "Collection of all my work in developing web-apps, during my journey from 2019 - present",
    projects: [
      {
        id: 1,
        title: "Social Media App",
        description:
          "A complete simulation of a social media application that involves the user to interact with the UI  ",
        stack: "React, MaterialUI, Formik, Yup, MERN",
        status: "in development",
        image: "./src/assets/projects/webApp/social.jpg",
        git: "#",
        live: "#",
      },
    ],
  },
  {
    id: 3,
    cardTitle: "CAD",
    cardDescription:
      "Collection of all my work in developing web-apps, during my journey from 2019 - present",
    projects: [
      {
        id: 1,
        title: "Social Media App",
        description:
          "A complete simulation of a social media application that involves the user to interact with the UI  ",
        stack: "React, MaterialUI, Formik, Yup, MERN",
        status: "in development",
        image: "./src/assets/projects/webApp/social.jpg",
        git: "#",
        live: "#",
      },
    ],
  },
];

export const testimonial = [
  {
    id: 1,
    name: "Rajat Yadav",
    designation: "CEO",
    company: "AEIDTH Technologies pvt, ltd",
    image: rajat,
    quote:
      "Tanmay has been working amazingly well in providing spot on designs and has great attitude towards his co-workers. A great problem solver and can have calm nerves in event of tight deadlines and always comes up the solutions to the problems that comes ahead.",
  },
  {
    id: 2,
    name: "Shivam Mittal",
    designation: "Sr. Content Strategist",
    company: "Vavo Digital",
    image: shivam,
    quote:
      "Tanmay brings his entrepreneurial zeal and expertise in design and tech to any project he takes up. Highly recommended for anyone looking for a reliable developer.",
  },
  {
    id: 3,
    name: "Amogh Agrawal",
    designation: "CEO",
    company: "ArRT Photos",
    image: amogh,
    quote:
      "Tanmay's expertise and dedication were outstanding. He turned my vision into a stunning and functional website, always met deadlines, and was a pleasure to work with. ",
  },
];
