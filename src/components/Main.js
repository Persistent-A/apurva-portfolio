import {CiMail} from "react-icons/ci"

const Main = () => {
  return (
    <div className="main">
        <div>Hi, I'm Apurva</div>
        <div>Full Stack Developer</div>
        <div>I am a student of Web-Development at TAV College, Montreal.
            Currently I'am focused towards learning technologies related to web such as React JS and Angular JS.
        </div>
        <div>
          <a href="mailto:apurva.mili@gmail.com">Contact Me <CiMail className="mail-icon"/></a>
        </div>
    </div>
  )
}

export default Main
