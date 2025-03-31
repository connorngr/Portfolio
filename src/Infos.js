
const infos = [{
  title: "Programming Languages",
  desc: [
    "Proficient: JavaScript, Python, Java",
    "Currently Learning: TypeScript, Go",
    "Interested in: Rust, Kotlin"
  ],
  imgSrc: "/images/coding.png"
}, {
  title: "Frameworks & Libraries",
  desc: [
    "Frontend: React.js, Next.js, Material-UI",
    "Backend: Spring Boot, Express.js, Node.js",
    "Actively exploring: Docker, Kubernetes",
  ],
  imgSrc: "/images/cogwheel.png"
}, {
  title: "Databases & Cloud",
  desc: [
    "NoSQL: MongoDB, Redis",
    "RDBMS: PostgreSQL, MySQL",
    "Cloud: Basic AWS services, eager to learn more cloud technologies"
  ],
  imgSrc: "images/database.png"
}, {
  title: "Development Tools & Practices",
  desc: [
    "Version Control: Git, GitHub (CI/CD pipelines)",
    "Development: VS Code, IntelliJ IDEA",
    "Methodologies: Agile/Scrum, Test-Driven Development",
    "Always learning: System Design, Software Architecture"
  ],
  imgSrc: "images/box.png"
}
]

const projects = [
  {
    title: "ByteStream",
    desc: ["Scrapes, summarizes, and categorizes the latest tech news using AI."],
    imgSrc: "images/projects/uc.jpg",
    link: "https://github.com/connorngr",
    personal: true,
    utilized: [
      "Next.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Gemini API",
      "Redis",
      "Tailwind CSS",
      "Docker"
    ]
  },  
  {
    title: "ReUzit",
    desc: ["A peer-to-peer marketplace for buying, selling, and trading goods and services."],
    imgSrc: "images/projects/ReUZit_logo.jpg",
    link: "https://github.com/connorngr",
    personal: false,
    utilized: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "WebSockets"]
  },
  {
    title: "InnerGlow",
    desc: [
      "Extended from a school project with basic CRUD functionalities, MOMO payment integration, and an administrator panel for site management.",
    ],
    imgSrc: "images/projects/innerglow.png",
    link: "https://github.com/connorngr/.Net-Ecommerce",
    personal: false,
    utilized: ["ASP.NET Core MVC", "SQL Server"]
  },
  // {
  //   title: "Gym center management",
  //   desc: ["Fully functional CRUD application written in C# for Windows desktop."],
  //   imgSrc: "images/exclusive/sproject.png",
  //   link: "pdfs/sproject.pdf",
  //   personal: false
  // }
  ]

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

export { infos, routes, links, projects };