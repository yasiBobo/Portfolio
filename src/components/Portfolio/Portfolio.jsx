import "./portfolio.css"

// ICONS
import { VscGithubAlt } from "react-icons/vsc"
import { GoLinkExternal } from "react-icons/go"
import { AiOutlineFolder } from "react-icons/ai"



const Portfolio = () => {
  return (
    <div className='portfolio' id="projects">
      <h2
        className="portfolio-title"
      >
        Other Noteworthy Projects
      </h2>
      <p
        className="portfolio-subTitle"
      >
        Made with pure JavaScript
      </p>
      <div 
      className="portfolio-content"
      >
        <a className="portfolio-box" href="https://codepen.io/its_yasi/pen/mdaKqjX" target="__blank">
          <div className="portfolio-header">
            <span style={{ fontSize: "3rem", color: "#5FF2D1" }}><AiOutlineFolder /></span>
            <a href="https://codepen.io/its_yasi/pen/mdaKqjX" target="__blank" style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700" }}><GoLinkExternal /></a>
          </div>
          <div className="portfolio-title">Daily TodoList<br /> Made With JavaScript</div>
          <div className="portfolio-text">
            Building a custom TodoList compatible <br /> with Javascript and html, css<br />  Ui/Ux design
          </div>
          <div className="portfolio-footer">
            <span>JavaScript</span>
            <span>Html</span>
            <span>Css</span>
          </div>
        </a>
        <a className="portfolio-box" href="https://codepen.io/its_yasi/pen/OJrEOrB" target="__blank">
        <div className="portfolio-header">
            <span style={{ fontSize: "3rem", color: "#5FF2D1" }}><AiOutlineFolder /></span>
            <span>
              <a href="https://github.com/yasiBobo/Calculator" target="__blank" style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700" }}><VscGithubAlt /></a>
              <a href="https://codepen.io/its_yasi/pen/OJrEOrB" target="__blank" style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700", paddingLeft: "15px" }}><GoLinkExternal /></a>
            </span>
          </div>
          <div className="portfolio-title">JavaScript Calculator <br /> with Multitasking</div>
          <div className="portfolio-text">
            I built a Javascript calculator <br /> with my identified functions
          </div>
          <div className="portfolio-footer">
            <span>JavaScript</span>
            <span>Html</span>
            <span>Css</span>
          </div>
        </a>
        <a className="portfolio-box"  href="https://codepen.io/its_yasi/pen/jOXKYBP" target="__blank">
          <div className="portfolio-header">
            <span style={{ fontSize: "3rem", color: "#5FF2D1" }}><AiOutlineFolder /></span>
            <span>
              <a  href="https://codepen.io/its_yasi/pen/jOXKYBP" target="__blank"style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700", paddingLeft: "15px" }}><GoLinkExternal /></a>
            </span>

          </div>
          <div className="portfolio-title">Category Website <br /> with JavaScript</div>
          <div className="portfolio-text" target="__blank">
            Building a custom Category Website <br /> to interact with specified subject<br />  in specific titles
          </div>
          <div className="portfolio-footer">
            <span>JavaScript</span>
            <span>Html</span>
            <span>Css</span>
          </div>
        </a>
        <a className="portfolio-box" href="https://codepen.io/its_yasi/pen/PoXaEJv" target="__blank">
          <div className="portfolio-header">
            <span style={{ fontSize: "3rem", color: "#5FF2D1" }}><AiOutlineFolder /></span>
            <span>
              <a href="https://github.com/yasiBobo/Snake-Game-" target="__blank" style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700" }}><VscGithubAlt /></a>
              <a href="https://codepen.io/its_yasi/pen/PoXaEJv" target="__blank" style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700", paddingLeft: "15px" }}><GoLinkExternal /></a>
            </span>
          </div>
          <div className="portfolio-title">Snake Game <br /> Built for some fun time</div>
          <div className="portfolio-text">
            I have built this snake game <br /> with Javascript completely<br />  and used no other language to define it
          </div>
          <div className="portfolio-footer">
            <span>JavaScript</span>
            <span>Html</span>
            <span>Inner Css</span>
          </div>
        </a>
        <a className="portfolio-box" href="https://github.com/yasiBobo/Zoom-On-Images-" target="__blank">
          <div className="portfolio-header">
            <span style={{ fontSize: "3rem", color: "#5FF2D1" }}><AiOutlineFolder /></span>
            <span>
              <a href="https://github.com/yasiBobo/Zoom-On-Images-" target="__blank" style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700" }}><VscGithubAlt /></a>
            </span>
          </div>
          <div className="portfolio-title">Zoom on image <br /> as much as you want</div>
          <div className="portfolio-text">
            Building a custom zoom status <br /> with only JavaScript and a little added <br /> styled Css
          </div>
          <div className="portfolio-footer">
            <span>JavaScript</span>
            <span>Html</span>
            <span>Css</span>
          </div>
        </a>
        <a className="portfolio-box" href="https://codepen.io/its_yasi/pen/wvRXPQQ" target="__blank">
          <div className="portfolio-header">
            <span style={{ fontSize: "3rem", color: "#5FF2D1" }}><AiOutlineFolder /></span>
            <span>
            <a href="https://github.com/yasiBobo/Snake-Game-" target="__blank" style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700", "marginRight" : '.8rem' }}><VscGithubAlt /></a>
            <a href="https://codepen.io/its_yasi/pen/wvRXPQQ" target="__blank" style={{ fontSize: "1.2rem", color: "#C2CCEC", fontWeight: "700" }}><GoLinkExternal /></a>
            </span>
          </div>
          <div className="portfolio-title">TodoList(v2) <br /> with Bootstrap and Jquery!</div>
          <div className="portfolio-text">
            Building a Daily TodoList <br /> with accessible abilities<br />  using Bootstrap and Jquery
          </div>
          <div className="portfolio-footer">
            <span>JS</span>
            <span>Jquery</span>
            <span>Bootstrap</span>
          </div>
        </a>
      </div>
      <a className="portfolioBtn" href="https://codepen.io/its_yasi" target='__blank'>Show More</a>
    </div>
  )
}

export default Portfolio
