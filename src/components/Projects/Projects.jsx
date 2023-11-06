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
        <span className="num">03.</span> <span>Some Things I’ve Built</span> <span className='line'></span>
      </h1>


      <div 
      className="project-box"
      >
        <div className="project-image">
          <img src={P1} alt="" to="https://github.com/Joeyryanbridges"  />
        </div>
        <div className="project-content">
          <p className="pre-title">Featured Project</p>
          <a href='#' className="project-box_title">Halcyon Theme</a>
          <div className="text-box_container">
            <p className="text-box">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, <br />
              iTerm, and more. Available on <span className="aqua"> Visual Studio Marketplace,</span> <br />
              <span className="aqua">Package Control</span>, <span className='aqua'>Atom Package Manager</span> , and <span className="aqua">npm.</span>
            </p>
          </div>

          <ul className="sub-titles">
            <li>VS Code</li>
            <li>Sublime</li>
            <li>Text</li>
            <li>Atom</li>
            <li>iTerm2</li>
            <li>Hyper</li>
          </ul>
          <div className="links">
            <a href='#'><VscGithubAlt /></a>
            <a href='#'><GoLinkExternal /></a>
          </div>
        </div>
      </div>

      <div 
      className="project-box"
      >
        <div className="project-content">
          <p className="pre-title">Featured Project</p>
          <a href='#' className="project-box_title">Halcyon Theme</a>
          <div className="text-box_container">
            <p className="text-box">
              A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
            </p>
          </div>

          <ul className="sub-titles">
            <li>VS Code</li>
            <li>Sublime</li>
            <li>Text</li>
            <li>Atom</li>
            <li>iTerm2</li>
            <li>Hyper</li>
          </ul>
          <div className="links">
            <a href='#'><VscGithubAlt /></a>
            <a href='#'><GoLinkExternal /></a>
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
          <a href='#' className="project-box_title">BOBO's Theme</a>
          <div className="text-box_container">
            <p className="text-box">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, <br />
              iTerm, and more. Available on <span className="aqua"> Visual Studio Marketplace,</span> <br />
              <span className="aqua">Package Control</span>, <span className='aqua'>Atom Package Manager</span> , and <span className="aqua">npm.</span>
            </p>
          </div>

          <ul className="sub-titles">
            <li>VS Code</li>
            <li>Sublime</li>
            <li>Text</li>
            <li>Atom</li>
            <li>iTerm2</li>
            <li>Hyper</li>
          </ul>
          <div className="links">
            <a href='#'><VscGithubAlt /></a>
            <a href='#'><GoLinkExternal /></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects