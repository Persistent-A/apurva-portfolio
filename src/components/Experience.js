import ExperienceCard from "./ExperienceCard"

const Experience = () => {
    const experiences = [
        {
            organisation_name: "DRITT Solutions Inc.",
            experience_type: "Internship",
            position: "Full Stack Developer",
            length: "March 2023 - July 2023",
            work: [
                "Developed a robust web application using MongoDB, Node.js, React, Redux, and JWT technologies.",
                "Optimized performance by reducing response time of states by 30% through efficient state management with Redux.",
                "Ensured secure authentication and data protection with JWT implementation, enhancing user privacy and safeguarding interactions.",
                "Collaborated cross-functionally to deliver a scalable and high-performing web application that surpassed expectations"
            ],
            skills: ["Front-End Development", "GitHub", "MongoDB", "Redux.js", "React.js", "Node.js"]
        },

    ]
  return (
    <div className="experience-container">
        <p className="experience-heading">Relevant Work Experience</p>
        {experiences.map((experience) => (
            <ExperienceCard key={experience.organisation_name} experience={experience}/>
        ))}
      
    </div>
  )
}

export default Experience
