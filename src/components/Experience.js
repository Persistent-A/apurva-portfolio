import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [experienceToShow, ChangeExperienceToShow] = useState(0);

  const experiences = [
    {
      organisation_name: "KPMG Canada - Toronto, ON",
      organisation_nick_name: "KPMG",
      experience_type: "Full time, Contract",
      position: "Sr. Java Fullstack Developer",
      length: "July 2021 - Present",
      work: [
        "Involve in the application is based on Micro Service Oriented Architecture using Angular and Cassandra DB and MySQL to develop Single Page Applications (SPA)",
        "Implementing Angular directives, expressions, routing capabilities for bookmarking, filters, validations and Angular UI components, Components, ng-Modules, Providers, Services and classes for navigation respectively.",
        "Optimized performance by reducing response time of states by 30% through efficient state management with Redux.",
        "Involve to implement various screens for the front end using React.js and used various predefined components from NPM (Node Package Manager) and Redux Library.",
        "Deploying frontend application using AWS S3 and configured CORS to consume RESTful services from another domain.",
      ],
      skills: [
        "Angular, TypeScript, HTML5, CSS3, Bootstrap, Spring Boot, Cassandra DB, MySQL, AWS S3, Docker, Jenkins, Karma, Jasmine, Redux",
      ],
    },

    {
      organisation_name: "Axtria - Ingenious Insights - Delhi, India",
      organisation_nick_name: "Axtria",
      experience_type: "Full time",
      position: "Java Fullstack Developer",
      length: "February 2019 – April 2021",
      work: [
        "Developed a single ISOMORPHIC responsive website catering to desktop, tablet, and mobile users.",
        "Implemented React.js components and linked them with API data for dynamic rendering.",
        "Utilized Angular CLI and Angular4 http service for backend communication through RESTful APIs.",
        "Conducted unit testing using Mocha and Chai for React.js components.",
        "Deployed and monitored microservices on Pivotal Cloud Foundry, ensuring seamless integration and continuous delivery.",
      ],
      skills: [
        "React.js, Redux, Node.js, HTML5, CSS3, Bootstrap, Spring Boot, Spring Cloud, Oracle Database, Pivotal Cloud Foundry (PCF), Jenkins, GitHub, Protractor",
      ],
    },

    {
      organisation_name: "AlphaSense - Delhi, India",
      organisation_nick_name: "AlphaSense",
      experience_type: "Full time",
      position: "Jr. Fullstack Developer",
      length: "June 2016 – January 2019",
      work: [
        "Developed a Single-Page Application (SPA) using AngularJS, incorporating client-side validations using JavaScript.",
        "Integrated Grunt for minification of JavaScript files and compilation of SAAS files into CSS.",
        "Implemented RESTful services based on Spring REST using the Jersey framework.",
        "Configured Jenkins for application deployment in Pivotal Cloud Foundry and Git Hub version control.",
        "Conducted end-to-end testing using Protractor and integration testing using Selenium and Cucumber.",
      ],
      skills: [
        "AngularJS, HTML5, CSS, jQuery, Ajax, Spring MVC, Mule ESB, Active MQ, Oracle Database, Jenkins, Git, Selenium, Cucumber",
      ],
    },
  ];
  return (
    <div className="experience-container">
      <p className="experience-heading">
        <span>02.</span> <span>Where I've worked</span>
      </p>
      <div className="experience-section">
        <div className="experience-companies">
          {experiences.map((experience, index) => (
            <button
              key={experience.organisation_name}
              onClick={(e) => ChangeExperienceToShow(index)}
            >
              {experience.organisation_nick_name}
            </button>
          ))}
        </div>
        <div className="selected-experience">
          <ExperienceCard experience={experiences[experienceToShow]} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
