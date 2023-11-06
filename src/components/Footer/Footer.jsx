
import "./footer.css"

// ICONS
import {AiOutlineStar} from "react-icons/ai"
import {FiGitBranch} from "react-icons/fi"



const Footer = () => {
  return (
    <div
     className='footer'
     >
      <div className='footer-txt'>Designed & Built by YASI.PO</div> 
      <div className="footer-icon">
        <span><AiOutlineStar />6,615</span>
        <span><FiGitBranch />6,615</span>
      </div>
    </div>
  )
}

export default Footer
