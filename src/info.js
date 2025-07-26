export const assetsBasePath = "/portfolioV2/assets";

export const skills = [
  "JAVA",
  "SpringBoot",
  "SQL",
  "TypeScript",
  "JavaScript",
  "ReactJS",
  "VueJS",
  "HTML",
  "CSS",
  "Docker",
  "Kubernetes",
  "Git",
];

export const workExp = [
  {
    heading: "Product Engineer at LTIMindtree",
    time: "AUG 2021 - OCT 2024",
    orgImage: `${assetsBasePath}/lti.svg`,
    highlights: [
      "Designed and developed full-stack applications using ReactJS, Spring Boot, and Material UI, including a user management system that improved registration efficiency by 30% for a major banking client",
      "Enhanced performance and code quality by creating 15+ reusable UI components, optimizing inefficient backend code to boost system efficiency by 40%, and increasing test coverage from 0% to 80% using Cypress",
      "Led a team of 4 developers, mentored juniors, and collaborated cross-functionally; leveraged Docker, Kubernetes, and GitLab CI to streamline deployment and ensure robust, containerized delivery pipelines",
    ],
  },
  {
    heading: "Senior Software Engineer at TransUnion",
    time: "OCT 2024 - PRESENT",
    orgImage: `${assetsBasePath}/tu.png`,
    highlights: [
      "Working as a Full Stack Developer on a global credit data platform at TransUnion, contributing to scalable data acquisition systems for users across multiple regions and personas",
      "Redesigned the core data model, replacing bidirectional mappings with primitive links, improving modularity, maintainability, and eliminating serialization issues",
      "Improved performance and user experience by optimizing JPA queries (up to 85% latency reduction) and collaborating with the DataOps team to deliver UI/UX enhancements, boosting internal task efficiency by 25%",
    ],
  },
];
