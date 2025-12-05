// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/nextjs.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import NestjsLogo from './assets/tech_logo/NestJS.svg.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import GrapgQl from './assets/tech_logo/GraphQL_Logo.svg.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

import BdCalling from "./assets/tech_logo/BdCalling.png";
import personalProjectLogo from "./assets/tech_logo/fullstack-development.png"
import collegeLogo from "./assets/tech_logo/webdev-1.svg"

// Education Section Logo's
import diplomaLogo from './assets/education_logo/dhaka-polytechnic.png';
import onlineLogo from './assets/education_logo/online.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import trainingLogo from "./assets/education_logo/training.jpg"

// Project Section Logo's
import ECommerce from './assets/work_logo/e-commerce.png';
import DeshBoard from './assets/work_logo/Deshboard.png';
import movierecLogo from './assets/work_logo/movie.png';
import OnlineTutor from "./assets/work_logo/online-tutor.png"
import NewsPortals from "./assets/work_logo/newsportals 1.png"
import npmLogo from './assets/work_logo/blog.png';
import FurnitureShop from "./assets/work_logo/furniture.png";
import Animals from "./assets/work_logo/animals.png"



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend  (Familiar With)',
    skills: [
      { name: 'Nest JS', logo: NestjsLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Graphql', logo: GrapgQl },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
     img: personalProjectLogo,
    role: "Fullstack Project Developer",
    company: "Personal Projects",
    date: "2024",
    desc: "Built dynamic and responsive web applications using React, Next.js, Tailwind CSS, Node.js, and MongoDB. Focused on frontend UI and basic backend integration while learning full-stack workflows.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "Next JS",
    ],
  },
  {
    id: 1,
     img: BdCalling,
    role: "Web Development Intern",
    company: "BD Calling",
    date: "August 2025 - December 2025",
    desc: "Completed a 3-month internship focused on building and maintaining web interfaces. Gained hands-on experience with frontend development, responsive UI, and basic backend integration in a professional environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Node JS",
    ],
  },
  {
    id: 2,
    img: collegeLogo,
    role: "Web Developer (College Projects)",
    company: "College Projects / Learning",
    date: "2023",
    desc: "Developed web interfaces and small backend features for college projects. Learned to implement RESTful APIs, responsive designs, and integrate databases.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
];


  
 export const education = [
  {
    id: 0,
    img: diplomaLogo,
    school: "Dhaka Polytechnic Institute",
    date: "2021 - Present",
    grade: "Running (7th Semester)",
    degree: "Diploma in Computer Science & Technology",
    desc: "Currently pursuing a Diploma in Computer Science & Technology, where I am learning core computer science fundamentals including programming, databases, networking, and web development. Alongside my studies, I focus on building practical projects to strengthen my development skills.",
  },
  {
    id: 1,
    img: onlineLogo,
    school: "Self Learning & Online Practice",
    date: "2022 - Present",
    degree: "Web Development & Programming",
    grade: "Ongoing",
    desc: "Learned frontend and backend web development through online resources, documentation, tutorials, and hands-on practice. Built multiple projects using modern web technologies.",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Boira Israel Ahmmed High School",
    date: "2019 - 2021",
    grade: "GPA 4.94",
    degree: "Secondary School Certificate (SSC) - Science",
    desc: "Completed secondary education in the Science group with a strong foundation in mathematics, physics, and basic computer studies.",
  },
   {
    id: 1,
    img: trainingLogo,
    school: "Professional Training",
    date: "2023",
    degree: "MS Word, Excel & PowerPoint Training",
    grade: "Completed",
    desc: "Completed a professional computer training program focused on Microsoft Word, Excel, and PowerPoint, improving documentation and data-handling skills.",
  },

];

  
  export const projects = [
    {
      id: 0,
      title: "E-Commerce Website",
      description:
        "A full-featured online store where users can browse products, add them to the cart, and complete orders. Built with React, Tailwind CSS, and Redux",
      image: ECommerce,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/sakibulkabir/react-ecommerce-website",
      webapp: "https://risat-e-commerce-website.netlify.app/",
    },
    {
      id: 1,
      title: "Admin-Dash-Board",
      description:
        "A responsive admin dashboard for managing users, analytics, and content. Built with React and Tailwind CSS, featuring dynamic charts, tables, and interactive UI components.",
      image: DeshBoard,
      tags: ["React JS", "Tailwind", "Redux", "React-router", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sakibulkabir/dashboard-design",
      webapp: "https://risat-dash-board-design.netlify.app/",
    },
    {
      id: 2,
      title: "News Portals Website",
      description:
        "“A fully responsive News Portal web app built with Next.js, TypeScript, and Tailwind CSS. Features include dynamic news pages, category filters, dark/light mode toggle, and user authentication.",
      image: NewsPortals,
      tags: ["Next JS", "API", "Typescript", "Tailwind", "shadcn UI"],
      github: "https://github.com/sakibulkabir/news-portal-web",
      webapp: "https://news-portal-web.vercel.app/",
    },
    {
      id: 3,
      title: "Furniture Shop Website",
      description:
        "A modern and responsive furniture e-commerce website built with a clean UI and user-friendly layout. The website showcases various furniture products with detailed information, category-based filtering, and an attractive design focused on improving user experience. The project includes a fully responsive layout that adapts seamlessly to mobile, tablet, and desktop screens.",
      image: FurnitureShop,
      tags: ["React JS", "NPM", "Validation, Tailwind"],
      github: "https://github.com/sakibulkabir/furniture-web",
      webapp: "https://risat-furniture-web.netlify.app/",
    },
    {
      id: 4,
      title: "Animal Website",
      description:
        "A beautifully designed and responsive animal information website that showcases different animals with images, details, and categorized sections. The website is built with a clean layout, engaging visuals, and easy navigation to help users explore animals and learn about their characteristics.",
      image: Animals,
      tags: ["React JS", "NPM", "Validation"],
      github: "https://github.com/sakibulkabir/Animal-web",
      webapp: "https://risat-animal-web.netlify.app/",
    },
    
    {
      id: 5,
      title: "Online Tutor Website",
      description:
        "A responsive online tutoring website where students can find tutors, view courses, and book learning sessions. The platform focuses on clean UI, user-friendly navigation, and modern web technologies.",
      image: OnlineTutor,
      tags: ["React JS", "NPM", "Validation"],
      github: "https://github.com/sakibulkabir/Online-tutor-web",
      webapp: "https://risat-online-tutor1.netlify.app/",
    },
    {
      id: 6,
      title: "Movie WebSite",
      description:
        "A responsive movie web application where users can browse movies, view details, and filter by category. Built with React and Tailwind CSS for a modern and interactive UI.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sakibulkabir/movie-website",
      webapp: "https://risat-movie-website.netlify.app/",
    },
    {
      id: 7,
      title: "Simple Blog App",
      description:
        "A minimalist blog application where users can read, create, edit, and delete posts. Built with React and Tailwind CSS, featuring a clean and responsive UI.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/sakibulkabir/blog-app",
      webapp: "https://risat-blog-app.netlify.app/",
    },
  ];  