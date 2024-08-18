import { TalentData } from "@/models/talents";

export const talentData: TalentData = {
  firstName: "Luis",
  lastName: "Badel",
  fullName: "Luis Badel",
  title: "Senior Software Engineer",
  location: {
    city: "Medellin",
    country: "Colombia",
  },
  overall_experience: "6",
  description:
    "Dynamic and detail-oriented Senior Software Engineer with over 6 years of experience in .NET Core, SQL Server, and frontend development. Proficient in creating new applications and features, managing databases, and developing APIs with clean architecture. Experienced in using various technologies including React, NestJS, AWS, and DynamoDB.",
  nitTeamNotes:
    "Luis has extensive experience in software development, particularly in API creation and database management. He has worked in diverse environments and used various technologies, making him a versatile and proficient engineer.",
  stacks: [
    {
      id: 1,
      skill: ".NET Core",
      experience: 5,
      icon: "/icons/asp-net.svg",
    },
    {
      id: 2,
      skill: "SQL Server",
      experience: 5,
      icon: "/icons/sql.svg",
    },
    {
      id: 3,
      skill: "React",
      experience: 5,
      icon: "/icons/react.svg",
    },
    {
      id: 4,
      skill: "NestJS",
      experience: 5,
      icon: "/icons/nest.svg",
    },
    {
      id: 5,
      skill: "AWS",
      experience: 5,
      icon: "/icons/aws.svg",
    },
  ],
  experience: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Acid Labs",
      startDate: new Date(
        "Tue Nov 01 2022 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Mon Jul 01 2024 00:00:00 GMT+0300 (East Africa Time)"),
      responsibilities:
        "Creating APIs with microservice's architecture using NestJS, Using AWS services and DynamoDB as ORM, Using VTEX APIs as an ecommerce engine",
      stacks: [
        {
          id: 1,
          skill: "NestJS",
        },
        {
          id: 2,
          skill: "AWS",
        },
        {
          id: 3,
          skill: "DynamoDB",
        },
        {
          id: 4,
          skill: "VTEX",
        },
      ],
    },
    {
      id: 2,
      title: "Senior Software Engineer",
      company: "OIGA Technologies",
      startDate: new Date(
        "Fri Apr 01 2022 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Tue Nov 01 2022 00:00:00 GMT+0300 (East Africa Time)"),
      responsibilities:
        "Creating new applications and add new features to the existing ones on .NET Core, SQL Server Database management, React frontend development",
      stacks: [
        {
          id: 1,
          skill: ".Net Core",
        },
        {
          id: 2,
          skill: "SQL Server",
        },
        {
          id: 3,
          skill: "React",
        },
      ],
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Exit83 Consulting",
      startDate: new Date(
        "Wed Sep 01 2021 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Fri Apr 01 2022 00:00:00 GMT+0300 (East Africa Time)"),
      responsibilities:
        "Creating new APIs on .NET Core with clean architecture, Azure for CI/CD and Git for the repositories, SCRUM and Git Flow methodologies, SQL and Cosmos DB for DB Engines",
      stacks: [
        {
          id: 1,
          skill: ".Net Core",
        },
        {
          id: 2,
          skill: "Azure",
        },
        {
          id: 3,
          skill: "Git",
        },
        {
          id: 4,
          skill: "SQL",
        },
        {
          id: 5,
          skill: "Cosmos DB",
        },
      ],
    },
    {
      id: 4,
      title: ".NET Developer",
      company: "Pragma S.A.",
      startDate: new Date(
        "Sat Jun 01 2019 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Sun Mar 01 2020 00:00:00 GMT+0300 (East Africa Time)"),
      responsibilities:
        "Creating new APIs using .NET Core, VTEX Services as an E-commerce engine, Unit Testing with mstest, Azure for CI/CD and Git for the repositories, SCRUM and Git Flow methodologies and Entity Framework for the mobile applications of Grupo-Exito",
      stacks: [
        {
          id: 1,
          skill: ".Net Core",
        },
        {
          id: 2,
          skill: "VTEX",
        },
        {
          id: 3,
          skill: "mstest",
        },
        {
          id: 4,
          skill: "Azure",
        },
        {
          id: 5,
          skill: "Entity Framework",
        },
      ],
    },
    {
      id: 5,
      title: ".NET Developer",
      company: "WA SOLUTIONS",
      startDate: new Date(
        "Fri Mar 01 2019 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Sat Jun 01 2019 00:00:00 GMT+0300 (East Africa Time)"),
      responsibilities:
        "Adding new functionabilities for the main software of the company using Windows Forms for desktop application development. Using ADO.Net for database linking, Azure for CI/CD and Git for the repositories, SCRUM and Git Flow methodologies, Adding new functionabilities for web applications of the company",
      stacks: [
        {
          id: 1,
          skill: ".Net",
        },
        {
          id: 2,
          skill: "Git",
        },
      ],
    },
    {
      id: 6,
      title: "Semi Senior .NET Developer",
      company: "Globant",
      startDate: new Date(
        "Sun Mar 01 2020 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Sun Aug 01 2021 00:00:00 GMT+0300 (East Africa Time)"),
      responsibilities:
        "API Development with ASP.Net and NodeJS, SQL Server Reporting Services (SSRS) Development, SQL Server data base management",
      stacks: [
        {
          id: 1,
          skill: "ASP.Net",
        },
        {
          id: 2,
          skill: "NodeJS",
        },
        {
          id: 3,
          skill: "SQL Server",
        },
        {
          id: 4,
          skill: "SSRS",
        },
      ],
    },
    {
      id: 7,
      title: ".NET Developer",
      company: "CERRO MATOSO S.A.",
      startDate: new Date(
        "Mon Jan 01 2018 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Sun Jul 01 2018 00:00:00 GMT+0300 (East Africa Time)"),
      responsibilities:
        "Creating new web applications using ASP.Net SQL Server Database management Applications development on Microsoft Power Apps",
      stacks: [
        {
          id: 1,
          skill: "ASP.Net",
        },
        {
          id: 2,
          skill: "SQL",
        },
      ],
    },
  ],
  academicBackgrounds: [
    {
      id: 1,
      institution: "Universidad Pontifica Bolivariana",
      program: "Bachelor Degrees",
      startDate: new Date(
        "Tue Jan 01 2013 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Wed Aug 01 2018 00:00:00 GMT+0300 (East Africa Time)"),
      major: "Informatics Engineering",
    },
    {
      id: 2,
      institution: "Universidad Pontifica Bolivariana",
      program: "Master Degrees",
      startDate: new Date(
        "Tue Jan 01 2019 00:00:00 GMT+0300 (East Africa Time)"
      ),
      endDate: new Date("Mon Aug 01 2022 00:00:00 GMT+0300 (East Africa Time)"),
      major: "Information and Communications Technology",
    },
  ],
  otherSkills: "Cosmos DB, ADO.Net, Microsoft Power Apps, Firebase, Angular",
  hobbies: "",
  videoAskUrl: "videos/askVideo.mp4",
  profileImage: "/images/profile-image.png",
};
