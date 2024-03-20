import React, { useEffect } from "react";
import hmsImage from "../image/hms-background.png";
import bookImage from "../image/BookArenaFront.png";
import wdImage from "../image/WeDesignFront.png";
import tttImage from "../image/tttDesktop.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const image1 = document.querySelector(".image1");
          const image2 = document.querySelector(".image2");
          const image3 = document.querySelector(".image3");
          const image4 = document.querySelector(".image4");

          if (scrollY >= 2274 && scrollY < 3000) {
            image1.style.opacity = 1;
            image2.style.opacity = 0;
            image3.style.opacity = 0;
            image4.style.opacity = 0;
          } else if (scrollY >= 3000 && scrollY < 3600) {
            image1.style.opacity = 0;
            image2.style.opacity = 1;
            image3.style.opacity = 0;
            image4.style.opacity = 0;
          } else if (scrollY >= 3600 && scrollY < 4300) {
            image1.style.opacity = 0;
            image2.style.opacity = 0;
            image3.style.opacity = 1;
            image4.style.opacity = 0;
          } else if (scrollY >= 4300) {
            image1.style.opacity = 0;
            image2.style.opacity = 0;
            image3.style.opacity = 0;
            image4.style.opacity = 1;
          } else {
            image1.style.opacity = 1;
            image2.style.opacity = 0;
            image3.style.opacity = 0;
            image4.style.opacity = 0;
          }

          lastScrollY = scrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="projects" id="projects">
      <div className="project-images">
        <img className="image1" src={hmsImage} alt="" style={{ zIndex: "1" }} />
        <img
          className="image2"
          src={bookImage}
          alt=""
          style={{ zIndex: "2" }}
        />
        <img className="image3" src={wdImage} alt="" style={{ zIndex: "3" }} />
        <img className="image4" src={tttImage} alt="" style={{ zIndex: "4" }} />
      </div>
      <div className="project-description">
        <div>
          <div>Hospital Management System</div>
          <div>
            <div>2022</div>
            <div>
              <a
                href="https://github.com/Persistent-A/MERN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="https://hms-j64zf4xm4-persistent-a.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <img className="responsive_project_image" src={hmsImage} alt="" />
          <div>
            The app is about the accessibility of the patients to book an
            appointment through the portal. It also let doctors to login through
            the portal and provides the functionality to check and reschedule
            the scheduled appointments by selecting the dates.
          </div>
          <div>MongoDB, Express, React, Node js, MATERIAL UI</div>
        </div>
        <div>
          <div>bookArena</div>
          <div>
            <div>2021</div>
            <div>
              <a
                href="https://github.com/Persistent-A/bookArena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="http://apurvaa.pythonanywhere.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <img className="responsive_project_image" src={bookImage} alt="" />
          <div>
            A responsive app built for the librarian which takes care of
            different needs hence enabling to add the book information to the
            database, to get all the books from database for library purpose, to
            retrieve the books as per the book name, genre, and author name. One
            can also filter the books based on the price range.
          </div>
          <div>Python, Flask, HTML, CSS</div>
        </div>
        <div>
          <div>WeDesign</div>
          <div>
            <div>2022</div>
            <div>
              <a
                href="https://github.com/Persistent-A/WeDesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="https://we-design.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <img className="responsive_project_image" src={wdImage} alt="" />
          <div>
            An interactive and responsive web Application developed for an
            organization to serve advertisement of their business model.
          </div>
          <div>HTML, CSS, Javascript</div>
        </div>
        <div>
          <div>Tic Tac Toe</div>
          <div>
            <div>2021</div>
            <div>
              <a
                href="https://github.com/Persistent-A/Tic_Tac_Toe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="https://tic-tac-toe-persistent-a.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <img className="responsive_project_image" src={tttImage} alt="" />
          <div>
            A fun purpose two Player game that renders users to modify their
            name, play with either human or computer, and also tracks the number
            of games played, draws and winning count respectively.
          </div>
          <div>HTML, CSS, Javascript</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
