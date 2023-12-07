import "./project.css"


// PROJECT IMAGES
import P1 from "../../images/projectOne.jpg"
import P3 from "../../images/projectTwo.jpg"
import P2 from "../../images/projectThree.jpg"


// ICONS
import { VscGithubAlt } from "react-icons/vsc"
import { GoLinkExternal } from "react-icons/go"



const Projects = () => {
  return (
    <div className='projects' id="work">
      <h1 
      className="project-title"
      >
        <span className="num">01.</span> <span>Some Things I’ve Built</span> <span className='line'></span>
      </h1>


      <div 
      className="project-box"
      >
        <div className="project-image">
          <img src={P1} alt="" to="https://github.com/Joeyryanbridges"  />
        </div>
        <div className="project-content">
          <p className="pre-title">Featured Project</p>
          <a href='#' className="project-box_title">Admin Panel</a>
          <div className="text-box_container">
            <p className="text-box">
              A minimal, costume, admin panel made for your <br />
             business/daily interactions <span className="aqua"> Visualized with React</span> <br />
              <span className="aqua">Styled Components</span>, <span className='aqua'>React used within TypeScript</span> , and <span className="aqua">npm. </span>
              <span>VISIT IT ONLY WITH BIG DISPLAYS!</span>
            </p>
          </div>

          <ul className="sub-titles">
            <li>React</li>
            <li>Tailwind</li>
            <li>TS</li>
            <li>vs code</li>
            <li>npm</li>
            <li>JS</li>
          </ul>
          <div className="links">
            <a href='https://yasibobo.dev/admin'><GoLinkExternal /></a>
          </div>
        </div>
      </div>

      <div 
      className="project-box"
      >
        <div className="project-content">
          <p className="pre-title">Featured Project</p>
          <a href='#' className="project-box_title">News Website</a>
          <div className="text-box_container">
            <p className="text-box">
              This project is a News Website based on codes of PHP. It includes small web App which can be performed in many browsers and you can customize it as you wish, you just need to tell me. My codes are visible in my Github page down bellow!
            </p>
          </div>

          <ul className="sub-titles">
            <li>VS Code</li>
            <li>PHP</li>
            <li>SCSS</li>
            <li>JS</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <div className="links">
            <a href='https://github.com/yasiBobo/PHP-News-Website-Project' target="__blank"><VscGithubAlt /></a>
          </div>
        </div>
        <div className="project-image">
          <img src={P2} alt="" />
        </div>
      </div>

      <div 
      className="project-box"
      >
        <div className="project-image">
          <img src={P3} alt="" />
        </div>
        <div className="project-content">
          <p className="pre-title">Featured Project</p>
          <a href='#' className="project-box_title">Bitcoin Web App</a>
          <div className="text-box_container">
            <p className="text-box">
             This project is based on my trading journey. It contains multiple <br />
              layers of elements <span className="aqua"> As simple As it is, it is found as one of the attractive projects of mine.</span> <br />
              Which i have only built it with pure <span className="aqua">HTML & CSS!</span>
            </p>
          </div>

          <ul className="sub-titles">
            <li>VS Code</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Hyper</li>
            <li>FLEX</li>
            <li>Grid System</li>
          </ul>
          <div className="links">
            <a href='https://github.com/yasiBobo/Bitcoin-Website-Project' target="__blank"><VscGithubAlt /></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects