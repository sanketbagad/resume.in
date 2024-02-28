import { deepClone } from "../lib/parse-resume-from-pdf/deep-clone";
import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "../lib/redux/resumeSlice";
import { Resume } from "../lib/redux/types";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Sanket Bagad",
    summary:
      "MERN Stack Developer with 3 years of experience in building scalable and responsive web applications. Proficient in React, Node.js, and MongoDB. Passionate about learning new technologies and solving complex problems.",
    email: "alencolins@gmail.com",
    phone: "+91 9644377621",
    location: "Pune, Maharashtra",
    url: "www.sanketbagad.com",
  },
  workExperiences: [
    {
      company: "Tata Technologies",
      jobTitle: "Solution Developer",
      date: "Dec 2021 - Present",
      descriptions: [
        "Have Led a team of 5 developers and 2 testers to build a scalable and responsive web application",
        "Worked with 5 Clients to understand their requirements and build the product accordingly",
      ],
    },
    {
      company: "Syren Technologies",
      jobTitle: "Software Engineer",
      date: "Oct 2021 - Dec 2021",
      descriptions: [
        "Worked as a Fronted React Developer to build the scalable and responsive web application",
        "Got to learn and work on the latest technologies like Next.js, GraphQL, and TypeScript",
      ],
    },
  ],
  educations: [
    {
      school: "DN Patel College of Engineering",
      degree: "Bachelor's of Technology in Computer Science",
      date: "June 2016 - Aug 2021",
      gpa: "8.10",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  projects: [
    {
      project: "Plixx.co.in",
      date: "March 2022",
      descriptions: [
        "The platform had more than 100,000 active users and 10,000+ movies and TV shows.",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "React", rating: 4 },
      { skill: "Node JS", rating: 4 },
      { skill: "Next JS", rating: 3 },
      { skill: "MongoDB", rating: 4 },
      { skill: "Azure", rating: 4 },
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};



export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  custom: {
    descriptions: [],
  },
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
};
