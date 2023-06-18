import { BiRightArrow } from "react-icons/bi";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-content">
      <div className="organisation-name">{experience.organisation_name}</div>
      <div>
        <p>{experience.experience_type}</p>
        <p>{experience.position}</p>
        <p>{experience.length}</p>
        <div className="experience-work">
          <p>
            {experience.work.map((work) => (
              <p>
                <BiRightArrow className="skill-arrow" />
                {work}
              </p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
