import { useEffect, useRef, useState } from 'react'

import { ChatHero } from '../../../assets/images'
import { BASE_URL, CHAT_HISTORY, TOKEN_URL } from '../../../utils/apiConstants';
import axios from 'axios';
import CandidateCard from './CandidateCard';

export default function ChatCanvas({ userQuery }) {
  const chatEndRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [chatData, setChatData] = useState([]);

  const data = {
    "bot_message": "I was able to find candidates who meet your requirements. Would you like to refine the search with additional criteria, such as work availability, skills, budget, or start time?",
    "candidates": [
      {
        "_additional": {
          "rerank": [
            {
              "score": 0.702428
            }
          ],
          "score": "0.60161245"
        },
        "awards": [],
        "combined": 0.48064498,
        "country": "United States",
        "education": [
          {
            "deg": 2,
            "degree": "Bachelors",
            "educationId": "5d233a0a-e5e3-11ee-ad6f-42010a40003b",
            "endDate": "2020",
            "grade": "3.92",
            "isUniversityInWest": 1,
            "linkedInUrl": "",
            "major": "Computer Science",
            "rateGPA": 5,
            "resumeId": "013dc852-155e-4106-a33b-3da4093ae4fe",
            "school": "Portland State University",
            "schoolLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-school-portland-state-university.jpeg",
            "startDate": "",
            "uni": 3
          },
          {
            "deg": 1,
            "degree": "Associate of Applied Science",
            "educationId": "5d239747-e5e3-11ee-ad6f-42010a40003b",
            "endDate": "2011",
            "grade": "3.92",
            "isUniversityInWest": 1,
            "linkedInUrl": "",
            "major": "",
            "rateGPA": 5,
            "resumeId": "013dc852-155e-4106-a33b-3da4093ae4fe",
            "school": "Mt. Hood Community college",
            "schoolLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-school-mt-hood-community-college.jpeg",
            "startDate": "",
            "uni": 1
          }
        ],
        "finalImageUrl": "https://storage.googleapis.com/pic-gen/b89a720e-e2f4-11ee-a4ba-42010a400021_ai_pic.jpg",
        "fullTime": 1,
        "fullTimeAvailability": 0,
        "fullTimePrice": 11447,
        "generativeProfilePicOptedIn": 1,
        "githubStats": null,
        "isActive": 0,
        "name": "G. J. ",
        "newScore": 4,
        "partTime": 0,
        "partTimeAvailability": -1,
        "partTimePrice": 0,
        "profilePic": "https://storage.googleapis.com/pic-gen/b89a720e-e2f4-11ee-a4ba-42010a400021_itv_pic.jpg",
        "projects": [
          {
            "description": "",
            "endDate": "2023",
            "link": "",
            "projectId": "063c0a73-998b-40b4-a7d3-835c5a898c64",
            "resumeId": "013dc852-155e-4106-a33b-3da4093ae4fe",
            "startDate": "2023",
            "title": ""
          }
        ],
        "rerank_score": 0.8003801,
        "rerank_summary": "\nEducation:\nReceived Bachelors in Computer Science, from Portland State University during (-2020); Received Associate of Applied Science in , from Mt. Hood Community college during (-2011)\n\nWork Experience:\nWorked as Senior Software Engineer at Allbound, during (2022-2024); Worked as Software Engineer at Apcon, during (2021-2022); Worked as Software Engineer at , during (2019-2021); Worked as  at , during (2016-2020)\n\nSkills proficient in: React, TypeScript, Redux, Node.js, Python\n\nCountry: United States",
        "resumeId": "013dc852-155e-4106-a33b-3da4093ae4fe",
        "skills": [
          "React",
          "TypeScript",
          "Redux",
          "Node.js",
          "Python"
        ],
        "summary": "Architected Allbound's payment module, enhancing client acquisition with Typescript and React.js.",
        "userId": "b89a720e-e2f4-11ee-a4ba-42010a400021",
        "videoRecording": "https://storage.cloud.google.com/ai_interviewer_recordings/daily_b9518a57-e2f4-11ee-a4ba-42010a400021.mp4",
        "workExperience": [
          {
            "company": "Allbound",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-allbound.jpeg",
            "companyWebsite": null,
            "description": "Architected and developed the front-end of Allbound's new payment module using Typescript, React.js, and Redux. Developed new UI components and documented with Storybook. Engineered a client-side database solution for efficient local storage and data table management. Developed a new MDF feature in Typescript, React.js, Redux, Nestjs, and Node directly contributing to the acquisition of new clients. Consulted and worked on new Nodejs architecture for future micro services using Nest.js, MySQL, and MongoDB. Oversaw maintenance and feature enhancements for existing applications in React.js, Redux, Material-ui, and Typescript.",
            "endDate": "2024",
            "isCompanyInWest": 0,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/allbound",
            "locationCity": "",
            "locationCountry": "",
            "rateGrammar": 3,
            "resumeId": "013dc852-155e-4106-a33b-3da4093ae4fe",
            "role": "Senior Software Engineer",
            "startDate": "2022",
            "workExperienceId": "5cba3771-e5e3-11ee-ad6f-42010a40003b",
            "work_exp": 2,
            "yearsWorked": 2
          },
          {
            "company": "Apcon",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-apcon.jpeg",
            "companyWebsite": null,
            "description": "Optimized performance of a legacy application to support client's growing database, improving scalability. Collaborated with UI/UX designers and team members to build several successful MVPs using TypeScript, Material-ui, React.js with hooks and/or Redux, Node or Django(Python), and PostgreSQL. Designed and developed full-stack web applications in Typescript, React.js, Redux, Material-ui, and Django(Python) or Express to meet the specific needs of clients. Created a power consumption monitoring dashboard for lab devices in React.js, and Flask(python) providing vital statistics to users. Migrated the company demonstration site to React.js from jQuery for improved performance and user experience. Back-end developed using ASP.NET and MongoDB. Developed full-stack applications using various technology stacks such as PHP, Python, MySQL, React.js, Mongodb, Flask, and Node improving system efficiency and performance. Engineered a remote power management microservice for lab equipment. Built a REST API for a demonstration site, allowing the sales team to showcase products and services to potential customers remotely. Developed a QA application to generate network traffic using PCAPS in Nodejs and React.js.",
            "endDate": "2022",
            "isCompanyInWest": 0,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/apcon",
            "locationCity": "",
            "locationCountry": "",
            "rateGrammar": 3,
            "resumeId": "013dc852-155e-4106-a33b-3da4093ae4fe",
            "role": "Software Engineer",
            "startDate": "2021",
            "workExperienceId": "5cba8547-e5e3-11ee-ad6f-42010a40003b",
            "work_exp": 2,
            "yearsWorked": 1
          },
          {
            "company": "",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-.jpeg",
            "companyWebsite": null,
            "description": "",
            "endDate": "2021",
            "isCompanyInWest": 0,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/linkedin",
            "locationCity": "",
            "locationCountry": "",
            "rateGrammar": 3,
            "resumeId": "013dc852-155e-4106-a33b-3da4093ae4fe",
            "role": "Software Engineer",
            "startDate": "2019",
            "workExperienceId": "5cbaccef-e5e3-11ee-ad6f-42010a40003b",
            "work_exp": 1,
            "yearsWorked": 2
          },
          {
            "company": "",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-.jpeg",
            "companyWebsite": null,
            "description": "",
            "endDate": "2020",
            "isCompanyInWest": 0,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/linkedin",
            "locationCity": "",
            "locationCountry": "",
            "rateGrammar": 3,
            "resumeId": "013dc852-155e-4106-a33b-3da4093ae4fe",
            "role": "",
            "startDate": "2016",
            "workExperienceId": "5cbb1cc0-e5e3-11ee-ad6f-42010a40003b",
            "work_exp": 1,
            "yearsWorked": 4
          }
        ],
        "yearsOfWorkExperience": 8
      },
      {
        "_additional": {
          "rerank": [
            {
              "score": 0.6746938
            }
          ],
          "score": "0.39433277"
        },
        "awards": [],
        "combined": 0.457733108,
        "country": "Poland",
        "education": [
          {
            "deg": 3,
            "degree": "Master's Degree",
            "educationId": "4392ae03-e95e-11ee-ad6f-42010a40003b",
            "endDate": "2019",
            "grade": "",
            "isUniversityInWest": 0,
            "linkedInUrl": "",
            "major": "Entrepreneurship",
            "rateGPA": 0,
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "school": "V. N. Karazin Kharkiv National University",
            "schoolLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-school-v-n-karazin-kharkiv-national-university.jpeg",
            "startDate": "2018",
            "uni": 3
          },
          {
            "deg": 2,
            "degree": "Bachelor's Degree",
            "educationId": "4392f995-e95e-11ee-ad6f-42010a40003b",
            "endDate": "2018",
            "grade": "",
            "isUniversityInWest": 0,
            "linkedInUrl": "",
            "major": "Ecology",
            "rateGPA": 0,
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "school": "National Technical University 'Kharkiv Polytechnic Institute'",
            "schoolLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-school-national-technical-university-kharkiv-polytechnic-institute.jpeg",
            "startDate": "2014",
            "uni": 3
          }
        ],
        "finalImageUrl": "https://storage.googleapis.com/pic-gen/8f4b3a9b-cc49-11ee-a4ba-42010a400021_ai_pic.jpg",
        "fullTime": 1,
        "fullTimeAvailability": 2,
        "fullTimePrice": 8587,
        "generativeProfilePicOptedIn": 1,
        "githubStats": null,
        "isActive": 0,
        "name": "A. N. ",
        "newScore": 5,
        "partTime": 0,
        "partTimeAvailability": -1,
        "partTimePrice": 0,
        "profilePic": "https://storage.googleapis.com/pic-gen/8f4b3a9b-cc49-11ee-a4ba-42010a400021_itv_pic.jpg",
        "projects": [
          {
            "description": "Created a PoC, which the client approved and it led to the hiring of 2 Scrum teams. Established a UI library for all development teams, with a tech lead. Implemented optimal login and registration flow and ensured over 90% code coverage, reinforcing software reliability.",
            "endDate": "Present",
            "link": "",
            "projectId": "7e130431-caa3-11ee-a4ba-42010a400021",
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "startDate": "2022",
            "title": "Login/Registration application"
          },
          {
            "description": "Implemented BFF using Nest.js for the admin panel, playing a main role in its execution. Developed multiple React applications for an internal admin system within a monorepo.",
            "endDate": "2022",
            "link": "",
            "projectId": "7e134a87-caa3-11ee-a4ba-42010a400021",
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "startDate": "2020",
            "title": "Admin Panel for US company"
          },
          {
            "description": "Efficiently executed a major development of the dashboard's web version. Conceived and implemented advanced features enhancing app functionality.",
            "endDate": "2020",
            "link": "",
            "projectId": "7e1397c3-caa3-11ee-a4ba-42010a400021",
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "startDate": "2019",
            "title": "Payment System, Israel Startup"
          },
          {
            "description": "Development of an application for a company payroll system. Implemented new system features as per client requirements.",
            "endDate": "2019",
            "link": "",
            "projectId": "7e13d538-caa3-11ee-a4ba-42010a400021",
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "startDate": "2017",
            "title": "Application for accounting for the salaries of company employees"
          }
        ],
        "rerank_score": 0.7345006,
        "rerank_summary": "\nEducation:\nReceived Master's Degree in Entrepreneurship, from V. N. Karazin Kharkiv National University during (2018-2019); Received Bachelor's Degree in Ecology, from National Technical University 'Kharkiv Polytechnic Institute' during (2014-2018)\n\nWork Experience:\nWorked as Senior Software Engineer at EPAM Systems, during (2023-2023); Worked as Senior Software Engineer at EPAM Systems, during (2022-2023); Worked as Software Engineer at EPAM Systems, during (2020-2022); Worked as Software Engineer at Yojji, during (2017-2020); Worked as Software Engineer at Yojji, during (2019-2020)\n\nSkills proficient in: React, Next.js, Redux, TypeScript\n\nCountry: Poland",
        "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
        "skills": [
          "React",
          "Next.js",
          "Redux",
          "TypeScript"
        ],
        "summary": "Led React development for a Login/Registration application at EPAM Systems.",
        "userId": "8f4b3a9b-cc49-11ee-a4ba-42010a400021",
        "videoRecording": "https://storage.cloud.google.com/ai_interviewer_recordings/daily_90c5bc33-cc49-11ee-a4ba-42010a400021.mp4",
        "workExperience": [
          {
            "company": "EPAM Systems",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-epam-systems.jpeg",
            "companyWebsite": null,
            "description": "Experienced React Developer with a 6-year track record in React and a total of 8 years in front-end development. Specializes in building robust, scalable applications using technologies like React, Material UI, and Next.js. Thrives in both independent and collaborative team settings, contributing to Scrum teams and stepping into leadership roles when needed.",
            "endDate": "2023",
            "isCompanyInWest": 1,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/epam-systems",
            "locationCity": "Poland",
            "locationCountry": "Poland",
            "rateGrammar": 3,
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "role": "Senior Software Engineer",
            "startDate": "2023",
            "workExperienceId": "4325711f-e95e-11ee-ad6f-42010a40003b",
            "work_exp": 3,
            "yearsWorked": 0
          },
          {
            "company": "EPAM Systems",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-epam-systems.jpeg",
            "companyWebsite": null,
            "description": "Project description: Login/Registration application. Duration: August 2022 - now. Team Size: 1 Tech lead, 1 Team lead, 3 Front-end dev, 2 QA, BA. Role on the project: Senior software engineer. Achievements: Created a PoC approved by the client leading to hiring of 2 Scrum teams. Established a UI library for all development teams. Implemented optimal login and registration flow with over 90% code coverage. Improved client relations and project management. Acted as a temporary team lead during transition. Applied coding best practices and accessibility requirements. Tools and Technologies: React, Material UI, Next.Js, Storybook, React query, Zustand, Formik, Jira, SonarQube, Gigya API, Adobe Experience Manager API",
            "endDate": "2023",
            "isCompanyInWest": 1,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/epam-systems",
            "locationCity": "United Kingdom",
            "locationCountry": "United Kingdom",
            "rateGrammar": 3,
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "role": "Senior Software Engineer",
            "startDate": "2022",
            "workExperienceId": "4325c23f-e95e-11ee-ad6f-42010a40003b",
            "work_exp": 3,
            "yearsWorked": 1
          },
          {
            "company": "EPAM Systems",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-epam-systems.jpeg",
            "companyWebsite": null,
            "description": "Project description: Admin Panel for US company. Team Size: 1 Team Lead, 3 Front-end dev, 2 Backend dev, 3 Designers, 3 QA, 2 DevOps, 2 Security, 1 BA. Role on the project: Software engineer. Achievements: Implemented BFF using Nest.js for the admin panel. Developed multiple React applications within a monorepo. Enhanced code reliability through unit tests. Integrated Sentry and New Relic for error tracking. Tools and Technologies: ReactJS, NestJS, Material UI, PostgreSQL, Vault, GitHub, Okta, Sentry, Sumologic, TypeScript, Prettier, Jest, Swagger",
            "endDate": "2022",
            "isCompanyInWest": 0,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/epam-systems",
            "locationCity": "Poland",
            "locationCountry": "Poland",
            "rateGrammar": 3,
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "role": "Software Engineer",
            "startDate": "2020",
            "workExperienceId": "4326153f-e95e-11ee-ad6f-42010a40003b",
            "work_exp": 3,
            "yearsWorked": 2
          },
          {
            "company": "Yojji",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-yojji.jpeg",
            "companyWebsite": null,
            "description": "Project description: Payment System, Israel Startup. Duration: May 2019 - August 2020. Team Size: 3 Front-end dev, 3 Back-end dev, 2 Designers, 1 QA. Role on the project: Software engineer. Achievements: Executed a major development of the dashboard's web version. Conceived and implemented advanced features enhancing app functionality. Tools and Technologies: React, Redux, Redux Saga, Jira, Git, Figma, React Native, Less, Typescript",
            "endDate": "2020",
            "isCompanyInWest": 0,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/yojji",
            "locationCity": "",
            "locationCountry": "",
            "rateGrammar": 3,
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "role": "Software Engineer",
            "startDate": "2017",
            "workExperienceId": "43266a10-e95e-11ee-ad6f-42010a40003b",
            "work_exp": 2,
            "yearsWorked": 3
          },
          {
            "company": "Yojji",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-yojji.jpeg",
            "companyWebsite": null,
            "description": "Project description: Application for accounting for the salaries of company employees. There are monthly/weekly cycles that contain a list of employees and their compensation. Duration: October 2017 - April 2019. Team Size: 4 Front-end dev, 2 Back-end dev, 2 Designers, 1 QA. Role on the project: Software engineer. Achievements: Development of an application for a company payroll system. Implemented new system features as per client requirements. Actively participated in many team and client meetings, as a key project contact. Tools and Technologies: React, Redux, Redux Saga, Reselect, Sass, Typescript, Jira, Git, Zeplin, Custom UI library",
            "endDate": "2020",
            "isCompanyInWest": 0,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/yojji",
            "locationCity": "",
            "locationCountry": "",
            "rateGrammar": 3,
            "resumeId": "18c66649-1393-4221-a67d-4b58f47bd1cd",
            "role": "Software Engineer",
            "startDate": "2019",
            "workExperienceId": "4326be94-e95e-11ee-ad6f-42010a40003b",
            "work_exp": 2,
            "yearsWorked": 1
          }
        ],
        "yearsOfWorkExperience": 6
      },
      {
        "_additional": {
          "rerank": [
            {
              "score": 0.6699608
            }
          ],
          "score": "0.041647535"
        },
        "awards": [],
        "combined": 0.43665901399999996,
        "country": "Romania",
        "education": [
          {
            "deg": 2,
            "degree": "Licenta",
            "educationId": "f04dfc70-e95f-11ee-ad6f-42010a40003b",
            "endDate": "2019",
            "grade": "",
            "isUniversityInWest": 1,
            "linkedInUrl": "",
            "major": "Informatică",
            "rateGPA": 0,
            "resumeId": "21a94b97-063a-467b-a1b6-80cb871ba6c5",
            "school": "University of Bucharest",
            "schoolLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-school-university-of-bucharest.jpeg",
            "startDate": "2016",
            "uni": 3
          }
        ],
        "finalImageUrl": "https://storage.googleapis.com/pic-gen/c2fb6a58-c8b3-11ee-a4ba-42010a400021_ai_pic.jpg",
        "fullTime": 1,
        "fullTimeAvailability": 4,
        "fullTimePrice": 12377,
        "generativeProfilePicOptedIn": 1,
        "githubStats": null,
        "isActive": 0,
        "name": "G. C. ",
        "newScore": 7,
        "partTime": 1,
        "partTimeAvailability": 4,
        "partTimePrice": 7753,
        "profilePic": "https://storage.googleapis.com/pic-gen/c2fb6a58-c8b3-11ee-a4ba-42010a400021_itv_pic.jpg",
        "projects": [],
        "rerank_score": 0.725065,
        "rerank_summary": "\nEducation:\nReceived Licenta in Informatică, from University of Bucharest during (2016-2019)\n\nWork Experience:\nWorked as Software Engineer at IBM, during (2021-Present); Worked as Software Engineer at IOTNetPRO, during (2019-2021)\n\nSkills proficient in: React, Redux, TypeScript, SQL\n\nCountry: Romania",
        "resumeId": "21a94b97-063a-467b-a1b6-80cb871ba6c5",
        "skills": [
          "React",
          "Redux",
          "TypeScript",
          "SQL"
        ],
        "summary": "Developed SaaS platforms and enhanced UI/UX as Software Engineer at IBM.",
        "userId": "c2fb6a58-c8b3-11ee-a4ba-42010a400021",
        "videoRecording": "https://storage.cloud.google.com/ai_interviewer_recordings/daily_c48fe81c-c8b3-11ee-a4ba-42010a400021.mp4",
        "workExperience": [
          {
            "company": "IBM",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-ibm.jpeg",
            "companyWebsite": null,
            "description": "Working alongside a great team in order to maintain and add new features to 2 Internal Applications that are using different technologies. My main assignment consist of the full lifecycle of a task, from business analysis to implementation. Applications stack: 1. React&Redux, Typescript, .Net 6, Microsoft SQL Server 2. Angular, Typescript, .Net 6, Microsoft SQL Server",
            "endDate": "Present",
            "isCompanyInWest": 1,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/ibm",
            "locationCity": "",
            "locationCountry": "",
            "rateGrammar": 3,
            "resumeId": "21a94b97-063a-467b-a1b6-80cb871ba6c5",
            "role": "Software Engineer",
            "startDate": "2021",
            "workExperienceId": "f01a0607-e95f-11ee-ad6f-42010a40003b",
            "work_exp": 4,
            "yearsWorked": 3
          },
          {
            "company": "IOTNetPRO",
            "companyLogo": "https://linkedin-company-logos.s3.amazonaws.com/company-iotnetpro.jpeg",
            "companyWebsite": null,
            "description": "Worked with technologies like React, Redux, .Net and Microsoft SQL to develop a SaaS platforms, making decisions about how the features should work and how we can make the UI/UX better.",
            "endDate": "2021",
            "isCompanyInWest": 0,
            "isStartupFounder": 0,
            "linkedInUrl": "https://www.linkedin.com/company/iotnetpro",
            "locationCity": "",
            "locationCountry": "",
            "rateGrammar": 3,
            "resumeId": "21a94b97-063a-467b-a1b6-80cb871ba6c5",
            "role": "Software Engineer",
            "startDate": "2019",
            "workExperienceId": "f01a599d-e95f-11ee-ad6f-42010a40003b",
            "work_exp": 2,
            "yearsWorked": 2
          }
        ],
        "yearsOfWorkExperience": 5
      }
    ],
    "chat_history": [
      "{\"lc\": 1, \"type\": \"constructor\", \"id\": [\"langchain\", \"schema\", \"messages\", \"HumanMessage\"], \"kwargs\": {\"content\": \"I need a React engineer who can work full-time\"}}",
      "{\"lc\": 1, \"type\": \"constructor\", \"id\": [\"langchain\", \"schema\", \"messages\", \"AIMessage\"], \"kwargs\": {\"content\": \"Candidates successfully returned for the given query. I was able to find candidates who meet your requirements. Would you like to refine the search with additional criteria, such as work availability, skills, budget, or start time?\"}}"
    ]
  }

  const getChatHistory = async () => {
    try {
      console.log("json token", localStorage.getItem('MercorUserToken'));
      // fetch chat history from API
      const response = await axios.post(`${BASE_URL}${CHAT_HISTORY}`,
        {
          "input": userQuery,
          "chat_history": chatData?.chat_history || [],
          "shortlist": [],
          "email": "hello.shahanshah@gmail.com",
          "isWhiteListed": 0
        },
        {
          "headers": {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('MercorUserToken')}`
          },
        })

      console.log("response of chat===>", response);
      setChatData(response?.data)
    } catch (error) {
      console.log(error);
      //TODO: add a toast message.
      if (error.response.status === 401) {
        getToken();
      }
    }
  }
  const getToken = async () => {
    try {
      const response = await axios.post(TOKEN_URL,

        {
          "grant_type": "refresh_token",
          "refresh_token": localStorage.getItem('MercorRefreshToken'),
        }
      )
      console.log("response of token===>", response);
      localStorage.setItem('MercorUserToken', response?.data?.access_token);
      localStorage.setItem('MercorRefreshToken', response?.data?.refresh_token);
      getChatHistory();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (chatData?.length <= 0) return;
    setMessages(prev => {
      return [...prev, {
        "senderText": userQuery || "",
        "candidates": chatData?.candidates || [],
        "bot_message": chatData?.bot_message || "",
      }]

    })
  }, [chatData])

  console.log("messages==>", messages);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  useEffect(() => {
    userQuery !== "" && getChatHistory();
    // setChatData(data)
  }, [userQuery])

  console.log("chatData", chatData);
  return (
    <div className='chatCanvas'>
      {messages?.length <= 0 ?
        <>
          <img src={ChatHero} alt='Purple banner showing world map with dots and also a man sitting on chair working with his laptop and few books are also stacked on table.'
            className='chatCanvas_hero' />
          {/* <div className='chatCanvas_message'>
        <div className='chatCanvas_message_sender'>AI</div>
      <div className='chatCanvas_message_text'>Hello! How can I help you today?</div> 
       </div>  */}
        </>
        : null
      }
      <div className='chatCanvas_chatContainer' id="chatCanvas_chatContainer">
        {
          messages?.map((message, index) => {
            return (
              <div key={index} className='chatCanvas_message'>
                <div className='chatCanvas_message_sender'>
                  <div className='chatCanvas_message_sender_text'>
                    <p>{message.senderText}</p>
                  </div>
                  <img src="https://lh3.googleusercontent.com/a/ACg8ocLXUWQv3D9F013mzRh5cpiLR3Alib4jCwzj1Tg_VbowdNtExnyq=s96-c" alt="candidate profile" />
                </div>
                {
                  message.candidates?.map((candidate, index) => {
                    return (
                      <CandidateCard key={index} candidateData={candidate} />
                    )
                  })
                }
                <div className='chatCanvas_message_bot'>
                  <img src="https://team.mercor.com/icon.svg" alt="Mercor" />
                  <div className='chatCanvas_message_bot_text'>
                    <p>{message.bot_message}</p></div>
                </div>
              </div>
            )
          })
        }
        <div ref={chatEndRef} />

      </div>
    </div>
  )
}
