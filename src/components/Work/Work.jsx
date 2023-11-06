import "./work.css"

// ICONS
import { VscDebugBreakpointFunction } from "react-icons/vsc"

// SCROLL REVEAL
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <div className='work' id="work">
      <motion.div 
      className="work-container"
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="work-title">
          <span className="num">02.</span> <span>Where I’ve Worked</span> <span className='line'></span>
        </h1>
        <div className="work-content">
          <div className="work-list">
            <div className="work-list_item active">Upstatement</div>
            <div className="work-list_item">Apple</div>
            <div className="work-list_item">Scout Studio</div>
            <div className="work-list_item">Starry</div>
            <div className="work-list_item">MullenLowe</div>
          </div>
          <div className="work-text">
            <h5 className="work-text_title">Lead Engineer <span className='aqua'> @ Upstatement</span></h5>
            <div className="work-text_afterTitle">
              May 2018 - Present
            </div>

            <div className="work-text_items">
              <div className="work-text_item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='work-item_icon' /></span>
                <span>Deliver high-quality, robust production code for a diverse array of 
                  projects for clients including Harvard Business School, Everytown for 
                  Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th
                  News, and more</span>
              </div>
              <div className="work-text_item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='work-item_icon' /></span>
                <span>Work alongside creative directors to lead the research, development,
                  and architecture of technical solutions to fulfill business requirements</span>
              </div>
              <div className="work-text_item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='work-item_icon' /></span>
                <span>Collaborate with designers, project managers, and other engineers to
                transform creative concepts into production realities for clients and 
                stakeholders</span>
              </div>
              <div className="work-text_item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='work-item_icon' /></span>
                <span>Provide leadership within engineering department through close 
                collaboration, knowledge shares, and mentorship</span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Work
