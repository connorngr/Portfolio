
const infos = [{
    title: "Programming languages",
    desc: ["Python, Javascript, C, C#,...", "Markup languages: HTML, CSS.", "Advanced concepts: DSA, OOP."],
    imgSrc: "/images/coding.png"
  }, {
    title: "Frameworks",
    desc: ["React, Node, Express, Flask, .Net for Windows Apps."],
    imgSrc: "/images/cogwheel.png"
  }, {
    title: "Databases",
    desc: ["NoSQL: To be filled", "RDBMS: SQL server."],
    imgSrc: "images/database.png"
  }, {
    title: "Miscellaneous",
    desc: ["Version Control (Git, Github).", "IDEs (e.g., Visual Studio Code & PyCharm)", "RESTful APIs."],
    imgSrc: "images/box.png"
  }
]

const projects = [{
  title: "Gemini Telegram ChatBot",
  desc: ["Built etc etc"],
  imgSrc: "images/exclusive/pproject.png",
  personal: true
},
{
  title: "Gym center management",
  desc: ["Built etc etc"],
  imgSrc: "images/exclusive/sproject.png",
  personal: false
}]

const routes = [{
    title: "Skills",
    href: "/skills",
},
{
    title: "Projects",
    href: "/projects",
},
{
    title: "Contact",
    href: "/contact",
}]

const links = [{
  name: "Linkedin",
  href: "https://www.freecodecamp.org/news/how-to-create-an-animated-hamburger-menu-in-react/",
  img: "images/SM/linkedin.png"
},
{
  name: "Github",
  href: "https://www.geeksforgeeks.org/how-to-create-mail-and-phone-link-in-html/",
  img: "images/SM/github.png"
},
{
  name: "Email",
  content: "hconnora@outlook.com",
  img: "images/SM/email.png"
},
{
  name: "Phone & Zalo",
  content: "+84 969327140",
  img: "images/SM/phone.png"
}]

export {infos, routes, links, projects};