import { CiMail } from "react-icons/ci";

const Main = () => {
  return (
    <div className="main" id="main">
      <div>
        <span>Hi, my name is</span> <span>Apurva</span>
      </div>
      <div>I connect world with the web.</div>
      <div>
        An enthusiastic web developer with a passion for creating interactive
        and visually appealing websites. Currently, I am honing my skills in
        Three.js, a powerful JavaScript library for 3D graphics on the web. I
        would love to showcase my portfolio.
      </div>
      <div>
        <a href="mailto:apurvamin032@gmail.com">
          Contact Me <CiMail className="mail-icon" />
        </a>
      </div>
    </div>
  );
};

export default Main;
