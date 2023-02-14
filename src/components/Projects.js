// IMAGES
import hmsImage from "../image/hms-background.png"
import bookImage from "../image/BookArenaFront.png"
import wdImage from "../image/WeDesignFront.png"
import tttImage from "../image/tttDesktop.png"

// ICONS
import {FiExternalLink, FiGithub } from "react-icons/fi"

// HOOKS
// import { useState } from "react"

const Projects = () => {
    const change = () => {
        var image1 = document.querySelector('.image1')
        var image2 = document.querySelector('.image2')
        var image3 = document.querySelector('.image3')
        var image4 = document.querySelector('.image4')
        image1.style.opacity = (window.scrollY - (1*window.outerHeight))/window.outerHeight
        image2.style.opacity = (window.scrollY - (2*window.outerHeight))/window.outerHeight + 0.35
        image3.style.opacity = (window.scrollY - (3*window.outerHeight))/window.outerHeight + 0.55
        image4.style.opacity = (window.scrollY - (4*window.outerHeight))/window.outerHeight + 0.85
    }   

  return (
    <div className="projects" onWheel={change} id="projects">
      <div className="project-images">
        <img className="image1" src={hmsImage} alt="" style={{"zIndex": "1", "opacity": "0"}}/>
        <img className="image2" src={bookImage} alt="" style={{"zIndex": "2", "opacity": "0"}}/>
        <img className="image3" src={wdImage} alt="" style={{"zIndex": "3", "opacity": "0"}}/>
        <img className="image4" src={tttImage} alt="" style={{"zIndex": "4", "opacity": "0"}}/>
      </div>
      <div className="project-description">
        <div>
            <div>Hospital Management System</div>
            <div>
              <div>2022</div>
              <div>
                <a href="https://github.com/Persistent-A/MERN" target='_blank' rel="noopener noreferrer"><FiGithub /></a>
                <a href="https://hms-7lax.onrender.com" target='_blank' rel="noopener noreferrer"><FiExternalLink /></a>
              </div>
            </div>
            <img className="responsive_project_image" src={hmsImage} alt=""/>
            <div>
                The accessibility of the patients to book an appointment from the portal.
                The doctors can login through the portal and can further check/reschedule 
                the scheduled appointment by selecting the dates. 
            </div>
            <div>MongoDB, Express, React, Node js, MATERIAL UI</div>
        </div>
        <div>
            <div>bookArena</div>
            <div>
              <div>2021</div>
              <div>
                <a href="https://github.com/Persistent-A/bookArena" target='_blank' rel="noopener noreferrer"><FiGithub /></a>
                <a href="https://bookarena-n44l.onrender.com" target='_blank' rel="noopener noreferrer"><FiExternalLink /></a>
              </div>
            </div>
            <img className="responsive_project_image" src={bookImage} alt=""/>
            <div>
                An app to add the book information to the database.
                to get all the books from database for library purpose.
                to retrieve the books as per the book name, genre, and author name.
                One can filter the books based on the price range.
            </div>
            <div>Python, Flask, HTML, CSS</div>
        </div>
        <div>
            <div>WeDesign</div>
            <div>
              <div>2022</div>
              <div>
                <a href="https://github.com/Persistent-A/WeDesign" target='_blank' rel="noopener noreferrer"><FiGithub /></a>
                <a href="https://we-design.vercel.app/" target='_blank' rel="noopener noreferrer"><FiExternalLink /></a>
              </div>
            </div>
            <img className="responsive_project_image" src={wdImage} alt=""/>
            <div>
                The web Application serves an organization advertisements 
                to the online presence.
            </div>
            <div>HTML, CSS, Javascript</div>
        </div>
        <div>
            <div>Tic Tac Toe</div>
            <div>
              <div>2021</div>
              <div>
                <a href="https://github.com/Persistent-A/Tic_Tac_Toe" target='_blank' rel="noopener noreferrer"><FiGithub /></a>
                <a href="https://tic-tac-toe-tu3j.onrender.com" target='_blank' rel="noopener noreferrer"><FiExternalLink /></a>
              </div>
            </div>
            <img className="responsive_project_image" src={tttImage} alt=""/>
            <div>
                A two Player game renders user to modify their name and also tracks number 
                of games played, draws and winning count respectively.
            </div>
            <div>HTML, CSS, Javascript</div>
        </div>
      </div>
    </div>
  )
}

export default Projects
