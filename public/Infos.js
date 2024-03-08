
const infos = [{
    title: "Programming languages",
    desc: ["Python, Javascript, C, C#,..."],
    imgSrc: "/images/coding.png"
  }, {
    title: "Frameworks",
    desc: ["ReactJS, ExpressJS, .Net, Bootstrap, TailwindCSS,..."],
    imgSrc: "/images/cogwheel.png"
  }, {
    title: "Databases",
    desc: ["NoSQL: MongoDB.", "RDBMS: PostgreSQL, SQL server."],
    imgSrc: "images/database.png"
  }, {
    title: "Miscellaneous",
    desc: ["Version Control (Git, Github).", 
    "IDEs (e.g., Visual Studio Code & PyCharm)", 
    "RESTful APIs.",],
    imgSrc: "images/box.png"
  }
]

const projects = [{
  title: "Gemini Telegram ChatBot",
  desc: ["Bored? Chat with a banana! Remember to login first."],
  imgSrc: "images/exclusive/pproject.png",
  link: "https://t.me/friendlyM_Bot",
  personal: true
},
{
  title: "Gym center management",
  desc: ["Fully functional CRUD application written in C#."],
  imgSrc: "images/exclusive/sproject.png",
  link: "pdfs/sproject.pdf",
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
  href: "https://www.linkedin.com/in/cnhg/",
  img: "images/SM/linkedin.png"
},
{
  name: "Github",
  href: "https://github.com/connorngr",
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