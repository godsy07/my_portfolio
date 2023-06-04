import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    // carrent,
    video_call_app,
    // jobit,
    ecommerce_app,
    // tripguide,
    todo_app,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Node JS Developer",
      icon: backend,
    },
    {
      title: "PHP Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      title: "HTML",
    },
    {
      name: "CSS 3",
      icon: css,
      title: "CSS",
    },
    {
      name: "JavaScript",
      icon: javascript,
      title: "JavasSript",
    },
    {
      name: "TypeScript",
      icon: typescript,
      title: "TypeSript",
    },
    {
      name: "React JS",
      icon: reactjs,
      title: "ReactJS",
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      title: "Redux",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      title: "Tailwind CSS",
    },
    {
      name: "Node JS",
      icon: nodejs,
      title: "NodeJS",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      title: "MongoDB",
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    //   title: "ThreeJS",
    // },
    {
      name: "git",
      icon: git,
      title: "Git",
    },
    // {
    //   name: "figma",
    //   icon: figma,
    //   title: "Figma",
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Video Calling App",
      description:
        "Web-based platform to connect with friends and family. Share moments and thoughts connecting from distant places.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "expressJS",
          color: "blue-text-gradient",
        },
        {
          name: "SocketIO",
          color: "green-text-gradient",
        },
        {
          name: "WebRTC",
          color: "pink-text-gradient",
        },
      ],
      image: video_call_app,
      source_code_link: "https://github.com/godsy07/know_your_friends_ui",
    },
    {
      name: "E-Commerce App",
      description:
        "E-Commerce web application, where one can view and buy clothes and accessories as per the latest fashion trend.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "StripeAPI",
          color: "blue-text-gradient",
        },
        {
          name: "styled-components",
          color: "green-text-gradient",
        },
      ],
      image: ecommerce_app,
      source_code_link: "https://github.com/godsy07/crwn-live-godsy07",
    },
    {
      name: "To-Do List",
      description:
        "Just a simple to-do list maintain various tasks of day to day. Can track various needs or tasks required to complete for the day.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
      ],
      image: todo_app,
      source_code_link: "https://github.com/godsy07/todo-redux",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };