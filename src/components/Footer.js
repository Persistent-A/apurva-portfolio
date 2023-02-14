// ICONS
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

const Footer = () => {
  return (
    <div className="footer">
        <div>Apurva &copy; 2023</div>
        <div>
            <div>
                <a href="https://github.com/Persistent-A" target='_blank' rel="noopener noreferrer"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/apurva-apurva-70509674?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoKw4Mbx0RkOujlE71ZlRVA%3D%3D" target='_blank' rel="noopener noreferrer"><FiLinkedin /></a>
                <a href="mailto:apurva.mili@gmail.com" target='_blank' rel="noopener noreferrer"><FiMail /></a>
            </div>
            <div>Developed by Apurva</div>
        </div>
    </div>
  )
}

export default Footer
