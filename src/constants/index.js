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
  github,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  Jamespfp,
  Johnpfp,
  FanMatch,
  Freshwaterlogo,
  Motivelogo,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Warehouse Team Member",
    company_name: "Freshwater Systems",
    icon: Freshwaterlogo,
    iconBg: "#3872af",
    date: "Jan 2023 - April 2024",
    points: [
      "Worked with all of the companies different systems to pick, pack, and ship orders upwards of $20,000.",
      "This job required meticulous quality control to ensure that there were no mistakes during the process.",
    ],
  },
  {
    title: "Coach",
    company_name: "MOTIVE School of Movement",
    icon: Motivelogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - May 2022",
    points: [
      "Instructed groups up to 20 at a time",
      "Hands on individual instruction for kids as young as 8 to adults as old as 60",
      "Working with different age groups, things had to be interpreted in a way that each individual is able to understand and grasp.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is a tremendously talented individual that can excel in just about every area that captures his imagination. I've seen him go from ground level knowledge on many different skills to becoming exceptional in no time.",
    name: "James Figeuroa",
    designation: "Branch Manager",
    company: "Weed Man Lawn Care",
    image: Jamespfp,
  },
  {
    testimonial:
      "His proactive approach to self-development is evident through additional certifications and credentials he has pursued. As an employee, Cameron's diligence, high standards and passion for his work make him a valuable asset to any organization.",
    name: "John Wilson",
    designation: "General Manager",
    company: "Weed Man Lawn Care",
    image: Johnpfp,
  },
];

const projects = [
  {
    name: "FanMatch",
    description:
      "FanMatch is a dynamic platform designed to unite football fans. It is constructed using a React frontend and uses Supabase for the database as well as using the API-FOOTBALL api to populate data. Built with passion for the sport, FanMatch facilitates meaningful connections among fans of various football teams. Whether you're looking for local fans to watch the game with, seeking to share your thoughts on the latest match, or wanting to celebrate your team's victory with like-minded supporters, FanMatch is the place for you.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "APIFOOTBALL",
        color: "pink-text-gradient",
      },
    ],
    image: FanMatch,
    source_code_link: "https://github.com/CWilliams147/tinder-for-fans",
  },
];

export { services, technologies, experiences, testimonials, projects };
