import "./about.css"

// ICONS
import { VscDebugBreakpointFunction } from "react-icons/vsc"

// SCROLL REVEAL
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const About = () => {
  return (
    <motion.div
      className='about'
      id="about"
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 className="about-title">
        <span className="num">01.</span> <span>About Me</span> <span className='line'></span>
      </h1>

      <div className="about-content">
        <div className="about-content_text">
          <p className='about-text'>
            Hello! My name is Yasi and I enjoy creating things that live on
            the internet. My interest in web development started back in 2021
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about
            HTML & CSS!
          </p>
          <p className='about-text'>
            Fast-forward to today, and I’ve had the privilege of working at
            <span className="aqua"> as a freelancer</span>, <span className="aqua"> a start-up</span>,<span className="aqua"> a huge corporation</span>, and  <span className="aqua">a student-led design career</span>. My main focus these days is buildin accessible, inclusive products and digital experiences for a <span className="aqua">variety </span>  of clients.
          </p>
          <p className="about-text">
            I also recently built my<span className="aqua"> Codepen.io portfolio </span> that covers most of my skills in the passionate journey of learning how code and programme websites and webApps.
          </p>
          <p className="about-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className='about-content_list'>
            <div className="content-items">
              <div className="content-item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='content-item_icon' /></span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="content-item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='content-item_icon' /></span>
                <span>React</span>
              </div>
              <div className="content-item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='content-item_icon' /></span>
                <span>Vite</span>
              </div>
            </div>

            <div className="content-items">
              <div className="content-item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='content-item_icon' /></span>
                <span>PHP</span>
              </div>
              <div className="content-item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='content-item_icon' /></span>
                <span>Laravel</span>
              </div>
              <div className="content-item">
                <span><VscDebugBreakpointFunction color="#5FF2D1" className='content-item_icon' /></span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-content_image">
          <div className="content-box">
            <img alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About