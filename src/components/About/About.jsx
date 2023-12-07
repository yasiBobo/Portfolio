import "./about.css"
import { styled } from 'styled-components'

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
        <span className="num">02.</span> <span>About Me</span> <span className='line'></span>
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
        {/* <div className="about-content_image">
          <div className="content-box">
            <img alt="" />
          </div>
        </div> */}
      </div>
    </motion.div>

    // <div
    //   className='about'
    //   id="about"
    // >
    //   <h1 className="about-title">
    //     <span className="num">02.</span> <span>About Me</span> <span className='line'></span>
    //   </h1>

    //   <div className="about-codes">
    //     <div className="about-code">
    //       <span className='purple dot'>class</span> <span className='dot yellow'>Yasi Boo</span>
    //       <span>{"{"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". ."}</span>
    //       <span className='dot grey'>{"//"}</span>
    //       <span className='grey'>I can, because I did.</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". ."}</span>
    //       <span className='dot grey'>{"//"}</span>
    //       <span className='grey'>My vast variety of skills is continuously expanding.</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". ."}</span>
    //       <span className='purple'>Constructor<b style={{ fontFamily: 'gluten', fontSize: '20px', fontWeight: 300, marginRight: "15px" }}>()</b></span>
    //       <span className='bracket'>{"{"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . ."}</span>
    //       <span className="red">This</span>.
    //       <span className="aqua">name  </span>
    //       <span className="equal red">=</span>
    //       <span className="green">'Yasi'</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . ."}</span>
    //       <span className="red">This</span>.
    //       <span className="aqua">email </span>
    //       <span className="equal red">=</span>
    //       <span className="green">'yasi00bobo@gmail.com'</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . ."}</span>
    //       <span className="red">This</span>.
    //       <span className="aqua">dayOfBirthTimestamp </span>
    //       <span className="equal red">=</span>
    //       <span className="orange">1014502324</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . "}</span>
    //       <span className='bracket'>{" }"}</span>
    //     </div>

    //     {/* Work Section */}
    //     <div className="about-code">
    //       <span className='dot grey'>{". ."}</span>
    //       <span className='yellow'>workExperience<b style={{ fontFamily: 'gluten', fontSize: '20px', fontWeight: 300, marginRight: "15px" }}>()</b></span>
    //       <span className='bracket'>{"{"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . . ."}</span>
    //       <span className="purple dot">return</span>
    //       <span>{"["}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="dot grey dot">{". . . . . ."}</span>
    //       <span className='bracket dot'>{"{"}</span>
    //       <span className="green dot">'2020-now'</span>
    //       <span className='bracket dot'>{":"}</span>
    //       <span className="green dot">'Full-stack Developer/Owner at Pixel Lab'</span>
    //       <span className='bracket dot'>{"}"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="dot grey dot">{". . . . . ."}</span>
    //       <span className='bracket dot'>{"{"}</span>
    //       <span className="green dot">'2020-now'</span>
    //       <span className='bracket dot'>{":"}</span>
    //       <span className="green dot">'Solutions Architect at Digitree Group S.A.'</span>
    //       <span className='bracket dot'>{"}"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="dot grey dot">{". . . . . ."}</span>
    //       <span className='bracket dot'>{"{"}</span>
    //       <span className="green dot">'2017-2023'</span>
    //       <span className='bracket dot'>{":"}</span>
    //       <span className="green dot">'Full-stack Developer at Digitree Group S.A.'</span>
    //       <span className='bracket dot'>{"}"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="dot grey dot">{". . . . . ."}</span>
    //       <span className='bracket dot'>{"{"}</span>
    //       <span className="green dot">'2013-2017'</span>
    //       <span className='bracket dot'>{":"}</span>
    //       <span className="green dot">'Full-Stack Designer at Digitree Group S.A.'</span>
    //       <span className='bracket dot'>{"}"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="dot grey dot">{". . . . . ."}</span>
    //       <span className='bracket dot'>{"{"}</span>
    //       <span className="green dot">'2006-now'</span>
    //       <span className='bracket dot'>{":"}</span>
    //       <span className="green dot">'Full-Stack Designer/developer at Yasio.dev'</span>
    //       <span className='bracket dot'>{"}"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . . ."}</span>
    //       <span>{"]"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . "}</span>
    //       <span className='bracket'>{" }"}</span>
    //     </div>
    //     {/* End Of Work Section */}
    //     {/* Education */}
    //     <div className="about-code">
    //       <span className='dot grey'>{". ."}</span>
    //       <span className='yellow'>Education<b style={{ fontFamily: 'gluten', fontSize: '20px', fontWeight: 300, marginRight: "15px" }}>()</b></span>
    //       <span className='bracket'>{"{"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . . ."}</span>
    //       <span className="purple dot">return</span>
    //       <span>{"["}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="dot grey dot">{". . . . . ."}</span>
    //       <span className='bracket dot'>{"{"}</span>
    //       <span className="green dot">'2012-2014'</span>
    //       <span className='bracket dot'>{":"}</span>
    //       <span className="green dot">'Wyższa Szkoła Biznesu w Dąbrowie Górniczej - Master's Degree (mgr), Computer Science (IT)'</span>
    //       <span className='bracket dot'>{"}"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="dot grey dot">{". . . . . ."}</span>
    //       <span className='bracket dot'>{"{"}</span>
    //       <span className="green dot">'2013-2023'</span>
    //       <span className='bracket dot'>{":"}</span>
    //       <span className="green dot">'Dąbrowie Górniczej - Master's Degree (mgr), Computer Science (IT)'</span>
    //       <span className='bracket dot'>{"}"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . . ."}</span>
    //       <span>{"]"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . "}</span>
    //       <span className='bracket'>{" }"}</span>
    //     </div>
    //     {/* End Of Education */}
    //     {/* Skills */}
    //     <div className="about-code">
    //       <span className='dot grey'>{". ."}</span>
    //       <span className='yellow'>Skills<b style={{ fontFamily: 'gluten', fontSize: '20px', fontWeight: 300, marginRight: "15px" }}>()</b></span>
    //       <span className='bracket'>{"{"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . . ."}</span>
    //       <span className="purple dot">return</span>
    //       <span className='dot'>{"["}</span>
    //       <span className="green dot">'HTML/CSS/JS',</span>
    //       <span className="green dot">'Vue',</span>
    //       <span className="green dot">'Node.js',</span>
    //       <span className="green dot">'Bootstrap',</span>
    //       <span className="green dot">'Tailwind',</span>
    //       <span className="green dot">'Webpack/Gulp/Vite',</span>
    //       <span className="green dot">'SCSS/Less',</span>
    //       <span className="green dot">'Vue',</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="green dot">'NativeScript',</span>
    //       <span className="green dot">'MySQL',</span>
    //       <span className="green dot">'MongoDB',</span>
    //       <span className="green dot">'ORM',</span>
    //       <span className="green dot">'Electron',</span>
    //       <span className="green dot">'Web-extensions',</span>
    //       <span className="green dot">'Docker',</span>
    //       <span className="green dot">'k8s',</span>
    //       <span className="green dot">'SPA',</span>
    //       <span className="green dot">'Webpack',</span>
    //       <span className="green dot">'Gulp',</span>
    //     </div>
    //     <div className="about-code">
    //       <span className="green dot">'GIT/CVS',</span>
    //       <span className="green dot">'NestJS',</span>
    //       <span className="green dot">'Wordpress',</span>
    //       <span className="green dot">'Motion design',</span>
    //       <span className="green dot">'Premiere',</span>
    //       <span className="green dot">'After Effects',</span>
    //       <span className="green dot">'Photoshop',</span>
    //       <span className="green dot">'UX/UI',</span>
    //       <span className='bracket dot'>{"]"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='dot grey'>{". . "}</span>
    //       <span className='bracket'>{" }"}</span>
    //     </div>
    //     <div className="about-code">
    //       <span className='bracket'>{" }"}</span>
    //     </div>
    //   </div>
    // </div>
  )
}

export default About