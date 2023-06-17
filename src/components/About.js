import profile_image from "../image/self/about_img.png"
import {BiRightArrow} from "react-icons/bi"

const About = () => {
  return (
    <div className="about-container" id="about-container">
      <div className="about-intro">
        <p>About Me</p>
        <p>My Introduction</p>
      </div>
      <div className="about">
          <div className="about-description">
            <div>Technologies, which render control, freedom of expression and a canvas to express ideas innovatively intrigue me the most.
              Web Development is a perfect tool of the generation to complement my enthusiasm. I am fascinated towards geometrical arrangement of 
              elements and love to get indulged in pouring details inside them.
            </div>
            <div>
              <img className="about-image-mobile" src={profile_image} alt=""></img>
              <div>
                <div className="skills-container">Few technologies I have been working with recently:</div>

                <div className="skills">
                    <div>
                        <p><BiRightArrow className="skill-arrow"/>HTML</p>
                        <p><BiRightArrow className="skill-arrow"/>CSS</p>
                        <p><BiRightArrow className="skill-arrow"/>JavaScript</p>
                    </div>
                    <div>
                        <p><BiRightArrow className="skill-arrow"/>Python</p>
                        <p><BiRightArrow className="skill-arrow"/>React</p>
                        <p><BiRightArrow className="skill-arrow"/>Node JS</p>
                    </div>
                    <div>
                        <p><BiRightArrow className="skill-arrow"/>MongoDB</p>
                        <p><BiRightArrow className="skill-arrow"/>GitHub</p>
                        <p><BiRightArrow className="skill-arrow"/>VS Code</p>
                    </div>
                </div>  
                <div className="resume">
                  <a href="https://github.com/Persistent-A/CV/raw/main/Apurva_Resume_Full_Stack.pdf" target='_blank' rel="noopener noreferrer">Download CV</a>
                </div>
              </div>
            </div>
          </div>
          <img className="about-image" src={profile_image} alt=""></img>
      </div>
    </div>
  )
}

export default About

